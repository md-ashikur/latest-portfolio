"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { HiXMark } from "react-icons/hi2";

type Achievement = {
  id: number;
  title: string;
  organization?: string;
  date?: string;
  description?: string;
  certificateImage?: string;
  badge?: string;
};

interface Props {
  open: boolean;
  onClose: () => void;
  achievement?: Achievement | null;
}

const AchievementsModal: React.FC<Props> = ({ open, onClose, achievement }) => {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    // focus close button for accessibility
    setTimeout(() => closeBtnRef.current?.focus(), 60);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !achievement) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="fixed inset-0 bg-black/10 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={achievement.title} 
        className="relative bg-white border border-gray-50 backdrop-blur-2xl rounded-3xl max-w-6xl w-full mx-auto shadow-2xl transform transition-all duration-200 scale-100"
      >
        <button
          ref={closeBtnRef}
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-md bg-white/90 hover:bg-white text-gray-700 z-20 shadow"
        >
          <HiXMark className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 lg:p-6">
          <div className="relative h-98 w-140 p-2 overflow-hidden rounded-2xl border-2 border-gray-50">
                <Image
                  src={achievement.certificateImage || "/assets/images/certificate/placeholder.jpg"}
                  alt={achievement.title}
                  fill
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 "
                />
          </div>

          <div className="p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-extrabold mb-2 text-black">{achievement.title}</h3>
              <div className="flex items-center gap-3 text-sm text-gray-700 mb-4">
                 <span>{achievement.organization}</span>
                {achievement.date && <span> • {achievement.date}</span>}
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">{achievement.description}</p>

              {achievement.badge && (
                <div className="inline-block px-3 py-1 rounded-full border border-gray-50 bg-white/50 text-secondary font-semibold mb-4">
                  {achievement.badge}
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={achievement.certificateImage || "/assets/images/certificate/placeholder.jpg"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 flex-1 sm:flex-none px-4 py-3 rounded-lg bg-linear-to-r from-secondary-400 to-secondary text-white font-semibold hover:shadow-lg transition"
              >
                View Full Certificate
              </a>

              <a
                href={achievement.certificateImage || "/assets/images/certificate/placeholder.jpg"}
                download
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-100 bg-white text-gray-700 hover:bg-gray-50 transition flex-1 sm:flex-none"
              >
                Download
              </a>

          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsModal;
