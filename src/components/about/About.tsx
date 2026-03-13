"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ashik from "../../../public/assets/images/ashik.png";
import {
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineTrophy,
} from "react-icons/hi2";


gsap.registerPlugin(ScrollTrigger);

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript",
  "Node.js", "Express", "MongoDB", "PostgreSQL",
  "Tailwind CSS", "GSAP", "REST APIs", "Git",
];

const stats = [
  { value: 1, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

const experience = [
  {
    role: "Frontend Developer Intern",
    company: "Boomdevs LLC",
    period: "Jul 2025 – Dec 2025",
    type: "Onsite",
    typeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    points: [
      "Built and maintained responsive React & Next.js components for production-grade web applications.",
      "Collaborated with senior engineers in an agile environment to ship features on schedule.",
      "Implemented reusable UI component libraries using Tailwind CSS, improving team velocity.",
    ],
  },
];

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institute: "Pundra University of Science & Technology",
    location: "Bogura, Bangladesh",
    period: "Jan 2022 – Feb 2026",
    status: "Graduated",
    statusColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
];

const services = [
  {
    icon: "⚡",
    title: "Frontend Dev",
    desc: "Pixel-perfect, performant UIs with React & Next.js that feel great on every device.",
  },
  {
    icon: "🛠",
    title: "Backend Dev",
    desc: "Scalable REST APIs and server-side logic with Node.js, Express & databases.",
  },
  {
    icon: "🎨",
    title: "UI / UX Design",
    desc: "Clean, intuitive interfaces designed with the user experience at the forefront.",
  },
  {
    icon: "🚀",
    title: "Web Performance",
    desc: "Optimised load times, code-splitting and Core Web Vitals improvements.",
  },
];

const About = () => {
  const sectionRef   = useRef<HTMLElement>(null);
  const headingRef   = useRef<HTMLDivElement>(null);
  const bioRef       = useRef<HTMLDivElement>(null);
  const imageRef     = useRef<HTMLDivElement>(null);
  const statsRef     = useRef<HTMLDivElement>(null);
  const skillsRef    = useRef<HTMLDivElement>(null);
  const expRef       = useRef<HTMLDivElement>(null);
  const eduRef       = useRef<HTMLDivElement>(null);
  const cardsRef     = useRef<HTMLDivElement>(null);
  const counterRefs  = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const fade = (el: Element | null, vars: gsap.TweenVars, from: gsap.TweenVars) =>
        gsap.fromTo(el, from, {
          ...vars,
          scrollTrigger: { trigger: el, start: "top 85%" },
        });

      fade(headingRef.current, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, { y: 60, opacity: 0 });
      fade(bioRef.current,     { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, { x: -60, opacity: 0 });
      fade(imageRef.current,   { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" }, { x: 60, opacity: 0, scale: 0.92 });

      gsap.fromTo(".skill-tag", { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.45, ease: "back.out(1.4)", stagger: 0.06,
        scrollTrigger: { trigger: skillsRef.current, start: "top 85%" },
      });

      gsap.fromTo(".stat-card", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.12,
        scrollTrigger: { trigger: statsRef.current, start: "top 85%" },
      });

      stats.forEach((stat, i) => {
        const el = counterRefs.current[i];
        if (!el) return;
        ScrollTrigger.create({
          trigger: statsRef.current, start: "top 85%", once: true,
          onEnter: () => {
            gsap.to({ val: 0 }, {
              val: stat.value, duration: 1.8, ease: "power2.out",
              onUpdate: function () { if (el) el.textContent = Math.round(this.targets()[0].val).toString(); },
            });
          },
        });
      });

      gsap.fromTo(".exp-item", { x: -50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.18,
        scrollTrigger: { trigger: expRef.current, start: "top 85%" },
      });

      gsap.fromTo(".edu-item", { x: 50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.18,
        scrollTrigger: { trigger: eduRef.current, start: "top 85%" },
      });

      gsap.fromTo(".service-card", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.65, ease: "power3.out", stagger: 0.13,
        scrollTrigger: { trigger: cardsRef.current, start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden" id="about">

      {/* ── decorative blobs ─────────────────────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-32 w-130 h-130 rounded-full"
        style={{ background: "radial-gradient(circle, #76F5BC22 0%, transparent 70%)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 -left-24 w-100 h-100 rounded-full"
        style={{ background: "radial-gradient(circle, #76F5BC18 0%, transparent 70%)" }} />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10 py-24 lg:py-32">

        {/* ═══════════════════════  HEADING  ══════════════════════════════ */}
        <div ref={headingRef} className="text-center mb-20">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-emerald-500 mb-3">
            Who I Am
          </span>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            About
            <span className="relative inline-block">
              Me
              <span className="absolute left-0 -bottom-1 w-full h-1.25 rounded-full bg-primary" />
            </span>
          </h2>
        </div>

        {/* ═══════════════════════  BIO + IMAGE  ══════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

          <div ref={bioRef}>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-5">
              Building fast, reliable web experiences
            </h3>
            <p className="text-gray-500 text-lg text-justify leading-8 mb-5">
              Hi! I&apos;m <span className="font-semibold text-gray-800">Md. Ashikur Rahman</span>. I design and ship production-grade web applications using React, Next.js, and modern web technologies. My work emphasises performance, accessibility, and maintainable architecture to deliver delightful user experiences.
            </p>
            <p className="text-gray-500 text-lg text-justify leading-8 mb-8">
              I&apos;m actively pursuing opportunities to solve challenging problems, influence product decisions, and grow within collaborative teams.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 bg-gray-50">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-sm font-medium text-gray-700">Open to new opportunities</span>
              </div>
              <a
                href="/assets/files/Ashik-Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-emerald-500 text-emerald-500 text-sm font-semibold hover:bg-emerald-500 hover:text-white transition-colors duration-300"
              >
                ↓ Download CV
              </a>
            </div>
          </div>

          {/* image */}
          <div ref={imageRef} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl opacity-30"
                style={{ background: "linear-gradient(135deg, #76F5BC, #0308a3)" }} />
              <div aria-hidden="true" className="absolute -bottom-6 -left-6 w-32 h-32 opacity-15"
                style={{ backgroundImage: "radial-gradient(circle, #0308a3 1px, transparent 1px)", backgroundSize: "10px 10px" }} />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-72 lg:w-96">
                <Image src={ashik} alt="Ashikur Rahman"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" priority />
                <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl px-5 py-3 border border-gray-100">
                <p className="text-xs text-gray-400 font-medium">Experience</p>
                <p className="text-2xl font-extrabold text-gray-900 leading-none">1+ <span className="text-sm font-medium text-gray-500">yr</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════  STATS  ══════════════ */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((s, i) => (
            <div key={s.label}
              className="stat-card group relative rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden text-center">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "linear-gradient(135deg, #76F5BC0f, #0308a30a)" }} />
              <p className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-1">
                <span ref={(el) => { counterRefs.current[i] = el; }}>0</span>
                <span className="text-primary">{s.suffix}</span>
              </p>
              <p className="text-sm font-medium text-gray-400 tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ═════════  SKILLS  ══════════════ */}
        <div ref={skillsRef} className="mb-24">
          <h3 className="text-center text-2xl font-bold text-gray-900 mb-10">
            Tech Stack &amp; Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="skill-tag cursor-default select-none px-5 py-2 rounded-full text-sm font-semibold border border-gray-200 text-gray-700 hover:border-emerald-500 hover:text-emerald-500 hover:bg-[#76F5BC0f] transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ══════════  EXPERIENCE + EDUCATION  ══════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">

          {/* ── Experience ─────── */}
          <div ref={expRef}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #76F5BC, #22c55e)" }}>
                <HiOutlineBriefcase className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
            </div>

            <div className="relative border-l-2 border-gray-100 pl-8 space-y-8">
              {experience.map((exp) => (
                <div key={exp.role} className="exp-item relative">
                  {/* timeline dot */}
                  <span className="absolute -left-10.25 top-1 w-4 h-4 rounded-full border-2 border-primary bg-white" />

                  <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-0.75 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                      style={{ background: "linear-gradient(90deg, #76F5BC, #0308a3)" }} />
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{exp.role}</h4>
                        <p className="text-emerald-500 font-semibold text-sm">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="text-xs text-gray-400 font-medium">{exp.period}</span>
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${exp.typeColor}`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {exp.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-500 leading-6">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Education ──────────── */}
          <div ref={eduRef}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #6366f1, #0308a3)" }}>
                <HiOutlineAcademicCap className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>

            <div className="relative border-l-2 border-gray-100 pl-8 space-y-8">
              {education.map((edu) => (
                <div key={edu.degree} className="edu-item relative">
                  <span className="absolute -left-10.25 top-1 w-4 h-4 rounded-full border-2 border-secondary bg-white" />

                  <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-0.75 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                      style={{ background: "linear-gradient(90deg, #6366f1, #0308a3)" }} />
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                        <p className="text-secondary-300 font-semibold text-sm">{edu.institute}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{edu.location}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <span className="text-xs text-gray-400 font-medium">{edu.period}</span>
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${edu.statusColor}`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Achievement */}
              <div className="edu-item relative">
                <span className="absolute -left-10.25 top-1 w-4 h-4 rounded-full border-2 border-amber-400 bg-white" />
                <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <HiOutlineTrophy className="text-amber-500 text-xl shrink-0" />
                    <h4 className="text-base font-bold text-gray-900">Achievement</h4>
                  </div>
                  <p className="text-sm text-gray-600 leading-6">
                    Participated in <span className="font-semibold text-gray-800">Pundra University Programming Contest 2023</span> and
                    secured <span className="font-semibold text-amber-600">3rd place</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════  SERVICES  ═════════════════════════════ */}
        <div ref={cardsRef}>
          <h3 className="text-center text-2xl font-bold text-gray-900 mb-10">What I Do</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <div key={svc.title}
                className="service-card group relative rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.75 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: "linear-gradient(90deg, #76F5BC, #0308a3)" }} />
                <div className="text-4xl mb-5">{svc.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{svc.title}</h4>
                <p className="text-sm text-gray-500 leading-6">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════  KNOW MORE BUTTON  ═══════════════════════ */}
        <div className="mt-20 text-center">
          <a
            href="/about"
            className="inline-flex items-center gap-3 px-8 py-2 rounded-full font-bold text-lg bg-linear-to-r from-primary to-emerald-500 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            <span>Know More About Me</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-sm text-gray-400 mt-4">
            Explore my detailed achievements, certifications, and leadership experience
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;