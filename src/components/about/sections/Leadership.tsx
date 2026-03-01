"use client";

import React from "react";
import { HiOutlineUserGroup, HiMapPin, HiCalendar } from "react-icons/hi2";
import { leadership } from "@/data/aboutData";

const Leadership = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-40 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-primary to-emerald-500 mb-6 shadow-lg relative group">
            <HiOutlineUserGroup className="text-white text-4xl relative z-10" />
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary to-emerald-400 opacity-0 group-hover:opacity-100 blur transition duration-300" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            Leadership & Volunteer
          </h2>
          <div className="w-32 h-1.5 bg-linear-to-r from-primary via-emerald-400 to-transparent mx-auto rounded-full mb-4" />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Community involvement and leadership experience
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-emerald-400 to-transparent transform lg:-translate-x-1/2 hidden md:block" />

          <div className="space-y-16">
            {leadership.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 hidden md:flex w-16 h-16 rounded-full bg-linear-to-br from-primary to-emerald-500 items-center justify-center shadow-xl ring-4 ring-white z-10">
                  <HiOutlineUserGroup className="text-white text-2xl" />
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="group relative">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-linear-to-r from-primary to-emerald-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition duration-500" />
                    
                    <div className="relative rounded-3xl border border-gray-100 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      {/* Gradient accent line */}
                      <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-1.5 h-full bg-linear-to-b from-primary to-emerald-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700`} />
                      
                      {/* Logo Section */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="shrink-0 w-16 h-16 rounded-2xl bg-linear-to-br from-primary/10 to-emerald-50 flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                          <HiOutlineUserGroup className="text-3xl text-primary" />
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
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                            {item.title}
                          </h3>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-sm font-bold text-primary">
                              {item.role}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Organization */}
                      <div className="mb-4 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-emerald-500" />
                        <p className="text-emerald-600 font-semibold">
                          {item.organization}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <HiCalendar className="text-primary text-lg" />
                          <span className="font-medium">{item.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <HiMapPin className="text-emerald-500 text-lg" />
                          <span className="font-medium">{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block w-[calc(50%-4rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
