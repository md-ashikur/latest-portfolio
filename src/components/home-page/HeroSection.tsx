
"use client";

import Image from "next/image";
import ashik from "../../../public/assets/images/head.png";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { SiCodechef, SiLeetcode } from "react-icons/si";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-title", {
        y: 90,
        opacity: 0,
        duration: 1,
      })
        .from(
          ".hero-description",
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.55"
        )
        .from(
          ".hero-cta",
          {
            y: 26,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.45"
        )
        .from(
          ".hero-social a",
          {
            y: 24,
            opacity: 0,
            duration: 0.45,
            stagger: 0.08,
          },
          "-=0.35"
        )
        .from(
          ".hero-image",
          {
            y: 60,
            scale: 0.92,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.6"
        );
    },
    { scope: sectionRef }
  );

  return (

    <section className="hero-background" ref={sectionRef}>

      <section className="h-screen" >
        <div className="relative text-white z-30 mx-auto px-4 lg:px-0 ">
          <h1 className="hero-title lg:text-[200px] text-7xl text-center lg:mt-12 mt-20 font-black">HI, I&apos;M ASHIK</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:mt-20 max-w-300 mx-auto ">
            <div className="relative lg:top-80 flex lg:justify-start justify-center mt-5">
              <p className="hero-description lg:max-w-98 font-light text-white/60 text-justify">Problem Solver. Full-Stack Developer building fast, scalable web applications.
                Specialized in Next.js, React, and modern backend architecture. Turning complex ideas into clean, production-ready products.</p>
            </div>

            <div className="flex flex-col lg:items-end gap-4 lg:space-y-4">
              <div className="hero-cta">
                <Link href="/assets/files/Ashik-Resume.pdf" className="px-8 py-4 border border-primary rounded-full hover:bg-primary uppercase font-bold hover:text-black transition-colors duration-300" download>
                  Download Resume
                </Link>
              </div>

              <div className="hero-social flex items-center lg:justify-around gap-2 mb-10 lg:mb-0">
                <Link href="https://github.com/md-ashikur" target="_blank" aria-label="GitHub" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:bg-black-300 hover:text-primary hover:scale-90 p-2 transition-transform duration-300" >
                  <PiGithubLogoFill aria-hidden="true" />
                </Link>
                <Link href="https://www.linkedin.com/in/md-ashikur-rahman/" target="_blank" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:bg-black-300 hover:text-primary hover:scale-90 p-2 transition-transform duration-300">
                  <FaLinkedinIn aria-hidden="true"  />
                </Link>
                <Link href="https://www.facebook.com/ashikur.rahman999" target="_blank" aria-label="facebook" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:bg-black-300 hover:text-primary hover:scale-90 p-2 transition-transform duration-300" >
                  <FaFacebookF aria-hidden="true" />
                </Link>
                <Link href="https://www.codechef.com/users/ashik01" target="_blank" aria-label="CodeChef" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:bg-black-300 hover:text-primary hover:scale-90 p-2 transition-transform duration-300" >
                  <SiCodechef aria-hidden="true" />
                </Link>
                <Link href="https://leetcode.com/u/ashikur1/" target="_blank" aria-label="LeetCode" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:bg-black-300 hover:text-primary hover:scale-90 p-2 transition-transform duration-300" >
                  <SiLeetcode aria-hidden="true" />
                </Link>
              </div>
            </div>



          </div>

          <div className="flex justify-center  lg:mt-2">

            <Image src={ashik} alt="Ashik" className="hero-image absolute lg:top-30 h-auto lg:w-120 w-90" />

          </div>
        </div>
      </section>

    </section>
  );
};

export default HeroSection;