"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FieldName = "name" | "email" | "message";

const testimonials = [
  {
    text: "Thanks so much Ashik and team for your excellent work. We'll absolutely be working with you again. So impressed by your work, speed, and understanding of what we're looking for. Couldn't be happier.",
    author: "Client feedback",
  },
  {
    text: "Working with Ashik was a game changer for our project. The attention to detail and modern design truly elevated our brand. Highly recommended for any complex frontend work.",
    author: "Recent partner",
  },
  {
    text: "Fast, reliable, and incredibly talented. The glassmorphism and animations fit perfectly with our vision. Seamless communication throughout the whole process.",
    author: "Creative Director",
  },
];

const ContactFormModal = ({ isOpen, onClose }: ContactFormModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Left side refs
  const textContainerRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);

  // Right side refs
  const panelRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const isAnimating = useRef(false);

  const [currentTestimonialIdx, setCurrentTestimonialIdx] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState({ name: false, email: false, message: false });

  // --- Dynamic Testimonial Rotation ---
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      // Fade out current text
      gsap.to(quoteRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.4,
        onComplete: () => {
          setCurrentTestimonialIdx((prev) => (prev + 1) % testimonials.length);
          // Fade in new text
          gsap.fromTo(
            quoteRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.4, delay: 0.1 }
          );
        },
      });
    }, 4000); // 4 seconds total (3s visible + 1s transition)

    return () => clearInterval(interval);
  }, [isOpen]);


  // --- Close handler with animation ---
  const handleClose = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
        onClose();
      },
    });

    // Fade out form elements
    const formElements = formRef.current?.querySelectorAll(".contact-form-item");
    if (formElements?.length) {
      tl.to(formElements, {
        opacity: 0,
        y: 20,
        duration: 0.2,
        stagger: { each: 0.04, from: "end" },
        ease: "power2.in",
      });
    }

    // Fade out left text
    tl.to(
      textContainerRef.current,
      {
        opacity: 0,
        x: -30,
        duration: 0.3,
        ease: "power2.in",
      },
      "<"
    );

    // Slide panel down
    tl.to(
      panelRef.current,
      {
        y: "110%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      },
      "-=0.1"
    );

    // Fade overlay (make sure it fades completely)
    tl.to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      },
      "-=0.3"
    );
  }, [onClose]);

  // --- Open animation ---
  useEffect(() => {
    if (!isOpen) return;
    isAnimating.current = true;

    // Reset states
    gsap.set(overlayRef.current, { opacity: 0 });
    gsap.set(panelRef.current, { y: "100%", opacity: 0 });
    gsap.set(textContainerRef.current, { opacity: 0, x: -30 });
    gsap.set(quoteRef.current, { opacity: 1, y: 0 });

    const formElements = formRef.current?.querySelectorAll(".contact-form-item");
    if (formElements?.length) {
      gsap.set(formElements, { opacity: 0, y: 30 });
    }

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    // Overlay fade in (much darker now)
    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    // Panel slide up
    tl.to(
      panelRef.current,
      {
        y: "0%",
        opacity: 1,
        duration: 0.7,
        ease: "back.out(1.2)",
      },
      "-=0.2"
    );

    // Left text slide in
    tl.to(
      textContainerRef.current,
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.5"
    );

    // Stagger form elements
    if (formElements?.length) {
      tl.to(
        formElements,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }
  }, [isOpen]);

  // --- ESC key ---
  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, handleClose]);

  // --- Cursor glow ---
  const handlePanelMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cursorGlowRef.current || !panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    gsap.to(cursorGlowRef.current, {
      x: x - 150,
      y: y - 150,
      duration: 0.4,
      ease: "power2.out",
    });
  }, []);

  const handlePanelMouseEnter = useCallback(() => {
    if (cursorGlowRef.current) {
      gsap.to(cursorGlowRef.current, { opacity: 1, duration: 0.3 });
    }
  }, []);

  const handlePanelMouseLeave = useCallback(() => {
    if (cursorGlowRef.current) {
      gsap.to(cursorGlowRef.current, { opacity: 0, duration: 0.3 });
    }
  }, []);

  // --- Magnetic button ---
  const handleBtnMouseMove = useCallback((e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.25;
    const deltaY = (e.clientY - centerY) * 0.25;
    gsap.to(btnRef.current, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  const handleBtnMouseLeave = useCallback(() => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.4)",
    });
  }, []);

  // --- Input handlers ---
  const handleInputChange = (field: FieldName) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleFocus = (field: FieldName) => () => setFocused((prev) => ({ ...prev, [field]: true }));
  const handleBlur = (field: FieldName) => () => setFocused((prev) => ({ ...prev, [field]: false }));

  const isLabelUp = (field: FieldName) => focused[field] || formData[field].length > 0;

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-end justify-center z-[60] overflow-y-auto sm:items-start lg:items-center lg:overflow-hidden">
      {/* Darker Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/85 backdrop-blur-xl"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Main Container: Split Layout */}
      <div className="relative flex flex-col justify-end w-full max-w-[1200px] p-0 z-10 sm:p-5 sm:justify-center sm:gap-8 sm:h-full lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:gap-15 lg:h-auto lg:overflow-visible" ref={containerRef}>

        {/* Left Side: Dynamic Text */}
        <div className="hidden sm:flex flex-col text-center items-center w-full mt-10 lg:flex-1 lg:justify-center lg:max-w-[480px] lg:text-left lg:items-start lg:mt-0" ref={textContainerRef}>
          <div className="relative mb-6 min-h-auto lg:min-h-[120px] lg:mb-10" ref={quoteRef}>
            <p className="text-[1.2rem] font-medium leading-relaxed text-white m-0 lg:text-[1.4rem]">
              &quot;{testimonials[currentTestimonialIdx].text}&quot;
            </p>
          </div>
        </div>

        {/* Right Side: Panel */}
        <div className="flex w-full justify-center lg:flex-1 lg:justify-end">
          <div
            ref={panelRef}
            className="relative w-full max-w-full overflow-hidden py-8 px-5 pb-7 mx-5 rounded-t-[24px] z-10 bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(255,255,255,0.03),inset_0_1px_0_rgba(255,255,255,0.05)] sm:max-w-[580px] sm:rounded-[24px] sm:py-11 sm:px-10 sm:pb-9 lg:animate-[contactFloat_5s_ease-in-out_infinite]"
            onMouseMove={handlePanelMouseMove}
            onMouseEnter={handlePanelMouseEnter}
            onMouseLeave={handlePanelMouseLeave}
          >
            {/* Cursor glow */}
            <div ref={cursorGlowRef} className="absolute w-[300px] h-[300px] rounded-full pointer-events-none opacity-0 z-0" style={{ background: "radial-gradient(circle, rgba(118, 245, 188, 0.07) 0%, transparent 70%)" }} />

            {/* Panel gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-[160px] pointer-events-none rounded-t-[24px]" style={{ background: "radial-gradient(ellipse at 30% 0%, rgba(118, 245, 188, 0.06) 0%, transparent 60%)" }} />

            {/* Close button */}
            <button
              className="absolute top-[18px] right-[18px] flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/5 text-white/50 cursor-pointer transition-all duration-300 z-20 hover:bg-[#76f5bc1a] hover:border-[#76f5bc40] hover:text-[#76F5BC] hover:rotate-90"
              onClick={handleClose}
              aria-label="Close contact form"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 1L13 13M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Header */}
            <div className="contact-form-item text-center mb-8">
              <h2 className="text-xl font-extrabold text-white tracking-[0.08em] mb-2 uppercase sm:text-2xl">LET&apos;S WORK TOGETHER</h2>
              <p className="text-[0.85rem] text-white/45 leading-relaxed">
                Tell me a bit about your project, timeline, and rough budget below...
              </p>
            </div>

            {/* Form */}
            <form
              ref={formRef}
              className="flex flex-col gap-6 relative z-10"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Name & Email side by side */}
              <div className="contact-form-item grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-4">
                <div className="relative pt-4">
                  <label className={`absolute left-[14px] text-[0.9rem] text-white/35 pointer-events-none transition-all duration-300 origin-top-left ${isLabelUp("name") ? "top-[2px] left-[2px] text-[0.7rem] !text-[#76F5BC] tracking-[0.06em] uppercase" : "top-[26px]"}`}>Name</label>
                  <input
                    type="text"
                    className="w-full py-2.5 px-3.5 text-[0.95rem] text-white bg-white/5 border border-white/10 rounded-xl outline-none caret-[#76F5BC] transition-all duration-300 focus:border-[#76f5bc4d] focus:bg-white/10"
                    value={formData.name}
                    onChange={handleInputChange("name")}
                    onFocus={handleFocus("name")}
                    onBlur={handleBlur("name")}
                    autoComplete="name"
                  />
                  <div className="relative h-[2px] w-full bg-transparent overflow-hidden -mt-[1px] rounded-b-xl">
                    <div className={`absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-[#76F5BC] to-[#14e888] transition-all duration-300 -translate-x-1/2 rounded-full ${isLabelUp("name") ? 'w-full' : 'w-0'}`} />
                  </div>
                </div>
                <div className="relative pt-4">
                  <label className={`absolute left-[14px] text-[0.9rem] text-white/35 pointer-events-none transition-all duration-300 origin-top-left ${isLabelUp("email") ? "top-[2px] left-[2px] text-[0.7rem] !text-[#76F5BC] tracking-[0.06em] uppercase" : "top-[26px]"}`}>Email</label>
                  <input
                    type="email"
                    className="w-full py-2.5 px-3.5 text-[0.95rem] text-white bg-white/5 border border-white/10 rounded-xl outline-none caret-[#76F5BC] transition-all duration-300 focus:border-[#76f5bc4d] focus:bg-white/10"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    onFocus={handleFocus("email")}
                    onBlur={handleBlur("email")}
                    autoComplete="email"
                  />
                  <div className="relative h-[2px] w-full bg-transparent overflow-hidden -mt-[1px] rounded-b-xl">
                    <div className={`absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-[#76F5BC] to-[#14e888] transition-all duration-300 -translate-x-1/2 rounded-full ${isLabelUp("email") ? 'w-full' : 'w-0'}`} />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="contact-form-item relative pt-4">
                <label className={`absolute left-[14px] text-[0.9rem] text-white/35 pointer-events-none transition-all duration-300 origin-top-left ${isLabelUp("message") ? "top-[2px] left-[2px] text-[0.7rem] !text-[#76F5BC] tracking-[0.06em] uppercase" : "top-[26px]"}`}>Your Message</label>
                <textarea
                  className="w-full py-2.5 px-3.5 text-[0.95rem] text-white bg-white/5 border border-white/10 rounded-xl outline-none caret-[#76F5BC] transition-all duration-300 focus:border-[#76f5bc4d] focus:bg-white/10 resize-none leading-relaxed min-h-[140px]"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange("message")}
                  onFocus={handleFocus("message")}
                  onBlur={handleBlur("message")}
                />
                <div className="relative h-[2px] w-full bg-transparent overflow-hidden -mt-[1px] rounded-b-xl">
                  <div className={`absolute bottom-0 left-1/2 h-[2px] bg-gradient-to-r from-[#76F5BC] to-[#14e888] transition-all duration-300 -translate-x-1/2 rounded-full ${isLabelUp("message") ? 'w-full' : 'w-0'}`} />
                </div>
              </div>

              {/* Submit row: Send + OR + email link */}
              <div className="contact-form-item flex flex-col items-stretch gap-3 pt-1 sm:flex-row sm:items-center sm:gap-4 flex-wrap">
                <button
                  ref={btnRef}
                  type="submit"
                  className="inline-flex w-full sm:w-auto items-center justify-center py-3 px-8 text-[0.95rem] font-bold text-[#03041a] bg-gradient-to-br from-[#76F5BC] to-[#14e888] rounded-xl cursor-pointer transition-all duration-300 shadow-[0_4px_20px_rgba(118,245,188,0.25),0_0_0_1px_rgba(118,245,188,0.1)] hover:shadow-[0_8px_32px_rgba(118,245,188,0.35),0_0_0_1px_rgba(118,245,188,0.2)]"
                  onMouseMove={handleBtnMouseMove}
                  onMouseLeave={handleBtnMouseLeave}
                >
                  Send
                </button>
                <span className="text-[0.75rem] text-center text-white/30 font-medium uppercase tracking-[0.05em] sm:text-left">OR</span>
                <a
                  href="mailto:ashik76690@gmail.com"
                  className="block text-center text-[0.8rem] text-white/45 sm:inline sm:text-left border-b border-white/15 pb-0.5 transition-all duration-300 hover:text-[#76F5BC] hover:border-[#76f5bc66]"
                >
                  Send email to ashik76690@gmail.com
                </a>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>,
    document.body
  );
};

export default ContactFormModal;
