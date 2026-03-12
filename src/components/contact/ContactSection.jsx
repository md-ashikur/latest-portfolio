"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const parentRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const parent = parentRef.current;
    const section = sectionRef.current;
   
    gsap.fromTo(
      section,
      { height: "0px" },
      {
        height: "530px",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "top 20%",
          scrub: true,

       
        },
      },
    );
     gsap.fromTo(
      parent,
      { height: "0px" },
      {
        height: "480px",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "top 60%",
          scrub: true,
    
        },
      },
    );
  }, []);

  return (
    <div ref={parentRef} className="h-100 relative mb-10">
      <div
        ref={sectionRef}
        className="absolute bottom-5 left-[50%] w-[95%] bg-white backdrop-blur-sm rounded-2xl overflow-hidden border-2 flex items-center z-30"
        style={{ transform: "translateX(-50%)" }}
      >
        <div className="text-center p-20">
          <h3 className="text-4xl text-secondary-700 font-bold">
            Let&apos;s build something great.
          </h3>
          <button className="bg-secondary text-xl font-bold text-white my-4 py-4 px-8 rounded-full hover:bg-secondary transition-colors duration-300">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
