"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  animateNavbarMount,
  animateLogoEntrance,
  animateBurgerToX,
  animateBurgerToDefault,
  animateDrawerOpen,
  animateDrawerClose,
  animateNavbarShrink,
  animateNavbarExpand,
} from "@/animations";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
  number: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about", number: "01" },
  { label: "Portfolio", href: "#portfolio", number: "02" },
  { label: "Contact", href: "#contact", number: "03" },
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // DOM refs
  const navbarRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);

 
  useEffect(() => {
    const initialScrolled = typeof window !== "undefined" && window.scrollY > 10;

    if (initialScrolled) animateNavbarShrink(navbarRef.current);

    animateNavbarMount(navbarRef.current);
    animateLogoEntrance(logoRef.current);

    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      if (scrolled !== isScrolled) setIsScrolled(scrolled);
      if (scrolled) animateNavbarShrink(navbarRef.current);
      else animateNavbarExpand(navbarRef.current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);

  }, [isScrolled]);

  // ── Open drawer 
  const openDrawer = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
    animateBurgerToX(line1Ref.current, line2Ref.current, line3Ref.current);
    animateDrawerOpen(drawerRef.current, overlayRef.current, navLinksRef.current);
  }, []);

  // ── Close drawer 
  const closeDrawer = useCallback(() => {
    animateBurgerToDefault(line1Ref.current, line2Ref.current, line3Ref.current);
    animateDrawerClose(drawerRef.current, overlayRef.current, () => {
      setIsOpen(false);
      document.body.style.overflow = "";
      if (overlayRef.current) overlayRef.current.style.display = "none";
    });
  }, []);

  // ── Toggle 
  const toggleMenu = useCallback(() => {
    if (!isOpen) openDrawer();
    else closeDrawer();
  }, [isOpen, openDrawer, closeDrawer]);

  // ── Close on nav link click 
  const handleLinkClick = useCallback(() => {
    closeDrawer();
  }, [closeDrawer]);


  return (
    <div>
      <header
        ref={navbarRef}
        className={`w-full fixed top-0 left-0 z-40 ${isScrolled ? "bg-black/40 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4">

          {/* Logo  */}
          <Link href="/" className="navbar-logo" aria-label="Home">
            <div ref={logoRef} className="font-bold text-white hover:text-primary text-3xl" aria-hidden="true">
              {"Ashik".split("").map((char, i) => (
                <span key={i} className="logo-char">
                  {char}
                </span>
              ))}
            </div>
            <span className="sr-only">Ashik</span>
          </Link>

          {/* Burger button */}
          <button
            ref={burgerRef}
            onClick={toggleMenu}
            className="burger-btn flex flex-col gap-1 p-2 cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="side-drawer"
          >
            <span ref={line1Ref} className="burger-line" />
            <span ref={line2Ref} className="burger-line " />
            <span ref={line3Ref} className="burger-line" />
          </button>
        </div>
      </header>

      {/* ── Backdrop overlay */}
      <div
        ref={overlayRef}
        className="backdrop-blur-md cursor-pointer fixed inset-0 z-40 bg-[#02041299]"
        style={{ display: "none", opacity: 0 }}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* ── Side drawer */}
      <nav
        ref={drawerRef}
        id="side-drawer"
        className="border-l border-black-200 bg-black-700 min-w-85 flex flex-col fixed top-0 right-0 bottom-0 z-50 backdrop-blur-md side-drawer"
        style={{ visibility: "hidden" }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="w-full flex justify-between items-center px-6 py-4">

          <button
            onClick={closeDrawer}
            className="drawer-close-btn"
            aria-label="Close menu"
          >
            <span className="drawer-close-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="drawer-divider" />

        {/* Nav links */}
        <div ref={navLinksRef} className="flex flex-col flex-1 gap-4 mt-10 px-6" role="menu">
          {NAV_LINKS.map(({ label, href, number }) => (
            <Link
              key={label}
              href={href}
              className="nav-item flex items-center gap-4 px-4 py-3"
              onClick={handleLinkClick}
            >
              <span className="text-primary text-xs tracking-3 shrink-0">{number}</span>
              <span className="text-white nav-item__label flex-1 text-xl font-bold leading-none">{label}</span>
              <span className="nav-item__arrow shrink-0 flex items-center" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Drawer footer */}
        <div className="flex items-center gap-3 py-6 px-7 shrink-0">
          <p className="text-xs text-black-100 tracking-[0.04em]">Let&apos;s build something great.</p>
          <div className="drawer-footer__dot" />
        </div>

        {/* Decorative accent */}
        <div className="drawer-accent" aria-hidden="true" />
      </nav>
    </div>
  );
};

export default Navbar;
