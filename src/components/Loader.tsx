/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
}

const words = ["Developer", "Engineer", "Creator", "Innovator"];

const WordAnimator = ({ word }: { word: string; key?: string | number }) => {
  const characters = Array.from(word);
  return (
    <span className="inline-flex">
      {characters.map((char, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ y: 35, opacity: 0, rotateX: -60, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, rotateX: 0, filter: "blur(0px)" }}
          exit={{ y: -35, opacity: 0, rotateX: 60, filter: "blur(6px)" }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
            delay: index * 0.03,
          }}
          className="inline-block origin-bottom font-display font-extrabold tracking-tight"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

const WireframeGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let angleY = 0;
    let angleX = 0.25;

    const radius = 90;
    const points: { x: number; y: number; z: number }[] = [];
    const latBands = 9;
    const lonBands = 18;

    // Generate sphere points
    for (let lat = 0; lat <= latBands; lat++) {
      const theta = (lat * Math.PI) / latBands;
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);

      for (let lon = 0; lon <= lonBands; lon++) {
        const phi = (lon * 2 * Math.PI) / lonBands;
        const sinPhi = Math.sin(phi);
        const cosPhi = Math.cos(phi);

        const x = cosPhi * sinTheta * radius;
        const y = cosTheta * radius;
        const z = sinPhi * sinTheta * radius;

        points.push({ x, y, z });
      }
    }

    const resize = () => {
      canvas.width = 240;
      canvas.height = 240;
    };
    resize();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Rotate and project points
      const projected: { x: number; y: number; z: number }[] = [];
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      for (const p of points) {
        // Rotate around Y
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.x * sinY + p.z * cosY;

        // Rotate around X
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = p.y * sinX + z1 * cosX;

        // 3D Perspective Projection
        const fov = 200;
        const scale = fov / (fov + z2);
        const x2d = x1 * scale + cx;
        const y2d = y2 * scale + cy;

        projected.push({ x: x2d, y: y2d, z: z2 });
      }

      // Latitudinal lines
      for (let lat = 0; lat <= latBands; lat++) {
        ctx.beginPath();
        for (let lon = 0; lon <= lonBands; lon++) {
          const idx = lat * (lonBands + 1) + lon;
          const p = projected[idx];
          if (lon === 0) {
            ctx.moveTo(p.x, p.y);
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
        // Depth-based color styling
        ctx.strokeStyle = "rgba(167, 139, 250, 0.35)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Longitudinal lines
      for (let lon = 0; lon <= lonBands; lon++) {
        ctx.beginPath();
        for (let lat = 0; lat <= latBands; lat++) {
          const idx = lat * (lonBands + 1) + lon;
          const p = projected[idx];
          if (lat === 0) {
            ctx.moveTo(p.x, p.y);
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
        ctx.strokeStyle = "rgba(167, 139, 250, 0.35)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      angleY += 0.015;
      angleX = 0.25 + Math.sin(angleY * 0.4) * 0.08;

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative w-56 h-56 flex items-center justify-center my-6">
      {/* Centered Initials */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-3xl font-black text-white tracking-widest font-display drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
          PK
        </span>
      </div>
      <canvas ref={canvasRef} className="w-56 h-56 drop-shadow-[0_0_25px_rgba(139,92,246,0.25)]" />
    </div>
  );
};

export default function Loader({ onComplete }: LoaderProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // 2600ms Counter countdown
  useEffect(() => {
    const duration = 2600;
    const intervalTime = 25;
    const steps = duration / intervalTime;
    const increment = 100 / steps;
    let currentVal = 0;

    const timer = setInterval(() => {
      currentVal += increment;
      if (currentVal >= 100) {
        setCount(100);
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          // Allow short delay for fade transition before completing
          setTimeout(onComplete, 600);
        }, 300);
      } else {
        setCount(Math.floor(currentVal));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Words rotation every 600ms during loading
  useEffect(() => {
    const wordTimer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 600);

    return () => clearInterval(wordTimer);
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, ${0.05 + (count / 100) * 0.15}) 0%, rgba(59, 130, 246, ${0.02 + (count / 100) * 0.06}) 40%, #030014 100%)`
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-8 md:p-16 select-none overflow-hidden"
        >
          {/* Subtle Grid overlay for high-tech aesthetic */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          {/* Top Info HUD */}
          <div className="flex justify-between items-start w-full relative z-10">
            <div className="flex flex-col">
              <span className="text-xs font-mono tracking-[0.3em] text-purple-accent uppercase font-bold">
                PRATIKSHA KHANDBAHALE
              </span>
              <span className="text-[9px] font-mono text-white/30 tracking-widest uppercase mt-1">
                Creative Portfolio Initializing
              </span>
            </div>
            <div className="text-right font-mono text-[9px] text-white/30 tracking-widest hidden sm:block">
              <div>REV // 2026.07</div>
              <div>LOC // MH, INDIA</div>
            </div>
          </div>

          {/* Central Orbiting Holographic Rings & Rotating Words */}
          <div className="relative flex flex-col items-center justify-center my-auto z-10">
            {/* Concentric spinning rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
              {/* Outer dotted ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] border border-dashed border-purple-500/10 rounded-full"
              />
              
              {/* Middle solid ring with speed indicator */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] border border-white/5 rounded-full flex items-center justify-center"
              >
                <div className="absolute top-0 w-2 h-2 bg-purple-accent rounded-full shadow-[0_0_12px_rgba(236,72,153,0.8)]" />
                <div className="absolute bottom-0 w-1.5 h-1.5 bg-blue-accent rounded-full shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
              </motion.div>

              {/* Inner ambient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] border border-white/5 rounded-full flex items-center justify-center"
                style={{
                  background: "radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)"
                }}
              >
                <div className="absolute right-0 w-1.5 h-1.5 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
              </motion.div>
            </div>

            {/* Canvas Rotating Globe */}
            <div className="relative z-20">
              <WireframeGlobe />
            </div>

            {/* Word Display Section */}
            <div className="h-14 flex items-center justify-center overflow-hidden z-20">
              <AnimatePresence mode="wait">
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-gradient text-center uppercase tracking-tight">
                  <WordAnimator key={wordIndex} word={words[wordIndex]} />
                </h1>
              </AnimatePresence>
            </div>
            
            <div className="text-[9px] font-mono tracking-[0.25em] text-white/40 uppercase mt-4 z-20">
              System Boot Sequence
            </div>
          </div>

          {/* Bottom Loading Progress Bar & Counter */}
          <div className="w-full max-w-lg mx-auto flex flex-col gap-4 relative z-10">
            <div className="flex justify-between items-baseline font-mono">
              <span className="text-[10px] tracking-[0.2em] text-white/40 font-semibold">LOADING CORE ASSETS</span>
              <span className="text-3xl sm:text-4xl font-black text-white font-sans tracking-tighter">
                {String(count).padStart(3, "0")}
                <span className="text-xs text-white/40 ml-1 font-mono font-medium">%</span>
              </span>
            </div>

            {/* Progress Bar Container */}
            <div className="relative w-full h-[3px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-accent rounded-full relative"
                style={{ width: `${count}%` }}
                transition={{ ease: "easeOut" }}
              >
                {/* Horizontal shimmer overlay */}
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </motion.div>
            </div>

            <div className="flex justify-between text-[9px] font-mono text-white/20 tracking-wider">
              <span>WELCOME PROMPT</span>
              <span>ESTABLISHING INTERFACE</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
