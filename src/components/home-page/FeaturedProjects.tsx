"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import ProjectCard from "../portfolio/ProjectCard";
import { HiArrowRight } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".project-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white">
      <div className="hero-background">
        <section id="content">
          <div className="relative text-white z-30 mx-auto max-w-7xl px-5 lg:px-10 py-24 lg:py-32">
            <div ref={headingRef} className="text-center mb-16">
              <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">
                Portfolio
              </span>
              <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                Featured{" "}
                <span className="relative inline-block">
                  Projects
                  <span className="absolute left-0 -bottom-1 w-full h-1.25 rounded-full bg-primary" />
                </span>
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                A showcase of my recent work building scalable web applications
              </p>
            </div>

            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 group"
              >
                View All Projects
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>
        <div className="bg-gradiant"></div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
