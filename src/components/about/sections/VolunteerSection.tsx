"use client";

import React from "react";
import { HiOutlineHeart, HiCalendar, HiMapPin } from "react-icons/hi2";
import { volunteer } from "@/data/aboutData";

const VolunteerSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #6366f1, #0308a3)" }}>
              <HiOutlineHeart className="text-white text-xl" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">Volunteer</h2>
          </div>
          <p className="text-gray-500 text-lg max-w-3xl">
            Contributing to community initiatives and global tech events
          </p>
        </div>

        {/* Volunteer Timeline */}
        <div className="relative border-l-2 border-gray-200 pl-8 space-y-8 max-w-4xl">
          {volunteer.map((item, index) => (
            <div key={item.id} className="relative">
              {/* Timeline dot */}
              <span className="absolute -left-10.25 top-1 w-4 h-4 rounded-full border-2 border-secondary bg-white" />

              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden">
                {/* Top gradient bar */}
                <div className="absolute top-0 left-0 w-full h-0.75 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: "linear-gradient(90deg, #6366f1, #0308a3)" }} />
                
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Logo placeholder */}
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                    <HiOutlineHeart className="text-2xl text-secondary" />
                    {/* Uncomment when you have actual logos */}
                    {/* <Image
                      src={item.logo}
                      alt={item.organization}
                      width={50}
                      height={50}
                      className="object-contain"
                    /> */}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary border border-secondary/20">
                          {item.role}
                        </span>
                      </div>
                    </div>

                    <p className="text-secondary-300 font-semibold text-sm mb-3">
                      {item.organization}
                    </p>

                    <p className="text-gray-600 text-sm leading-6 mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <HiCalendar className="text-secondary" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <HiMapPin className="text-secondary-300" />
                        <span>{item.location}</span>
                      </div>
                    </div>
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

export default VolunteerSection;
