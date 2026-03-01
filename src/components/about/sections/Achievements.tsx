"use client";


import Image from "next/image";
import { HiOutlineTrophy, HiSparkles } from "react-icons/hi2";
import { achievements } from "@/data/aboutData";

const Achievements = () => {
  return (
    <section className="relative py-24 bg-linear-to-br from-amber-50/30 via-white to-orange-50/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-300/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-300/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-linear-to-br from-amber-400 to-orange-500 mb-6 shadow-lg relative group">
            <HiOutlineTrophy className="text-white text-4xl relative z-10" />
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-amber-300 to-orange-400 opacity-0 group-hover:opacity-100 blur transition duration-300" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            Achievements
          </h2>
          <div className="w-32 h-1.5 bg-linear-to-r from-amber-400 via-orange-400 to-transparent mx-auto rounded-full mb-4" />
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Recognition and accomplishments in competitive programming and tech events
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-linear-to-r from-amber-400 to-orange-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition duration-500" />
              
              <div className="relative h-full rounded-3xl border border-amber-100 bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                {/* Top gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-amber-400 via-orange-400 to-amber-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                
                {/* Achievement badge */}
                {achievement.badge && (
                  <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-linear-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    <HiSparkles className="text-sm" />
                    {achievement.badge}
                  </div>
                )}

                {/* Certificate Image Placeholder */}
                <div className="relative w-full h-52 mb-6 rounded-2xl overflow-hidden bg-linear-to-br from-amber-50 to-orange-50 border-2 border-amber-100 group-hover:border-amber-300 transition-colors duration-300">
                
               
                  <Image
                    src={achievement.certificateImage}
                    alt={achievement.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-emerald-500" />
                    <p className="text-emerald-600 font-semibold text-sm">
                      {achievement.organization}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {achievement.description}
                  </p>
                  
                  <div className="pt-4 flex items-center justify-between border-t border-gray-100">
                    <span className="inline-flex items-center gap-1.5 text-xs text-amber-600 font-semibold">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {achievement.date}
                    </span>
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

export default Achievements;
