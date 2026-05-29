"use client";

import Link from "next/link";
import { MessageCircle, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-150 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Branding & Intro */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-9 h-9 rounded-xl bg-[#A294F9] flex items-center justify-center text-white font-extrabold text-lg">
                A
              </div>
              <span className="font-serif text-2xl font-extrabold text-brand-navy tracking-wide">
                Albrooj<span className="text-[#A294F9]">.</span>
              </span>
            </Link>
            <p className="text-[14px] font-medium leading-relaxed text-brand-navy/60 max-w-sm mb-6">
              Albrooj is a premier, fully licensed foreign employment agency. We specialize in fast-track, secure, and prestigious career placements in Saudi Arabia, Qatar, Kuwait, UAE, Oman, and Jordan.
            </p>
            <span className="text-[11px] font-bold text-brand-navy/40 uppercase tracking-widest block">
              License No: AL-2026-GCC
            </span>
          </div>

          {/* Column 2: Company */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-base font-extrabold text-brand-navy mb-5 uppercase tracking-wider text-[13px]">
              Company
            </h4>
            <ul className="flex flex-col gap-3.5 text-[14px] font-medium text-brand-navy/70">
              <li>
                <a href="#services" className="hover:text-[#A294F9] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#A294F9] transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#A294F9] transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#A294F9] transition-colors">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-base font-extrabold text-brand-navy mb-5 uppercase tracking-wider text-[13px]">
              Resources
            </h4>
            <ul className="flex flex-col gap-3.5 text-[14px] font-medium text-brand-navy/70">
              <li>
                <a href="#contact" className="hover:text-[#A294F9] transition-colors">
                  Consultation
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#A294F9] transition-colors">
                  Current Vacancies
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#A294F9] transition-colors">
                  Visa Checklist
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#A294F9] transition-colors">
                  Biometrics Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Policy */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-base font-extrabold text-brand-navy mb-5 uppercase tracking-wider text-[13px]">
              Regulatory
            </h4>
            <ul className="flex flex-col gap-3.5 text-[14px] font-medium text-brand-navy/70">
              <li>
                <a href="#" className="hover:text-[#A294F9] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#A294F9] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#A294F9] transition-colors">
                  Ministry Compliance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#A294F9] transition-colors">
                  Gulf Labor Laws
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Social Connections */}
          <div className="lg:col-span-2 flex flex-col items-start lg:items-end">
            <h4 className="text-base font-extrabold text-brand-navy mb-5 uppercase tracking-wider text-[13px] lg:text-right w-full">
              Social Links
            </h4>
            
            {/* Social Icons Stack */}
            <div className="flex gap-4 mb-6">
              {/* LinkedIn Custom SVG */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-slate border border-gray-200 hover:border-[#A294F9] text-brand-navy hover:text-[#A294F9] flex items-center justify-center shadow-2xs transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Facebook Custom SVG */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-slate border border-gray-200 hover:border-[#A294F9] text-brand-navy hover:text-[#A294F9] flex items-center justify-center shadow-2xs transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>

              {/* WhatsApp Custom SVG */}
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-slate border border-gray-200 hover:border-emerald-500 text-brand-navy hover:text-emerald-500 flex items-center justify-center shadow-2xs transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>

            {/* Language indicator short badge */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-slate border border-gray-200 text-xs font-bold text-brand-navy">
              <Globe className="w-3.5 h-3.5 text-[#A294F9]" />
              <span>Available in Arabic & English</span>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-150 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[13px] font-semibold text-brand-navy/50 text-center md:text-left">
            © {currentYear} Albrooj Employment Agency. All rights reserved. Registered licensed partner of GCC Employer Councils.
          </span>
          <div className="flex gap-6 text-[13px] font-bold text-brand-navy/40">
            <a href="#" className="hover:text-brand-navy transition-colors">Security</a>
            <a href="#" className="hover:text-brand-navy transition-colors">Site Map</a>
            <a href="#" className="hover:text-brand-navy transition-colors">Licensure Audit</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
