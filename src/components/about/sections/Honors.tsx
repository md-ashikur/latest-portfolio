"use client";

import React from "react";
import { HiOutlineStar, HiSparkles } from "react-icons/hi2";
import { honors } from "@/data/aboutData";

const Honors = () => {
  return (
    <section className="relative py-24 bg-linear-to-br from-yellow-50/30 via-white to-amber-50/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-amber-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-yellow-300/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 lg:px-10">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-amber-400 to-yellow-500 mb-6 shadow-lg relative group">
            <HiOutlineStar className="text-white text-4xl relative z-10" />
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-amber-300 to-yellow-400 opacity-0 group-hover:opacity-100 blur transition duration-300" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            Honors & Awards
          </h2>
          <div className="w-32 h-1.5 bg-linear-to-r from-amber-400 via-yellow-400 to-transparent mx-auto rounded-full mb-4" />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Recognition for excellence in academic and professional pursuits
          </p>
        </div>

        {/* Awards List */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {honors.map((honor, index) => (
            <div
              key={honor.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-amber-400 to-yellow-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition duration-500" />
              
              <div className="relative rounded-3xl border border-amber-100 bg-white p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:translate-x-2 overflow-hidden">
                {/* Animated left bar */}
                <div className="absolute left-0 top-0 w-1.5 h-full bg-linear-to-b from-amber-400 to-yellow-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700" />

                <div className="flex items-center gap-6">
                  {/* Icon with special effects */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-amber-50 to-yellow-50 flex items-center justify-center border-2 border-amber-200 group-hover:border-amber-400 transition-colors duration-300">
                      <HiOutlineStar className="text-2xl text-amber-500" />
                    </div>
                    {/* Sparkle effect on hover */}
                    <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <HiSparkles className="text-amber-400 text-lg animate-pulse" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                      {honor.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-linear-to-r from-amber-100 to-yellow-100 text-amber-700 border border-amber-200">
                        <HiSparkles className="text-sm" />
                        {honor.type}
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm text-gray-500 font-medium">
                        <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {honor.year}
                      </span>
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <div className="hidden lg:block flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-gray-300 group-hover:text-amber-400 transform group-hover:translate-x-2 transition-all duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Honors;
