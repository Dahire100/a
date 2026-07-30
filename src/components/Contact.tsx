/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MapPin, Linkedin, Github, Send, Terminal, Phone, Copy, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("khandbahalepratiksha2727@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-start text-left mb-16"
      >
        <span className="text-xs font-mono tracking-[0.3em] text-purple-accent uppercase mb-2">
          07 / CONTACT
        </span>
        <h2 className="text-4xl md:text-6xl text-white font-medium flex items-center gap-3">
          <span className="text-3xl md:text-5xl animate-pulse">🌸</span>
          Get In{" "}
          <span className="font-display font-display-serif italic text-gradient">
            Touch
          </span>
          <span className="text-3xl md:text-5xl animate-pulse">🌸</span>
        </h2>
        <div className="w-16 h-[2px] bg-gradient-accent mt-4" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* LEFT: Glass Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 rounded-[32px] glass-panel p-8 md:p-10 flex flex-col justify-between relative overflow-hidden text-left"
        >
          {/* Subtle watermark background */}
          <div className="absolute right-[-20px] bottom-[-20px] text-white/5 font-mono text-9xl font-bold select-none pointer-events-none">
            @
          </div>

          <div>
            <span className="text-xs font-mono text-purple-accent tracking-widest uppercase block mb-1">
              DIRECT CHANNELS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-6">
              Contact Information
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">
              Whether you want to discuss an intelligent full-stack system, inquire about my studies in AI and Data Science, or simply say hello — feel free to drop a message. I'm always open to collaborative opportunities.
            </p>

            {/* Info Items Rows */}
            <div className="space-y-6">
              {/* Mail */}
              <div className="flex items-center gap-4 group/item">
                <motion.button
                  whileHover={{ y: -6, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                  onClick={handleCopyEmail}
                  className="w-11 h-11 rounded-xl bg-purple-accent/10 border border-purple-accent/20 flex items-center justify-center hover:border-purple-accent/50 hover:bg-purple-accent/20 transition-colors cursor-pointer"
                  title="Click to copy email"
                >
                  <Mail className="w-5 h-5 text-purple-accent" />
                </motion.button>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono text-white/40 block uppercase">EMAIL</span>
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href="mailto:khandbahalepratiksha2727@gmail.com"
                      className="text-sm font-semibold text-white/90 group-hover/item:text-purple-accent transition-colors truncate"
                    >
                      khandbahalepratiksha2727@gmail.com
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 text-white/40 hover:text-purple-accent transition-colors rounded-lg hover:bg-white/5 cursor-pointer flex items-center justify-center"
                      title="Copy email address"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <AnimatePresence>
                      {copied && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded"
                        >
                          Copied!
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group/item">
                <motion.div
                  whileHover={{ y: -6, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                  className="w-11 h-11 rounded-xl bg-purple-accent/10 border border-purple-accent/20 flex items-center justify-center group-hover/item:border-purple-accent/40 transition-colors"
                >
                  <Phone className="w-5 h-5 text-purple-accent" />
                </motion.div>
                <div>
                  <span className="text-[10px] font-mono text-white/40 block uppercase">PHONE</span>
                  <a
                    href="tel:+919970123811"
                    className="text-sm font-semibold text-white/90 group-hover/item:text-purple-accent transition-colors"
                  >
                    +91 9970123811
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group/item">
                <motion.div
                  whileHover={{ y: -6, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                  className="w-11 h-11 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center group-hover/item:border-pink-accent/40 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-pink-accent" />
                </motion.div>
                <div>
                  <span className="text-[10px] font-mono text-white/40 block uppercase">LOCATION</span>
                  <span className="text-sm font-semibold text-white/90">
                    Nashik, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social icons row */}
          <div className="mt-12 pt-8 border-t border-white/5">
            <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase block mb-3">
              CONNECT WITH ME
            </span>
            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ y: -6, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                href="https://www.linkedin.com/in/pratiksha-khandbahale-005b39256/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-purple-accent/40 shadow-md group/social"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover/social:rotate-12 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ y: -6, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                href="https://github.com/pratikshaa27"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-pink-accent/40 shadow-md group/social"
                aria-label="Connect on GitHub"
              >
                <Github className="w-5 h-5 group-hover/social:-rotate-12 transition-transform" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: High-End Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 rounded-[32px] glass-panel p-8 md:p-10 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 w-[150px] h-[150px] bg-gradient-to-bl from-purple-500/5 to-transparent blur-2xl pointer-events-none" />

          {/* Form Header HUD */}
          <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-8 text-left">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-purple-accent" />
              <span className="text-[11px] font-mono text-white/50 uppercase tracking-widest">
                SEND A MESSAGE
              </span>
            </div>
            <span className="text-[10px] font-mono text-pink-accent font-bold bg-pink-500/10 px-2 py-0.5 rounded border border-pink-500/15">
              ACTIVE
            </span>
          </div>

          {/* Contact Form Element */}
          <form
            action="https://formsubmit.co/khandbahalepratiksha2727@gmail.com"
            method="POST"
            className="space-y-6 flex-1 flex flex-col justify-between text-left"
          >
            {/* FormSubmit Configuration Fields */}
            <input type="hidden" name="_subject" value="New Portfolio Message!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="space-y-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="form-name" className="text-xs font-mono text-white/60 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  id="form-name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 focus:border-purple-accent/50 rounded-2xl px-5 py-4 text-sm font-medium text-white placeholder-white/25 outline-none transition-all focus:bg-white/10"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="form-email" className="text-xs font-mono text-white/60 uppercase tracking-wider">
                  Your Return Email
                </label>
                <input
                  type="email"
                  id="form-email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 focus:border-purple-accent/50 rounded-2xl px-5 py-4 text-sm font-medium text-white placeholder-white/25 outline-none transition-all focus:bg-white/10"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="form-message" className="text-xs font-mono text-white/60 uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  required
                  rows={4}
                  className="w-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 focus:border-purple-accent/50 rounded-2xl px-5 py-4 text-sm font-medium text-white placeholder-white/25 outline-none transition-all resize-none focus:bg-white/10"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 mt-auto">
              <button
                type="submit"
                className="w-full relative py-4 px-8 rounded-full overflow-hidden text-sm font-bold tracking-wider text-white bg-slate-900 border border-white/10 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer"
              >
                {/* Gradient animation background */}
                <div className="absolute inset-0 bg-gradient-accent opacity-80 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE</span>
                </div>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
