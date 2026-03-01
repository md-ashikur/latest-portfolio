"use client";

import React from "react";

const DetailedBio = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
   
      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">


        {/* Content card with modern glassmorphic design */}
        <div className="relative group">
       
          
          <div className="relative bg-white rounded-3xl border border-gray-100 p-8 lg:p-12">
       
            
            <div className="relative space-y-6">
              <p className="text-gray-500 leading-relaxed">
                I am a growth-minded web developer from Bangladesh, passionate about web development, problem-solving, and building innovative solutions. Served as <span className="font-semibold text-gray-600">President of the PUB Computer & Programming Club</span>, led teams to organize programming contests, workshops, and tech events, while developing strong leadership, teamwork, and project management skills. These experiences also helped me become an independent thinker, a detail-oriented problem solver, and a technophile constantly exploring the latest tools and devices.
              </p>

              <p className="text-gray-500 leading-relaxed">
                I enjoy learning new technologies, coding, and turning ideas into functional applications. I focus on understanding user needs, delivering solutions, and paying attention to details. Outside tech, I am passionate about <span className="font-semibold text-gray-600">community volunteering, running, riding, and exploring nature</span>.
              </p>

              <div className="pt-6 mt-6 border-t border-gray-100">
                <p className="text-gray-500 leading-relaxed">
                  I am open to opportunities in <span className="font-semibold text-gray-600">web development and software engineering</span> and welcome connections with like-minded professionals, mentors, and organizations. <span className="font-semibold text-gray-600">Let&apos;s connect and explore how we can collaborate!</span>
                </p>
              </div>
            </div>

            {/* Featured tags */}
            <div className="mt-10 flex flex-wrap gap-3">
              {['Web Development', 'Problem Solving', 'Leadership', 'Team Collaboration', 'Community Service'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-linear-to-r from-gray-50 to-gray-100 border border-gray-200 text-sm font-medium text-gray-700 hover:border-primary hover:shadow-md transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <a
            href="https://www.linkedin.com/in/md-ashikur-rahman/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-linear-to-r from-primary to-emerald-500 text-white font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span>Let&apos;s Connect</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DetailedBio;
