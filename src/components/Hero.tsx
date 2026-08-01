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
  Terminal,
  ChevronDown
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
  { name: "Vue JS", icon: Layers },
  { name: "Tailwind CSS", icon: Sparkles },
  { name: "Next JS", icon: Layers },
  { name: "Node JS", icon: Terminal },
  { name: "Python", icon: Code },
  { name: "MERN Stack", icon: Database },
];

export default function Hero({ onNavClick, onOpenResume, theme = "dark" }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);

  // Carousel timer for rotating roles
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const finalPhoto = "/photo.png?v=v3";

  // Duplicate technologies list for seamless single-line continuous loop
  const duplicatedTechnologies = useMemo(() => [...tickerTechnologies, ...tickerTechnologies, ...tickerTechnologies], []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-between pt-24 pb-0 overflow-hidden select-none"
    >
      {/* Background radial glowing gradients matching theme */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-pink-500/5 blur-[120px] -z-10 pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-rose-500/5 blur-[150px] -z-10 pointer-events-none animate-pulse-slow" style={{ animationDelay: "-3s" }} />

      {/* Hero Outer Container */}
      <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between px-4 sm:px-6 md:px-8 z-10 gap-4 mb-0">

        {/* Floating Hello World pill badge at the top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center md:justify-start pt-2"
        >
          <div className="px-4 py-1.5 rounded-full border border-pink-500/15 bg-pink-500/5 backdrop-blur-md text-[10px] font-mono tracking-[0.3em] font-black uppercase flex items-center gap-2 text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.1)]">
            <span className="inline-block animate-bounce">🌸</span>
            <span>Hello World!</span>
          </div>
        </motion.div>

        {/* 2-Column Core Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end flex-1">

          {/* Left Column: Copywriting & Actions */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start gap-6 pb-6">

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

              {/* Horizontal Social Links capsule with branded GitHub & LinkedIn badges */}
              <div className="flex items-center gap-2.5 p-1.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md self-center sm:self-auto justify-center">
                <a
                  href="https://github.com/pratikshaa27"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 bg-slate-900/90 text-white hover:bg-black hover:text-pink-400 hover:scale-110 shadow-sm transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pratiksha-khandbahale-005b39256/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center border border-[#0A66C2]/40 bg-[#0A66C2] text-white hover:bg-[#084e96] hover:scale-110 shadow-sm transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-white fill-white" />
                </a>
              </div>

            </motion.div>

            {/* Animated Mouse & Arrow Scroll Down Motion Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              onClick={() => onNavClick("about")}
              className="flex items-center gap-2.5 cursor-pointer group mt-4 pt-2 z-10"
            >
              <div className="w-4 h-7 rounded-full border border-white/30 group-hover:border-pink-400/60 flex justify-center p-0.5 transition-colors relative shadow-[0_0_10px_rgba(236,72,153,0.15)]">
                <motion.div
                  className="w-0.5 h-1.5 bg-pink-400 rounded-full"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-white/50 group-hover:text-pink-400 uppercase transition-colors flex items-center gap-1">
                Scroll Down <ChevronDown className="w-3.5 h-3.5 text-pink-400 animate-bounce" />
              </span>
            </motion.div>

          </div>

          {/* Right Column: Portrait Silhouette TOUCHING the skills line banner directly */}
          <div className="lg:col-span-5 flex items-end justify-center lg:justify-end relative self-end mt-auto h-full z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] aspect-[4/5] flex items-end justify-center"
            >
              {/* Soft Subtle Neon Pink Ambient Glow Aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500/15 via-rose-500/10 to-pink-600/15 blur-2xl pointer-events-none" />

              {/* Subject Portrait sitting directly on top of top border of line */}
              <img
                src={finalPhoto}
                alt="Pratiksha Khandbahale Portrait"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "/photo.png?v=v3";
                }}
                className="w-full h-full object-contain object-bottom filter drop-shadow-[0_0_12px_rgba(236,72,153,0.3)] transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>

        </div>

      </div>

      {/* End of Hero Section: Strict 1-Line Infinite Moving Skills Marquee Banner */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full relative overflow-hidden py-4 border-y z-20 transition-colors duration-300 ${
          theme === "light"
            ? "bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 border-pink-400/40 shadow-[0_4px_25px_rgba(236,72,153,0.3)]"
            : "bg-gradient-to-r from-[#3d021b] via-[#be185d] to-[#3d021b] border-pink-400/30 shadow-[0_4px_30px_rgba(236,72,153,0.35)]"
        }`}
      >
        {/* Continuous Sweeping Light Beam Animation */}
        <motion.div
          className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none -skew-x-12 z-10"
          animate={{ x: ["-100%", "350%"] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
        />

        {/* Side fade masks for ultra-smooth edge blending */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#3d021b] to-transparent z-10 pointer-events-none opacity-50" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#3d021b] to-transparent z-10 pointer-events-none opacity-50" />

        {/* Strict 1-Line Horizontal Infinite Slider Container */}
        <div className="w-full overflow-hidden flex items-center select-none">
          <motion.div
            className="flex items-center flex-nowrap whitespace-nowrap gap-8 sm:gap-14 min-w-max"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedTechnologies.map((tech, i) => (
              <div key={`${tech.name}-${i}`} className="flex items-center gap-8 sm:gap-14 flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.12, y: -3 }}
                  className="flex items-center gap-3 transition-all cursor-pointer group py-1 px-3 rounded-xl hover:bg-white/15"
                >
                  <motion.div
                    whileHover={{ rotate: 18, scale: 1.25 }}
                    transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  >
                    <TechLogo name={tech.name} className="w-5 h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
                  </motion.div>
                  <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase !text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] group-hover:text-pink-100 transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
                <span className="!text-white/40 font-light text-sm select-none">|</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}
