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
    { x: -600, y: 80, rotate: -180, scale: 0.6, zIndex: 7 },
    // { x: -500, y: 320, rotate: -205, scale: 0.92, zIndex: 7 },
];

const HomePage = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const rocketRef = useRef<HTMLDivElement | null>(null);


    const getBaseOffset = (el: HTMLElement) => {
        let top = 0, left = 0;
        let curr: HTMLElement | null = el;
        while (curr) {
            top += curr.offsetTop;
            left += curr.offsetLeft;
            curr = curr.offsetParent as HTMLElement;
        }
        return { top, left };
    };

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
                invalidateOnRefresh: true, // Recalculate dynamic values on resize
            },
        });

        tl.set(rocket, DEFAULT_STATE);
        tl.to(rocket, PATH_STEPS[0]);
        tl.to(rocket, PATH_STEPS[1]);

        // Dynamically compute the final position
        tl.to(rocket, {
            ...PATH_STEPS[2],
            x: () => {
                const target = document.querySelector('.text-emerald-500.uppercase') as HTMLElement;
                if (!target || !rocket) return PATH_STEPS[2].x;

                const rBase = getBaseOffset(rocket);
                const tBase = getBaseOffset(target);

                const targetCenterX = tBase.left + target.offsetWidth / 2;
                const rocketCenterX = rBase.left + rocket.offsetWidth / 2;

                return targetCenterX - rocketCenterX;
            },
            y: () => {
                const target = document.querySelector('.text-emerald-500.uppercase') as HTMLElement;
                if (!target || !rocket) return PATH_STEPS[2].y;

                const rBase = getBaseOffset(rocket);
                const tBase = getBaseOffset(target);

                const targetTop = tBase.top;
                const rocketCenterY = rBase.top + rocket.offsetHeight / 2;

                // Account for the rocket's scale in the final step (PATH_STEPS[2].scale)
                const finalScale = PATH_STEPS[2].scale || 1;
                const scaledHalfHeight = (rocket.offsetHeight / 2) * finalScale;
                const visualBottomY = rocketCenterY + scaledHalfHeight;

                // Position slightly above the target
                return targetTop - visualBottomY - 10;
            }
        });

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        };
    }, { scope: containerRef });


    return (
        <div ref={containerRef} className="overflow-x-hidden">
            <div ref={rocketRef} className="absolute -bottom-30 right-80 z-5">
                <Rocket />
            </div>
            <HeroSection />
            <div className="relative z-6">
                <About />
            </div>
            <div className="section-bg">
                <FeaturedProjects />
                <ContactSection />
            </div>
        </div>
    );
};

export default HomePage;