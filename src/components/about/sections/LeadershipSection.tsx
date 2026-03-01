"use client";

import React from "react";
import { HiOutlineBriefcase, HiCalendar, HiMapPin } from "react-icons/hi2";
import { leadership } from "@/data/aboutData";

const LeadershipSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #76F5BC, #22c55e)" }}>
              <HiOutlineBriefcase className="text-white text-xl" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">Leadership</h2>
          </div>
          <p className="text-gray-500 text-lg max-w-3xl">
            Building and leading teams to achieve collective goals through programming clubs and tech events
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leadership.map((item) => (
            <div key={item.id} className="relative">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden">
                {/* Top gradient bar */}
                <div className="absolute top-0 left-0 w-full h-0.75 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: "linear-gradient(90deg, #76F5BC, #0308a3)" }} />
                
                <div className="flex items-start gap-4 mb-4">
                  {/* Logo placeholder */}
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                    <HiOutlineBriefcase className="text-2xl text-primary" />
                    {/* Uncomment when you have actual logos */}
                    {/* <Image
                      src={item.logo}
                      alt={item.organization}
                      width={50}
                      height={50}
                      className="object-contain"
                    /> */}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                      {item.role}
                    </span>
                  </div>
                </div>

                <p className="text-emerald-600 font-semibold text-sm mb-3">
                  {item.organization}
                </p>

                <p className="text-gray-600 text-sm leading-6 mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <HiCalendar className="text-primary" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <HiMapPin className="text-emerald-500" />
                    <span>{item.location}</span>
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

export default LeadershipSection;
