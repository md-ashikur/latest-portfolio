"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Project } from "@/data/projects";
import {
  HiArrowLeft,
  HiArrowUpRight,
  HiCodeBracket,
  HiCheckCircle,
} from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const [activeImage, setActiveImage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".detail-section",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white min-h-screen">
      <div className="hero-background">
        <section id="content">
          <div className="relative text-white z-30 mx-auto px-5 lg:px-10 max-w-7xl py-16 lg:py-24">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-white/80 hover:text-primary font-medium mb-8 group transition-colors duration-300"
            >
              <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Portfolio
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 text-sm font-bold rounded-full bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-4 py-1.5 text-sm font-bold rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-sm">
                      Featured
                    </span>
                  )}
                </div>

                <h1 className="text-3xl lg:text-5xl font-extrabold mb-4 leading-tight">
                  {project.title}
                </h1>

                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-6 text-sm text-white/70 mb-8">
                  <div>
                    <span className="font-semibold text-white">Role:</span> {project.role}
                  </div>
                  <div>
                    <span className="font-semibold text-white">Duration:</span> {project.duration}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-black font-semibold hover:bg-primary/90 transition-all duration-300"
                    >
                      <HiArrowUpRight className="w-5 h-5" />
                      View Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                    >
                      <HiCodeBracket className="w-5 h-5" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <div className="relative aspect-video bg-gray-900">
                  <Image
                    src={project.images[activeImage]}
                    alt={`${project.title} - Image ${activeImage + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {project.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 backdrop-blur-md rounded-full px-4 py-2">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeImage === idx ? "bg-primary w-6" : "bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`View image ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <div className="bg-gradiant"></div>
      </div>

      <div ref={contentRef} className="relative mx-auto max-w-7xl px-5 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="detail-section">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            <div className="detail-section">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <HiCheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.challenges.length > 0 && (
              <div className="detail-section">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Challenges</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                      <span className="text-primary font-bold shrink-0">→</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="detail-section">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Technologies</h3>

                {project.technologies.frontend.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.frontend.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white text-gray-700 border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.technologies.backend.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.backend.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white text-gray-700 border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.technologies.tools.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white text-gray-700 border border-gray-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="detail-section">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-sm font-semibold rounded-lg bg-white text-gray-700 border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-gray-200 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
      
      
