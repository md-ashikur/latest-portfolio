import React from "react";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";
import DetailedBio from "@/components/about/sections/DetailedBio";
import Achievements from "@/components/about/sections/Achievements";
import LeadershipSection from "@/components/about/sections/LeadershipSection";
import VolunteerSection from "@/components/about/sections/VolunteerSection";
import Honors from "@/components/about/sections/Honors";
import Certifications from "@/components/about/sections/Certifications";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="section-bg">
        <section >
          <div className="relative text-white z-30 mx-auto px-5 lg:px-10 max-w-7xl py-16 lg:py-24">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-primary font-medium mb-8 group transition-colors duration-300"
            >
              <HiArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Link>

            <div className="text-center mb-8">
              <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">
                About
              </span>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                About
                <span className="relative inline-block ml-2">
                  Me
                  <span className="absolute left-0 -bottom-1 w-full h-1.25 rounded-full bg-primary" />
                </span>
              </h1>
              <p className="text-white/80 text-lg max-w-5xl mx-auto">
                Passionate Full Stack Developer | Problem Solver | MERN stack developer | Competitive Programmer
              </p>
            </div>
          </div>
        </section>
        <div className="bg-gradiant"></div>
      </div>


      {/* Content Sections */}
      <DetailedBio />
      <Achievements />
      <LeadershipSection />
      <VolunteerSection />
      <Honors />
      <Certifications />
    </main>
  );
}
