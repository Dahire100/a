/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { 
  BrainCircuit, 
  Cpu, 
  Terminal, 
  Clock, 
  CheckSquare, 
  HelpCircle,
  TrendingUp,
  Database,
  Code
} from "lucide-react";

interface TechLogoProps {
  name: string;
  className?: string;
}

export default function TechLogo({ name, className = "w-5 h-5" }: TechLogoProps) {
  const norm = name.toLowerCase().trim();

  // Python logo SVG
  if (norm.includes("python")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.87 2C8.32 2 5.48 4.84 5.48 8.39V10.22H11.87C13.08 10.22 14.06 11.2 14.06 12.41C14.06 13.62 13.08 14.6 11.87 14.6H5.48V15.51C5.48 19.06 8.32 21.9 11.87 21.9C15.42 21.9 18.26 19.06 18.26 15.51V13.68H11.87C10.66 13.68 9.68 12.7 9.68 11.49C9.68 10.28 10.66 9.3 11.87 9.3H18.26V8.39C18.26 4.84 15.42 2 11.87 2Z" fill="url(#python_gradient_a)" />
        <path d="M12.13 22C15.68 22 18.52 19.16 18.52 15.61V13.78H12.13C10.92 13.78 9.94 12.8 9.94 11.59C9.94 10.38 10.92 9.4 12.13 9.4H18.52V8.49C18.52 4.94 15.68 2.1 12.13 2.1C8.58 2.1 5.74 4.94 5.74 8.49V10.32H12.13C13.34 10.32 14.32 11.3 14.32 12.51C14.32 13.72 13.34 14.7 12.13 14.7H5.74V15.61C5.74 19.16 8.58 22 12.13 22Z" fill="url(#python_gradient_b)" />
        <circle cx="9" cy="5.5" r="0.75" fill="#FFFFFF" />
        <circle cx="15" cy="18.5" r="0.75" fill="#FFFFFF" />
        <defs>
          <linearGradient id="python_gradient_a" x1="5.48" y1="11.95" x2="18.26" y2="11.95" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#306998" />
            <stop offset="100%" stopColor="#4B8BBE" />
          </linearGradient>
          <linearGradient id="python_gradient_b" x1="5.74" y1="12.05" x2="18.52" y2="12.05" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFE052" />
            <stop offset="100%" stopColor="#FFC331" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // JavaScript logo SVG
  if (norm === "javascript" || norm === "js") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M18.8 19.2C18.1 20.3 16.9 20.9 15.4 20.9C13.4 20.9 12.3 19.6 12.3 17.5H14.5C14.5 18.6 14.9 19.1 15.6 19.1C16.2 19.1 16.6 18.7 16.6 18.1V12.1H18.8V19.2ZM24 16.1C24 19.3 22.1 20.9 19.2 20.9C17 20.9 15.5 19.8 15.2 17.8H17.4C17.6 18.7 18.3 19.1 19.2 19.1C20.2 19.1 20.8 18.5 20.8 17.5C20.8 16.5 20.1 16.1 18.9 15.6L18.2 15.3C16.4 14.5 15.3 13.5 15.3 11.5C15.3 8.9 17.3 7.3 20.2 7.3C22.7 7.3 24.1 8.5 24.3 10.5H22.1C21.9 9.7 21.2 9.3 20.3 9.3C19.4 9.3 18.8 9.8 18.8 10.6C18.8 11.4 19.4 11.8 20.4 12.2L21.1 12.5C23.1 13.4 24 14.4 24 16.1Z" transform="translate(-4, -1)" fill="#000000" />
      </svg>
    );
  }

  // Java logo SVG
  if (norm === "java") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C10.5 2 9 3 9 4.5C9 6.5 11 7 11 9C11 11 8.5 11.5 8.5 13.5C8.5 15.5 10 16 11 17" stroke="#EA2D3F" strokeWidth="2" strokeLinecap="round" />
        <path d="M14.5 4C13.5 4 12.5 5 12.5 6C12.5 7.5 14 8 14 9.5C14 11 12 11.5 12 13C12 14.5 13 15 14 16" stroke="#0073B7" strokeWidth="2" strokeLinecap="round" />
        <path d="M5 19C5 19 8 17.5 12 17.5C16 17.5 19 19 19 19C19 19 17.5 21 12 21C6.5 21 5 19 5 19Z" fill="#F89820" />
      </svg>
    );
  }

  // C++ logo SVG
  if (norm.includes("c++")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 6.5V17.5L12 22L22 17.5V6.5L12 2Z" fill="#00599C" />
        <path d="M12 4.2L4 7.8V16.2L12 19.8L20 16.2V7.8L12 4.2Z" fill="#004482" />
        <path d="M11.5 8.5H10C8.62 8.5 7.5 9.62 7.5 11V13C7.5 14.38 8.62 15.5 10 15.5H11.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 12H19M17 10V14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // PHP logo SVG
  if (norm === "php") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB4" />
        <path d="M7 15V9.5H8.5C9.33 9.5 10 10.17 10 11C10 11.83 9.33 12.5 8.5 12.5H8M11.5 15V9.5H13C13.83 9.5 14.5 10.17 14.5 11C14.5 11.83 13.83 12.5 13 12.5H12.5M16 15V9.5H17.5C18.33 9.5 19 10.17 19 11C19 11.83 18.33 12.5 17.5 12.5H17" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // React.js logo SVG
  if (norm.includes("react")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="#00D8FF" />
      </svg>
    );
  }

  // Vue.js logo SVG
  if (norm.includes("vue")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18.5L2 4.5H6.5L12 14L17.5 4.5H22L12 18.5Z" fill="#41B883" />
        <path d="M12 13L5 3H8.5L12 9L15.5 3H19L12 13Z" fill="#FFFFFF" opacity="0.9" />
      </svg>
    );
  }

  // Next.js logo SVG
  if (norm.includes("next")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#18181b" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M9 8.5V15.5M15 8.5L9.5 15.5H8.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 8.5V15.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // Tailwind CSS logo SVG
  if (norm.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6C8.7 6 6.5 8 5.4 12C6.5 10.5 8.2 10 10.4 10.5C12.5 11 13.8 12.5 15.3 14C17.3 16 19.5 15.5 21.6 12C20.5 13.5 18.8 14 16.6 13.5C14.5 13 13.2 11.5 11.7 10C9.7 8 7.5 8.5 5.4 12C6.5 10.5 8.2 10 10.4 10.5C13.2 11.1 14.8 12.8 16.6 14.6C18.8 16.8 21 16.2 23 12C21.6 13.8 19.8 14.4 17.6 13.9C15.4 13.4 14.1 11.9 12.6 10.4C10.6 8.4 8.4 8.9 6.4 12.5C7.5 11 9.2 10.5 11.4 11C13.5 11.5 14.8 13 16.3 14.5C18.3 16.5 20.5 16 22.6 12.5C21.5 14 19.8 14.5 17.6 14C15.5 13.5 14.2 12 12.7 10.5C10.7 8.5 8.5 9 6.4 12.6C7.5 11.1 9.2 10.6 11.4 11.1C13.5 11.6 14.8 13.1 16.3 14.6C18.3 16.6 20.5 16.1 22.6 12.6C21.5 14.1 19.8 14.6 17.6 14.1C15.5 13.6 14.2 12.1 12.7 10.6C10.7 8.6 8.5 9.1 6.4 12.7C7.5 11.2 9.2 10.7 11.4 11.2C14.2 11.8 15.8 13.5 17.6 15.3C19.8 17.5 22 16.9 24 12.7C22.6 14.5 20.8 15.1 18.6 14.6C16.4 14.1 15.1 12.6 13.6 11.1C11.6 9.1 9.4 9.6 7.4 13.2" fill="#38BDF8" />
      </svg>
    );
  }

  // Flask logo SVG
  if (norm.includes("flask")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12" />
        <path d="M12 3v5" />
        <path d="M9 8h6" />
        <path d="M10 8V5" />
        <path d="M14 8V5" />
        <path d="M9 12a4 4 0 0 1 6 0" />
        <path d="M18 19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3l3-7h6l3 7z" />
      </svg>
    );
  }

  // MERN Stack / Node JS logo SVG
  if (norm.includes("mern") || norm.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L4 7V17L12 22L20 17V7L12 2V2Z" fill="#339933" />
        <path d="M12 4L5.5 8V16L12 20L18.5 16V8L12 4Z" fill="#215721" />
        <path d="M10.5 8.5V15.5M10.5 12H13.5M13.5 8.5V15.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // MongoDB logo SVG
  if (norm.includes("mongo")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C12 2 8 6 8 11.5C8 16 10 18.5 12 22C14 18.5 16 16 16 11.5C16 6 12 2 12 2Z" fill="#47A248" />
        <path d="M12 2C12 2 12 10 12 22C12.5 22 13 21 13.5 19.5C14.5 16.5 16 14 16 11.5C16 6 12 2 12 2Z" fill="#589636" />
        <path d="M12 2C12 2 12 10 12 22C11.5 22 11 21 10.5 19.5C9.5 16.5 8 14 8 11.5C8 6 12 2 12 2Z" fill="#3F3F3F" />
      </svg>
    );
  }

  // MySQL logo SVG
  if (norm.includes("mysql")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 18H9V14H8V12H9V10C9 8.35 10.35 7 12 7H14V9H12C11.45 9 11 9.45 11 10V12H14V14H11V18Z" fill="#00758F" />
      </svg>
    );
  }

  // SQLite logo SVG
  if (norm.includes("sqlite")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3 6V18L12 22L21 18V6L12 2Z" fill="#0F80CC" />
        <path d="M12 4.5L5.5 7.5V16.5L12 19.5L18.5 16.5V7.5L12 4.5Z" fill="#055A94" />
        <path d="M8 9H16M8 12H16M8 15H12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // Git & GitHub logo SVG
  if (norm.includes("git") || norm.includes("github")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" className="fill-current text-slate-800 dark:text-white" />
      </svg>
    );
  }

  // LinkedIn logo SVG
  if (norm.includes("linkedin")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="#0A66C2" />
      </svg>
    );
  }

  // Android Studio logo SVG
  if (norm.includes("android")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.5 8C16.33 8 17 8.67 17 9.5C17 10.33 16.33 11 15.5 11C14.67 11 14 10.33 14 9.5C14 8.67 14.67 8 15.5 8ZM8.5 8C9.33 8 10 8.67 10 9.5C10 10.33 9.33 11 8.5 11C7.67 11 7 10.33 7 9.5C7 8.67 7.67 8 8.5 8ZM12 17.5C9.5 17.5 7.4 15.4 7.1 13H16.9C16.6 15.4 14.5 17.5 12 17.5Z" fill="#3DDC84" />
      </svg>
    );
  }

  // Figma logo SVG
  if (norm.includes("figma") || norm.includes("powerbi")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2C5.79 2 4 3.79 4 6C4 7.18 4.52 8.24 5.34 9C4.52 9.76 4 10.82 4 12C4 13.18 4.52 14.24 5.34 15C4.52 15.76 4 16.82 4 18C4 20.21 5.79 22 8 22C9.18 22 10.24 21.48 11 20.66C11.76 21.48 12.82 22 14 22C16.21 22 18 20.21 18 18C18 16.82 17.48 15.76 16.66 15C17.48 14.24 18 13.18 18 12C18 10.82 17.48 9.76 16.66 9C17.48 8.24 18 7.18 18 6C18 3.79 16.21 2 14 2C12.82 2 11.76 2.52 11 3.34C10.24 2.52 9.18 2 8 2Z" fill="#F24E1E" />
        <path d="M8 12C8 10.9 8.9 10 10 10C11.1 10 12 10.9 12 12C12 13.1 11.1 14 10 14C8.9 14 8 13.1 8 12Z" fill="#A259FF" />
        <path d="M14 12C14 10.9 14.9 10 16 10C17.1 10 18 10.9 18 12C18 13.1 17.1 14 16 14C14.9 14 14 13.1 14 12Z" fill="#1ABC9C" />
        <path d="M8 6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6C12 7.1 11.1 8 10 8C8.9 8 8 7.1 8 6Z" fill="#FF7262" />
        <path d="M14 6C14 4.9 14.9 4 16 4C17.1 4 18 4.9 18 6C18 7.1 17.1 8 16 8C14.9 8 14 7.1 14 6Z" fill="#F24E1E" />
        <path d="M8 18C8 16.9 8.9 16 10 16C11.1 16 12 16.9 12 18C12 19.1 11.1 20 10 20C8.9 20 8 19.1 8 18Z" fill="#1ABC9C" />
      </svg>
    );
  }

  // Fallback defaults for general categories and other custom topics
  if (norm.includes("learning") || norm.includes("machine")) {
    return <Cpu className={`${className} text-pink-accent`} />;
  }
  if (norm.includes("nlp") || norm.includes("genai") || norm.includes("ai")) {
    return <BrainCircuit className={`${className} text-pink-accent`} />;
  }
  if (norm.includes("data") || norm.includes("anal")) {
    return <TrendingUp className={`${className} text-pink-accent`} />;
  }
  if (norm.includes("solve") || norm.includes("problem")) {
    return <HelpCircle className={`${className} text-pink-accent`} />;
  }
  if (norm.includes("time") || norm.includes("manage")) {
    return <Clock className={`${className} text-pink-accent`} />;
  }
  if (norm.includes("priorit") || norm.includes("task")) {
    return <CheckSquare className={`${className} text-pink-accent`} />;
  }

  // Ultimate fallback
  return <Code className={`${className} text-white/50`} />;
}
