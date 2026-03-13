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
    <div className="contact-overlay-wrapper" style={{ zIndex: 9999 }}>
      {/* Darker Overlay */}
      <div
        ref={overlayRef}
        className="contact-overlay backdrop-blur-xl"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Main Container: Split Layout */}
      <div className="contact-container" ref={containerRef}>

        {/* Left Side: Dynamic Text */}
        <div className="contact-left" ref={textContainerRef}>
          <div className="contact-quote-wrapper" ref={quoteRef}>
            <p className="contact-quote-text">
              &quot;{testimonials[currentTestimonialIdx].text}&quot;
            </p>
          </div>


        </div>

        {/* Right Side: Panel */}
        <div className="contact-right">
          <div
            ref={panelRef}
            className="contact-panel"
            onMouseMove={handlePanelMouseMove}
            onMouseEnter={handlePanelMouseEnter}
            onMouseLeave={handlePanelMouseLeave}
          >
            {/* Cursor glow */}
            <div ref={cursorGlowRef} className="contact-cursor-glow" />

            {/* Panel gradient accent */}
            <div className="contact-panel-accent" />

            {/* Close button */}
            <button
              className="contact-close-btn"
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
            <div className="contact-form-item contact-header">
              <h2 className="contact-title">LET&apos;S WORK TOGETHER</h2>
              <p className="contact-subtitle">
                Tell me a bit about your project, timeline, and rough budget below...
              </p>
            </div>

            {/* Form */}
            <form
              ref={formRef}
              className="contact-form"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Name & Email side by side */}
              <div className="contact-row contact-form-item">
                <div className={`contact-field ${isLabelUp("name") ? "active" : ""}`}>
                  <label className="contact-label">Name</label>
                  <input
                    type="text"
                    className="contact-input"
                    value={formData.name}
                    onChange={handleInputChange("name")}
                    onFocus={handleFocus("name")}
                    onBlur={handleBlur("name")}
                    autoComplete="name"
                  />
                  <div className="contact-input-line" />
                </div>
                <div className={`contact-field ${isLabelUp("email") ? "active" : ""}`}>
                  <label className="contact-label">Email</label>
                  <input
                    type="email"
                    className="contact-input"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    onFocus={handleFocus("email")}
                    onBlur={handleBlur("email")}
                    autoComplete="email"
                  />
                  <div className="contact-input-line" />
                </div>
              </div>

              {/* Message */}
              <div className={`contact-field contact-form-item ${isLabelUp("message") ? "active" : ""}`}>
                <label className="contact-label contact-label--textarea">Your Message</label>
                <textarea
                  className="contact-input contact-textarea"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange("message")}
                  onFocus={handleFocus("message")}
                  onBlur={handleBlur("message")}
                />
                <div className="contact-input-line" />
              </div>

              {/* Submit row: Send + OR + email link */}
              <div className="contact-form-item contact-submit-row">
                <button
                  ref={btnRef}
                  type="submit"
                  className="contact-submit-btn"
                  onMouseMove={handleBtnMouseMove}
                  onMouseLeave={handleBtnMouseLeave}
                >
                  Send
                </button>
                <span className="contact-or">OR</span>
                <a
                  href="mailto:ashik76690@gmail.com"
                  className="contact-email-link"
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
