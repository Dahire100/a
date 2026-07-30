/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from "react";
import { BookOpen, Laptop, Compass, Heart, GraduationCap } from "lucide-react";
import { motion, animate } from "motion/react";

interface CountUpProps {
  value: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
}

function CountUp({ value, duration = 2, decimals = 0, suffix = "" }: CountUpProps) {
  const nodeRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate(current) {
        node.textContent = current.toFixed(decimals) + suffix;
      },
    });

    return () => controls.stop();
  }, [value, duration, decimals, suffix]);

  return <span ref={nodeRef}>0</span>;
}

export default function About() {
  const currentFocus = [
    {
      title: "Currently Learning",
      description: "AI, Deep Learning & Generative Models",
      icon: BookOpen,
      color: "from-purple-accent/15 to-blue-accent/5",
      border: "hover:border-purple-accent/40",
    },
    {
      title: "Building",
      description: "Full Stack Intelligent Web Systems",
      icon: Laptop,
      color: "from-blue-accent/15 to-pink-accent/5",
      border: "hover:border-blue-accent/40",
    },
    {
      title: "Exploring",
      description: "Neural Networks & Predictive Analytics",
      icon: Compass,
      color: "from-pink-accent/15 to-purple-accent/5",
      border: "hover:border-pink-accent/40",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20 relative"
    >
      {/* Cinematic continuous rotating background blob */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-gradient-to-tr from-pink-500/5 to-purple-500/5 rounded-full blur-[120px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/5 to-pink-500/5 rounded-full blur-[120px] pointer-events-none -z-10"
      />

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-start text-left mb-16"
      >
        <span className="text-xs font-mono tracking-[0.3em] text-purple-accent uppercase mb-2">
          01 / PROFILE
        </span>
        <h2 className="text-4xl md:text-6xl text-white font-medium flex items-center gap-3">
          <span className="text-3xl md:text-5xl animate-pulse">🌸</span>
          About{" "}
          <span className="font-display font-display-serif italic text-gradient">
            Me
          </span>
          <span className="text-3xl md:text-5xl animate-pulse">🌸</span>
        </h2>
        <div className="w-16 h-[2px] bg-gradient-accent mt-4" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Statement of Purpose (Premium Floating Document Card) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          animate={{
            y: [0, -6, 0],
          }}
          // Separate continuous float from entrance animation
          className="lg:col-span-7 rounded-[32px] glass-panel p-8 md:p-10 flex flex-col justify-between relative overflow-hidden"
          style={{
            animation: "float 6s ease-in-out infinite",
          }}
        >
          {/* Subtle watermark background */}
          <div className="absolute right-6 top-8 text-white/5 font-mono text-8xl font-bold select-none pointer-events-none">
            01
          </div>

          <div>
            {/* Header style */}
            <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-accent/10 border border-purple-accent/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-purple-accent" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg leading-tight">Professional Summary</h3>
                <span className="text-[10px] font-mono text-white/40 uppercase">EXECUTIVE BRIEF</span>
              </div>
            </div>

            {/* Document Content */}
            <div className="space-y-6 text-white/80 text-sm sm:text-base leading-relaxed text-left">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                My name is <strong className="text-white font-semibold">Pratiksha Khandbahale</strong>, and I am a passionate Artificial Intelligence & Data Science graduate currently working as a Junior Associate in the Software Division at ESDS Software Solution Limited.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                I am driven by a strong interest in building intelligent, scalable, and user-focused software solutions. My passion lies at the intersection of Artificial Intelligence, Data Science, and Full Stack Development, where I continuously explore modern technologies and apply them to solve real-world problems.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                With hands-on experience in software development, backend systems, databases, and AI-driven solutions, I focus on writing clean, efficient, and maintainable code while continuously improving my technical expertise.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                I believe technology has the power to create meaningful impact, and my goal is to contribute to innovative projects, collaborate with talented teams, and grow as a software professional by building solutions that make a difference.
              </motion.p>
            </div>
          </div>

          {/* Footer of the statement card */}
          <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40">
            <span className="flex items-center gap-1.5 text-purple-accent/80">
              <Heart className="w-3.5 h-3.5 fill-purple-accent/20" /> Passion driven development.
            </span>
            <span>PRATIKSHA KHANDBAHALE</span>
          </div>
        </motion.div>

        {/* Right: Current Focus Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
          {currentFocus.map((focus, index) => {
            const Icon = focus.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`flex-1 rounded-3xl glass-panel p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group glass-panel-hover border-transparent ${focus.border}`}
              >
                {/* Micro glowing color block */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${focus.color} opacity-40 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />

                {/* Focus Header */}
                <div className="flex justify-between items-start z-10">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-center shadow-lg group-hover:border-white/20 transition-all duration-300">
                    <Icon className="w-6 h-6 text-white group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-300" />
                  </div>
                  <span className="text-[10px] font-mono text-white/30 tracking-wider">FOCUS 0{index + 1}</span>
                </div>

                {/* Focus Text */}
                <div className="mt-6 text-left z-10">
                  <h4 className="text-xs font-mono text-purple-accent/80 uppercase tracking-widest mb-1.5">
                    {focus.title}
                  </h4>
                  <p className="text-lg sm:text-xl font-bold text-white tracking-tight leading-tight">
                    {focus.description}
                  </p>
                </div>

                {/* Abstract geometric micro line accent */}
                <div className="absolute right-0 bottom-0 w-12 h-1 h-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Premium Stats Counter Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 relative">
        {[
          { label: "B.TECH ACADEMIC CGPA", val: 8.44, dec: 2, suff: "", subtitle: "K. K. Wagh IEER" },
          { label: "COMPLETED PROJECTS", val: 12, dec: 0, suff: "+", subtitle: "Full Stack & AI" },
          { label: "HACKATHON STANDINGS", val: 1, dec: 0, suff: "st", subtitle: "State Level Champion" },
        ].map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 120, damping: 16, delay: idx * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-3xl glass-panel p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group/stat hover:border-purple-accent/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] animate-[fadeIn_0.5s_ease_out]"
          >
            {/* Glossy hover reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-accent/0 via-purple-accent/5 to-blue-accent/0 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Neon glowing line accent */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-purple-accent/40 to-transparent group-hover/stat:via-purple-accent/80 transition-all duration-500" />

            <div className="text-left">
              <span className="text-[10px] font-mono tracking-[0.2em] text-white/30 block mb-2 uppercase">{stat.label}</span>
              <h3 className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight text-gradient">
                <CountUp value={stat.val} decimals={stat.dec} suffix={stat.suff} />
              </h3>
            </div>
            <div className="text-left mt-4 border-t border-white/5 pt-3">
              <span className="text-[10px] font-mono text-purple-accent/70 uppercase tracking-wider">{stat.subtitle}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
