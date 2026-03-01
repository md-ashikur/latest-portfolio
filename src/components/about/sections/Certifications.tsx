"use client";

import React from "react";
import { HiOutlineAcademicCap, HiOutlineArrowTopRightOnSquare, HiCheckBadge } from "react-icons/hi2";
import { certifications } from "@/data/aboutData";

const Certifications = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 mb-6 shadow-lg relative group">
            <HiOutlineAcademicCap className="text-white text-4xl relative z-10" />
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 blur transition duration-300" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            Licenses & Certifications
          </h2>
          <div className="w-32 h-1.5 bg-linear-to-r from-blue-500 via-indigo-500 to-transparent mx-auto rounded-full mb-4" />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Professional certifications and training achievements
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition duration-500" />
              
              <div className="relative h-full rounded-3xl border border-blue-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Top gradient bar with animation */}
                <div className="h-2 bg-linear-to-r from-blue-500 via-indigo-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                <div className="p-8">
                  {/* Certificate Image Placeholder */}
                  <div className="relative w-full h-64 mb-6 rounded-2xl overflow-hidden bg-linear-to-br from-blue-50 to-indigo-50 border-2 border-blue-100 group-hover:border-blue-300 transition-colors duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <HiOutlineAcademicCap className="text-8xl text-blue-400/40" />
                        <div className="absolute inset-0 bg-linear-to-br from-blue-400/20 to-indigo-400/20 blur-2xl" />
                      </div>
                    </div>
                    {/* Badge overlay */}
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <HiCheckBadge className="text-2xl text-blue-500" />
                      </div>
                    </div>
                    {/* Uncomment when you have actual images */}
                    {/* <Image
                      src={cert.certificateImage}
                      alt={cert.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    /> */}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-indigo-500" />
                      <p className="text-indigo-600 font-bold text-sm">
                        {cert.issuer}
                      </p>
                    </div>

                    {/* Details in cards */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="rounded-xl bg-blue-50 border border-blue-100 p-3">
                        <p className="text-xs text-gray-500 font-medium mb-1">Issued</p>
                        <p className="text-sm text-gray-900 font-bold">{cert.issueDate}</p>
                      </div>
                      <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-3">
                        <p className="text-xs text-gray-500 font-medium mb-1">Credential ID</p>
                        <p className="text-xs text-gray-900 font-mono font-bold truncate">{cert.credentialId}</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={cert.link}
                      className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-full bg-linear-to-r from-blue-500 to-indigo-600 text-white font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 group/btn"
                    >
                      <span>View Certificate</span>
                      <HiOutlineArrowTopRightOnSquare className="text-lg group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </a>
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

export default Certifications;
