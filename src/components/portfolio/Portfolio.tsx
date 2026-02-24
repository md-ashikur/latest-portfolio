

"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const allTags = Array.from(
  new Set(projects.flatMap((p) => p.tags))
).sort();

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.tags.includes(activeFilter));
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
      className="relative bg-white min-h-screen py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute top-20 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <div ref={headingRef} className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">
            My Work
          </span>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Project{" "}
            <span className="relative inline-block">
              Portfolio
              <span className="absolute left-0 -bottom-1 w-full h-1.25 rounded-full bg-primary" />
            </span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Explore my collection of web applications and experiments
          </p>
        </div>

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
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === tag
                  ? "bg-primary text-black shadow-lg shadow-primary/30"
                  : "bg-gray-50 text-gray-700 border border-gray-200 hover:border-primary hover:text-primary"
              }`}
            >
              {tag}
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