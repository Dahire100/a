/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [hoverState, setHoverState] = useState<"default" | "hover" | "text" | "click" | "project">("default");
  const [isVisible, setIsVisible] = useState(false);

  // High performance motion values
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  // Smooth physics
  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Subtle soft aura spring
  const auraSpringConfig = { damping: 32, stiffness: 180, mass: 0.6 };
  const auraXSpring = useSpring(cursorX, auraSpringConfig);
  const auraYSpring = useSpring(cursorY, auraSpringConfig);

  useEffect(() => {
    // Hide default cursor on desktop
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setHoverState("click");
    const handleMouseUp = () => setHoverState("default");

    // Dynamic hover states on various elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // 1. Project hover states
      if (target.closest("[data-cursor='project']")) {
        setHoverState("project");
        return;
      }

      // 2. Button / link / interactive states
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']") ||
        target.closest(".cursor-pointer") ||
        target.closest("[aria-label]")
      ) {
        setHoverState("hover");
        return;
      }

      // 3. Text / input editing states
      if (
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("p") ||
        target.closest("h1") ||
        target.closest("h2") ||
        target.closest("h3") ||
        target.closest("h4") ||
        target.closest("strong") ||
        target.closest("span:not(.cursor-pointer)")
      ) {
        setHoverState("text");
        return;
      }

      setHoverState("default");
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  // Reduced subtle cursor styles
  const getCursorStyle = () => {
    switch (hoverState) {
      case "click":
        return {
          width: 10,
          height: 10,
          backgroundColor: "rgba(236, 72, 153, 0.8)",
          borderColor: "#EC4899",
          borderWidth: "1px",
        };
      case "hover":
        return {
          width: 36,
          height: 36,
          backgroundColor: "rgba(236, 72, 153, 0.12)",
          borderColor: "#EC4899",
          borderWidth: "1.5px",
        };
      case "text":
        return {
          width: 3,
          height: 20,
          borderRadius: "2px",
          backgroundColor: "#F43F5E",
          borderColor: "transparent",
          borderWidth: "0px",
        };
      case "project":
        return {
          width: 64,
          height: 64,
          backgroundColor: "rgba(244, 63, 94, 0.18)",
          borderColor: "#F43F5E",
          borderWidth: "1.5px",
        };
      case "default":
      default:
        return {
          width: 16,
          height: 16,
          backgroundColor: "rgba(236, 72, 153, 0.05)",
          borderColor: "rgba(236, 72, 153, 0.5)",
          borderWidth: "1.5px",
        };
    }
  };

  const cursorStyle = getCursorStyle();

  return (
    <>
      {/* Subtle Minimal Pink Glow Follower (Reduced size & opacity) */}
      <motion.div
        className="fixed top-0 left-0 w-[150px] h-[150px] rounded-full bg-gradient-to-r from-pink-500/10 via-rose-500/05 to-transparent blur-[40px] pointer-events-none z-[9998] hidden md:block"
        style={{
          x: auraXSpring,
          y: auraYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Outer Ring Follower */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[10000] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          width: cursorStyle.width,
          height: cursorStyle.height,
          borderColor: cursorStyle.borderColor,
          borderWidth: cursorStyle.borderWidth,
          backgroundColor: cursorStyle.backgroundColor,
          borderRadius: cursorStyle.borderRadius,
        }}
        animate={{
          scale: hoverState === "click" ? 0.85 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />

      {/* Inner Pink Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-pink-500 rounded-full pointer-events-none z-[10000] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: hoverState === "text" || hoverState === "project" ? 0 : 1,
          scale: hoverState === "click" ? 1.4 : 1,
        }}
      />

      {/* Interactive indicator for projects */}
      {hoverState === "project" && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[10001] hidden md:flex items-center justify-center font-mono text-[8px] font-bold text-white tracking-widest uppercase"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: "-50%",
            translateY: "-50%",
            width: 64,
            height: 64,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          VIEW
        </motion.div>
      )}
    </>
  );
}
