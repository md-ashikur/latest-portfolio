"use client";

import { useRef, useEffect, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uMouse;

varying vec2 vUv;

// --- Noise Functions ---
float random (in vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f*f*(3.0-2.0*f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

float fbm (in vec2 st) {
    float value = 0.0;
    float amplitude = 0.5;
    
    mat2 rot = mat2(cos(0.5), sin(0.5),
                    -sin(0.5), cos(0.50));
    
    for (int i = 0; i < 6; i++) {
        value += amplitude * noise(st);
        st = rot * st * 2.0;
        amplitude *= 0.5;
    }
    return value;
}

void main() {
    vec2 st = gl_FragCoord.xy / uResolution.xy;
    st.x *= uResolution.x / uResolution.y;

    vec2 motion = vec2(uTime * 0.02, uTime * 0.005);
    
    vec2 q = vec2(0.);
    q.x = fbm(st * 2.0 + motion);
    q.y = fbm(st * 2.0 + motion * 1.5 + vec2(1.0));
    
    vec2 r = vec2(0.);
    r.x = fbm(st * 4.0 + q + motion * 2.5 + vec2(1.7, 9.2));
    r.y = fbm(st * 4.0 + q + motion * 3.0 + vec2(8.3, 2.8));
    
    float f = fbm(st * 3.0 + r);
    
    vec3 colorBg = vec3(0.02, 0.03, 0.08);
    vec3 colorDark = vec3(0.08, 0.1, 0.15);
    vec3 colorLight = vec3(0.12, 0.18, 0.25);
    
    vec3 cloudColor = mix(colorBg, colorDark, clamp((f*f)*4.0, 0.0, 1.0));
    cloudColor = mix(cloudColor, colorLight, clamp(length(q), 0.0, 1.0));
    cloudColor = mix(cloudColor, vec3(0.2, 0.25, 0.35), clamp(length(r.x), 0.0, 1.0));

    // --- Cursor Light Interaction ---
    // Distort space for the light to shine through the clouds
    vec2 distortedSt = st + vec2(r.x, r.y) * 0.2; 
    float mouseDist = distance(distortedSt, uMouse);
    
    // Vibrant eye-catchy colors
    vec3 pinkColor = vec3(1.0, 0.2, 0.6);
    vec3 blueColor = vec3(0.0, 0.6, 1.0);
    vec3 yellowColor = vec3(1.0, 0.8, 0.1);
    
    // Smooth transitions between colors based on time and noise
    float timeShift1 = sin(uTime * 0.4) * 0.5 + 0.5;
    float timeShift2 = cos(uTime * 0.3) * 0.5 + 0.5;
    
    vec3 lightColorBase = mix(pinkColor, blueColor, timeShift1);
    lightColorBase = mix(lightColorBase, yellowColor, timeShift2 * f);
    
    // Remove irregular flashing and flickering, replace with a smooth gentle pulse
    float gentlePulse = sin(uTime * 1.5) * 0.15 + 0.85;
    
    // Core light glow (wider and softer instead of tight/fractured)
    float glowStrength = 1.0 - smoothstep(0.0, 0.8, mouseDist * 1.2);
    glowStrength = pow(glowStrength, 1.8);
    
    // Edge scattering (illuminate the veins of the clouds)
    float cloudEdges = smoothstep(0.3, 0.6, f) - smoothstep(0.6, 0.9, f); 
    float scatter = smoothstep(0.8, 0.0, f); 
    
    vec3 lightningFx = lightColorBase * glowStrength * gentlePulse * (cloudEdges * 3.0 + scatter * 1.5);

    vec3 finalColor = cloudColor + lightningFx;

    float vignette = length(vUv - 0.5);
    finalColor *= 1.0 - vignette * 0.5;

    gl_FragColor = vec4(finalColor, 1.0);
}
`;

const BackgroundMaterial = () => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size, viewport } = useThree();
  
  const targetMouse = useRef(new THREE.Vector2(0.5, 0.5));
  const currentMouse = useRef(new THREE.Vector2(0.5, 0.5));
  const [aspectRatio, setAspectRatio] = useState(1);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    }),
    []
  );

  useEffect(() => {
    uniforms.uResolution.value.set(size.width, size.height);
    setAspectRatio(size.width / size.height);
  }, [size, uniforms]);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      // Use pageX and pageY to map exact coordinate over the fixed canvas regardless of scroll!
      const aspect = window.innerWidth / window.innerHeight;
      targetMouse.current.set(
        (e.pageX / window.innerWidth) * aspect,
        1.0 - (e.pageY / window.innerHeight)
      );
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
      
      currentMouse.current.lerp(targetMouse.current, 0.08); // Add slight smoothing
      materialRef.current.uniforms.uMouse.value.copy(currentMouse.current);
    }
  });

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
};

export const StormHeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#03041a]">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]} // Safely handles SSR and optimizes performance securely
        gl={{ antialias: false, alpha: false }}
      >
        <BackgroundMaterial />
      </Canvas>
    </div>
  );
};

export default StormHeroBackground;

