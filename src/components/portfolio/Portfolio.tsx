

"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { HiArrowLeft } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

const allTags = Array.from(
  new Set(projects.flatMap((p) => p.category))
).sort();

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category.includes(activeFilter));
  }, [activeFilter]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      gsap.fromTo(
        filterRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: "power3.out" }
      );

      gsap.fromTo(
        ".project-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
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
    <section
      ref={sectionRef}
      className="relative bg-white min-h-screen"
    >
      <div className="hero-background">
        <section className="content">
          <div className="relative text-white z-30 mx-auto px-5 lg:px-10 max-w-7xl py-16 lg:py-24">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-primary font-medium mb-8 group transition-colors duration-300"
            >
              <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Link>

            <div ref={headingRef} className="text-center mb-8">
              <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">
                My Work
              </span>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                Project{" "}
                <span className="relative inline-block">
                  Portfolio
                  <span className="absolute left-0 -bottom-1 w-full h-1.25 rounded-full bg-primary" />
                </span>
              </h1>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Explore my collection of web applications and experiments
              </p>
            </div>
          </div>
        </section>
        <div className="bg-gradiant"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10 py-16 lg:py-24">
        <div ref={filterRef} className="flex flex-wrap justify-center gap-3 mb-16">
          <button
            onClick={() => setActiveFilter("All")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeFilter === "All"
                ? "bg-primary text-black shadow-lg shadow-primary/30"
                : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-primary hover:text-primary"
            }`}
          >
            All Projects
          </button>
          {allTags.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-primary text-black shadow-lg shadow-primary/30"
                  : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No projects found with this filter
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;