"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiArrowUpRight,
} from "react-icons/hi2";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/#contact" },
  ];

  const socials = [
    { name: "GitHub", icon: FaGithub, href: "https://github.com/md-ashikur" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/in/md-ashikur-rahman" },
    { name: "Twitter", icon: FaTwitter, href: "https://twitter.com/md_ashikur1" },
    { name: "Facebook", icon: FaFacebook, href: "https://facebook.com/ashikur.rahman999" },
  ];

  return (
    <footer ref={footerRef} className="relative bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10 py-16 lg:py-20">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Section */}
          <div className="footer-item lg:col-span-5">
            <Link href="/" className="inline-block mb-6 group">
              <h3 className="text-3xl font-extrabold flex items-center gap-2">
                <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Ashik
                </span>
                <span className="text-primary group-hover:rotate-180 transition-transform duration-500">
                  .
                </span>
              </h3>
            </Link>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-md text-sm">
              Building fast, reliable web experiences with modern technologies.
              Passionate about creating elegant solutions to complex problems.
              Let&apos;s create something amazing together.
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                    aria-label={social.name}
                  >
                    <div className="absolute inset-0 bg-primary rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    <div className="relative w-11 h-11 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-300 hover:bg-primary hover:border-primary hover:text-black transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-item lg:col-span-3">
            <h4 className="text-base font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group text-sm"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-primary transition-all duration-300" />
                    {item.name}
                    <HiArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-item lg:col-span-4">
            <h4 className="text-base font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:ashik76690@gmail.com"
                  className="group flex items-start gap-3 text-gray-300 hover:text-primary transition-all duration-300"
                >
                  <div className="relative mt-0.5">
                    <div className="absolute inset-0 bg-primary rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    <div className="relative w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary transition-all duration-300">
                      <HiOutlineEnvelope className="w-4.5 h-4.5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Email</p>
                    <p className="text-sm font-medium">ashik76690@gmail.com</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801705433694"
                  className="group flex items-start gap-3 text-gray-300 hover:text-primary transition-all duration-300"
                >
                  <div className="relative mt-0.5">
                    <div className="absolute inset-0 bg-primary rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                    <div className="relative w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary transition-all duration-300">
                      <HiOutlinePhone className="w-4.5 h-4.5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Phone</p>
                    <p className="text-sm font-medium">+880 1705 433694</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-300">
                  <div className="relative mt-0.5">
                    <div className="w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                      <HiOutlineMapPin className="w-4.5 h-4.5" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Location</p>
                    <p className="text-sm font-medium">Bogura-5800, Bangladesh</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider with Animation */}
        <div className="relative h-px bg-white/10 mb-8">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary to-transparent opacity-50" />
        </div>

        {/* Bottom Bar */}
        <div className="footer-item flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()}   <span className="text-primary font-semibold">Ashik</span>. All rights reserved.   </p>
          <div className="flex items-center gap-8 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-primary transition-colors duration-300 relative group"
            >
              Privacy
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-primary transition-colors duration-300 relative group"
            >
              Terms
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary/20 rounded-br-3xl" />
    </footer>
  );
};

export default Footer;