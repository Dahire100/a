/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import TechLogo from "./TechLogo";
import {
  ArrowUpRight,
  Linkedin,
  Github,
  Twitter,
  FileDown,
  Sparkles,
  Award,
  Database,
  Layers,
  Cpu,
  Code,
  Terminal
} from "lucide-react";

interface HeroProps {
  onNavClick: (sectionId: string) => void;
  onOpenResume?: () => void;
  theme?: "dark" | "light";
}

const roles = [
  "Junior Associate @ ESDS Software Solution",
  "AI & Data Science Specialist",
  "Full-Stack Software Engineer",
  "State-Level Hackathon Champion",
];

const tickerTechnologies = [
  { name: "React JS", icon: Layers },
  { name: "Python", icon: Code },
  { name: "Machine Learning", icon: Cpu },
  { name: "MERN Stack", icon: Database },
  { name: "Node JS", icon: Terminal },
  { name: "Tailwind CSS", icon: Sparkles },
  { name: "SQL Databases", icon: Database },
];

export default function Hero({ onNavClick, onOpenResume, theme = "dark" }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [profilePhoto, setProfilePhoto] = useState<string | null>(() => {
    return localStorage.getItem("pratiksha_profile_photo") || null;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setProfilePhoto(localStorage.getItem("pratiksha_profile_photo") || null);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Carousel timer for rotating roles
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const fallbackPhoto = "/photo.png";
  const finalPhoto = profilePhoto || fallbackPhoto;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden px-4 sm:px-6 md:px-8 select-none"
    >
      {/* Background radial glowing gradients matching theme */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-pink-500/5 blur-[120px] -z-10 pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-rose-500/5 blur-[150px] -z-10 pointer-events-none animate-pulse-slow" style={{ animationDelay: "-3s" }} />

      {/* Hero Outer Container */}
      <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between z-10 gap-12">

        {/* Floating Hello World pill badge at the top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center md:justify-start"
        >
          <div className="px-4 py-1.5 rounded-full border border-pink-500/15 bg-pink-500/5 backdrop-blur-md text-[10px] font-mono tracking-[0.3em] font-black uppercase flex items-center gap-2 text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.1)]">
            <span className="inline-block animate-bounce">🌸</span>
            <span>Hello World!</span>
          </div>
        </motion.div>

        {/* 2-Column Core Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1">

          {/* Left Column: Copywriting & Actions */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start gap-6">

            <div className="flex flex-col gap-2">
              <motion.span
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xs sm:text-sm font-mono tracking-[0.25em] text-pink-400 uppercase font-black"
              >
                PRATIKSHA KHANDBAHALE
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.08] tracking-tight font-sans"
              >
                Hi, I'm <span className="font-display italic bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 bg-clip-text text-transparent">Pratiksha</span> 🌸
              </motion.h1>
            </div>

            {/* Rotating Role Banner with high cinematic transition */}
            <div className="h-8 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-sm sm:text-base md:text-lg font-mono font-bold tracking-wide text-white/95 flex items-center gap-2"
                >
                  <span className="text-pink-400 font-extrabold">//</span> {roles[roleIndex]}
                </motion.h3>
              </AnimatePresence>
            </div>

            {/* Concise professional statement */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xl text-center lg:text-left font-sans"
            >
              I am an AI & Data Science specialist and full-stack software engineer based in India. I focus on building highly performant, visually clean web applications, custom machine learning pipelines, and robust database architectures. I love turning complex logic into beautiful, user-first experiences.
            </motion.p>

            {/* CTA action buttons and social links row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto"
            >
              {/* Primary Download CV Button (Opens Resume Modal Preview) */}
              {onOpenResume ? (
                <button
                  onClick={onOpenResume}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-extrabold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileDown className="w-4 h-4 animate-bounce" />
                  <span>View CV</span>
                </button>
              ) : (
                <button
                  onClick={() => onNavClick("contact")}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-extrabold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              )}

              {/* Secondary Outlined Button (View Projects) */}
              <button
                onClick={() => onNavClick("projects")}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-xs tracking-wider uppercase hover:border-pink-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4 text-pink-400" />
              </button>

              {/* Horizontal Social Links capsule */}
              <div className="flex items-center gap-2.5 p-1.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md self-center sm:self-auto justify-center">
                <a
                  href="https://github.com/pratikshaa27"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/5 bg-white/5 hover:bg-pink-500/10 hover:border-pink-500/20 text-white/75 hover:text-pink-400 hover:scale-105 transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pratiksha-khandbahale-005b39256/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/5 bg-white/5 hover:bg-pink-500/10 hover:border-pink-500/20 text-white/75 hover:text-pink-400 hover:scale-105 transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

            </motion.div>

          </div>

          {/* Right Column: Frameless Neon Pink Glowing Portrait Silhouette */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative w-full max-w-[280px] sm:max-w-[330px] aspect-[4/5] flex items-center justify-center"
            >
              {/* Vibrant Neon Pink Ambient Glow Aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500/40 via-rose-500/30 to-pink-600/40 blur-3xl animate-pulse-slow pointer-events-none" />

              {/* Frameless Glowing Subject Portrait */}
              <img
                src={finalPhoto}
                alt="Pratiksha Khandbahale Portrait"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "/photo.png";
                }}
                className="w-full h-full object-contain object-bottom filter drop-shadow-[0_0_35px_rgba(236,72,153,0.75)] drop-shadow-[0_0_15px_rgba(244,63,94,0.5)] transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>

        </div>

        {/* Bottom Technology Stack capsule horizontal ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full py-4 px-6 rounded-3xl bg-slate-950/40 border border-white/10 backdrop-blur-md flex flex-wrap justify-center sm:justify-between items-center gap-4 text-white"
        >
          <div className="flex items-center gap-2 shrink-0">
            <Award className="w-4 h-4 text-pink-400 animate-bounce" />
            <span className="text-[10px] font-mono tracking-widest font-extrabold uppercase text-white/50">CORE SYSTEM COMPETENCIES //</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-5 text-xs font-semibold font-mono tracking-wide text-white/85">
            {tickerTechnologies.map((tech, i) => {
              return (
                <div key={tech.name} className="flex items-center gap-3">
                  {i > 0 && <span className="text-white/15 font-light">|</span>}
                  <div className="flex items-center gap-2 hover:text-pink-400 transition-colors">
                    <TechLogo name={tech.name} className="w-4 h-4 flex-shrink-0" />
                    <span>{tech.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>

      {/* Mouse scroll down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none z-10 hidden md:flex opacity-35">
        <span className="text-[8px] font-mono tracking-[0.25em] text-white/45 uppercase">Scroll Down</span>
        <div className="w-[14px] h-6 rounded-full border border-white/20 flex justify-center p-0.5">
          <motion.div
            className="w-0.5 h-1 bg-pink-400 rounded-full"
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

    </section>
  );
}
