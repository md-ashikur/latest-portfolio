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
    { name: "GitHub", icon: FaGithub, href: "https://github.com" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com" },
    { name: "Twitter", icon: FaTwitter, href: "https://twitter.com" },
    { name: "Facebook", icon: FaFacebook, href: "https://facebook.com" },
  ];

  return (
    <footer ref={footerRef} className="relative bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="footer-item lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-extrabold text-gray-900">
                Ashik<span className="text-primary">.</span>
              </h3>
            </Link>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
              Building fast, reliable web experiences with modern technologies.
              Let's create something amazing together.
            </p>
            <div className="flex flex-wrap gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-primary hover:border-primary hover:text-black transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-item">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-primary transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {item.name}
                    <HiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-item">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-start gap-2 group"
                >
                  <HiOutlineEnvelope className="w-5 h-5 shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">your.email@example.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-start gap-2 group"
                >
                  <HiOutlinePhone className="w-5 h-5 shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">+123 456 7890</span>
                </a>
              </li>
              <li>
                <div className="text-gray-600 flex items-start gap-2">
                  <HiOutlineMapPin className="w-5 h-5 shrink-0 mt-0.5" />
                  <span className="text-sm">Dhaka, Bangladesh</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-item pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Ashik. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;