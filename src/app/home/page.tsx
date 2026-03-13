'use client';

import HeroSection from "@/components/home-page/HeroSection";
import FeaturedProjects from "@/components/home-page/FeaturedProjects";
import About from "@/components/about/About";
import ContactSection from "@/components/contact/ContactSection";
import Rocket from "@/common/Rocket";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_STATE = {
    x: 0,
    y: 50,
    rotate: 0,
    scale: 1,
    zIndex: 5,
};

const PATH_STEPS = [
    { x: -100, y: -100, rotate: -80, scale: 1, zIndex: 5 },
    { x: -480, y: -150, rotate: -120, scale: 1.5, zIndex: 7 },
    { x: -580, y: 80, rotate: -180, scale: 0.6, zIndex: 7 },
    // { x: -500, y: 320, rotate: -205, scale: 0.92, zIndex: 7 },
];

const HomePage = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const rocketRef = useRef<HTMLDivElement | null>(null);


    useGSAP(() => {
        const rocket = rocketRef.current;
        if (!rocket) return;

        const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
                trigger: rocket,
                start: "top 95%",
                end: "top top",
                scrub: true,
                markers: true,
            },
        });

        tl.set(rocket, DEFAULT_STATE);
        tl.to(rocket, PATH_STEPS[0]);
        tl.to(rocket, PATH_STEPS[1]);
        tl.to(rocket, PATH_STEPS[2]);
        // tl.to(rocket, PATH_STEPS[3]);

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        };
    }, { scope: containerRef });


    return (
        <div ref={containerRef}>
            <div ref={rocketRef} className="absolute -bottom-30 right-80 z-5">
                <Rocket />
            </div>
            <HeroSection />
            <div className="relative z-6">
                <About />
            </div>
            <div className="hero-background">
                <FeaturedProjects />
                <ContactSection />
            </div>
        </div>
    );
};

export default HomePage;