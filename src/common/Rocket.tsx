
'use client';

import Image from "next/image";
import rocket from "../../public/assets/images/rocket.png";
import rocketfire from "../../public/assets/images/rocketFire.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Rocket = () => {
    const rocketRef = useRef<HTMLDivElement | null>(null);
    const fireRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const r = rocketRef.current;
        const f = fireRef.current;

        let rocketTween: gsap.core.Tween | null = null;
        let fireTween: gsap.core.Tween | null = null;

        if (r) {
            rocketTween = gsap.to(r, {
                y: -8,
                duration: 1.2,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
            });
        }

        if (f) {
            fireTween = gsap.to(f, {
                y: 6,
                duration: 0.32,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
                scaleY: 1.05,
            });
        }

        return () => {
            if (rocketTween) rocketTween.kill();
            if (fireTween) fireTween.kill();
        };
    }, []);

    return (
        <div className="flex flex-col justify-center items-center mx-auto z-30">
            <div ref={rocketRef} className="pointer-events-none">
                <Image src={rocket} alt="Rocket" className="w-16 h-auto" />
            </div>
            <div ref={fireRef} className="-mt-2 pointer-events-none">
                <Image src={rocketfire} alt="Rocket Fire" className="w-6 h-auto" />
            </div>
        </div>
    );
};

export default Rocket;