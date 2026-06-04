"use client";

import React, { useState } from "react";
import { MapPin, Mail, Phone, ArrowUpRight, MessageSquare, X } from "lucide-react";

export default function ContactMap() {
  // WhatsApp Floating Widget State
  const [showWaWidget, setShowWaWidget] = useState(false);

  // Pre-filled WhatsApp message URL helper
  const getWhatsAppLink = (customText?: string) => {
    const defaultText = customText || "Hello Alburuj, I am looking to apply for job opportunities in the Arab Gulf. Please guide me.";
    return `https://wa.me/966500000000?text=${encodeURIComponent(defaultText)}`;
  };

  return (
    <section id="contact" className="relative py-24 bg-transparent overflow-visible">
      {/* Clean Dot Grid Accent */}
      <div className="absolute bottom-[5%] left-[3%] w-[100px] h-[100px] bg-dot-pattern opacity-40 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left Column: Agency Info & WhatsApp Integration (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div>
              <span className="text-[13px] md:text-sm uppercase tracking-[0.25em] font-extrabold text-[#0079FE] block mb-3">
                Get In Touch
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy leading-tight mb-4">
                Begin your career journey today
              </h2>

              <p className="text-brand-navy/60 font-semibold text-[15px] leading-relaxed mb-8">
                Connect directly with our headquarters in Riyadh. Speak to a licensing advisor on WhatsApp for rapid, pre-departure support.
              </p>

              {/* Action Quick Contact */}
              <div className="flex flex-col gap-5 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-slate text-brand-teal flex items-center justify-center border border-slate-100 shadow-xs flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-brand-navy/40 uppercase">Agency Headquarters</span>
                    <span className="block text-[14px] font-bold text-brand-navy">Alburuj Tower, Level 4, Riyadh, Saudi Arabia</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-slate text-brand-gold flex items-center justify-center border border-slate-100 shadow-xs flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-brand-navy/40 uppercase">Direct Call Back</span>
                    <a href="tel:+966500000000" className="block text-[14px] font-bold text-brand-navy hover:text-[#0079FE] transition-colors">+966 50 000 0000</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-slate text-indigo-500 flex items-center justify-center border border-slate-100 shadow-xs flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-brand-navy/40 uppercase">E-Mail Address</span>
                    <a href="mailto:apply@Alburuj.com" className="block text-[14px] font-bold text-brand-navy hover:text-[#0079FE] transition-colors">apply@Alburuj.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Banner Card */}
            <div className="p-6 rounded-3xl bg-emerald-50/50 border border-emerald-100 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-xs">
              <div className="w-11 h-11 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-sm flex-shrink-0">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-extrabold text-brand-navy">Immediate Gulf Response</h4>
                <p className="text-[12px] font-semibold text-brand-navy/60 mt-0.5 leading-relaxed">
                  Chat on WhatsApp now to check currently open roles in Kuwait, Qatar, and Saudi Arabia.
                </p>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-colors"
                >
                  <span>Launch WhatsApp Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Expanded Full-Height Map Panel (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-stretch">
            <div className="h-full min-h-[400px] w-full rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 relative group flex flex-col">
              <iframe
                title="Alburuj Riyadh Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.7891238491873!2d46.6712349123456!3d24.7135891234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d11b235%3A0x6c6e6df6f6df6df6!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="flex-grow grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />

              {/* Map floating indicator */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 border border-slate-100 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-[11px] font-extrabold text-brand-navy uppercase tracking-wider">
                  Alburuj Riyadh HQ
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* FLOATING WHATSAPP RECRUITMENT BADGE WIDGET                                */}
      {/* ========================================================================= */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Animated Pop-Up Helper Chatbox */}
        {showWaWidget && (
          <div className="mb-4 w-[280px] md:w-[320px] bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-300">
            {/* Header */}
            <div className="p-4 bg-emerald-500 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                    AB
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-emerald-500" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold">Alburuj Advisor</h4>
                  <span className="text-[11px] opacity-85 block">Active Recruitment Portal</span>
                </div>
              </div>
              <button
                onClick={() => setShowWaWidget(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white/90"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-brand-slate flex flex-col gap-3.5">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-100 text-[13px] font-medium leading-relaxed text-brand-navy/70">
                Hi there! 👋 Seeking a rewarding career path in Saudi Arabia, Kuwait, or Qatar? Speak directly with our placement advisor!
              </div>

              {/* Quick Tags */}
              <div className="flex flex-col gap-2">
                <a
                  href={getWhatsAppLink("Hello, I would like to check current openings for Nurses / Healthcare in Saudi Arabia.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-white hover:bg-emerald-50 text-[12px] font-bold text-brand-navy hover:text-emerald-700 border border-slate-100 hover:border-emerald-100 transition-colors flex items-center justify-between"
                >
                  <span>Apply: Healthcare Roles 🏥</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={getWhatsAppLink("Hello, I am interested in Engineering and Infrastructure positions in Kuwait / Qatar.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-white hover:bg-emerald-50 text-[12px] font-bold text-brand-navy hover:text-emerald-700 border border-slate-100 hover:border-emerald-100 transition-colors flex items-center justify-between"
                >
                  <span>Apply: Engineering Roles 🏗️</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={getWhatsAppLink("Hello, I want to track my active visa stamping process with Alburuj.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-white hover:bg-emerald-50 text-[12px] font-bold text-brand-navy hover:text-emerald-700 border border-slate-100 hover:border-emerald-100 transition-colors flex items-center justify-between"
                >
                  <span>Track Stamping Process 📝</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 bg-white border-t border-slate-100 text-center">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Open Custom Chat</span>
              </a>
            </div>
          </div>
        )}

        {/* WhatsApp Icon Button Trigger */}
        <button
          onClick={() => setShowWaWidget(!showWaWidget)}
          className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-[0.95] transition-all relative group cursor-pointer"
          aria-label="Contact Alburuj Recruitment on WhatsApp"
        >
          {/* Notification Dot */}
          {!showWaWidget && (
            <span className="absolute top-0 right-0 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-gold text-[8px] text-brand-navy font-black items-center justify-center">1</span>
            </span>
          )}

          {showWaWidget ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 fill-current" />}

          {/* Tooltip */}
          <span className="absolute right-16 scale-0 group-hover:scale-100 bg-brand-navy text-white text-xs font-bold px-3 py-1.5 rounded-xl transition-all shadow-md duration-200 pointer-events-none select-none whitespace-nowrap">
            WhatsApp Careers Help
          </span>
        </button>
      </div>

    </section>
  );
}
