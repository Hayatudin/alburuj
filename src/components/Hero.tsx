"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-transparent pt-40 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Subtle background blobs */}
      <div className="absolute top-24 -left-20 w-80 h-80 rounded-full bg-[#0079FE]/5 blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-[#0079FE]/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Clean Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start relative z-10 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#0079FE]/10 border border-[#0079FE]/20 text-[#0079FE] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-2xs">
              <span>Government Certified Placement Agency</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-[54px] font-black text-slate-900 leading-[1.08] tracking-tight mb-6 max-w-xl font-sans">
              A new way to work <br className="hidden sm:inline" />
              & get premium <span className="text-[#0079FE]">careers</span>
            </h1>
            
            {/* Subtext */}
            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-lg mb-8">
              Alburuj is here for you with verified job placements and compliant visa services from skilled advisors and top employers all around the Arab world.
            </p>
            
            {/* Capsule Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-16 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto text-center bg-[#0079FE] hover:bg-[#0263e2] text-white px-8 py-4 rounded-full font-bold shadow-md shadow-brand-500/10 hover:shadow-lg hover:shadow-brand-500/25 active:scale-95 transition-all duration-300 text-[14px]"
              >
                Join the Agency
              </a>
              
              <a
                href="#services"
                className="w-full sm:w-auto text-center bg-white border border-slate-200 text-slate-800 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 hover:border-slate-350 active:scale-95 transition-all duration-300 text-[14px]"
              >
                Learn more
              </a>
            </div>
            
            {/* Clean Stats */}
            <div className="flex items-center gap-10 border-t border-slate-200/60 pt-8 w-full max-w-md">
              <div>
                <span className="block text-3xl font-extrabold text-slate-900">15.2K</span>
                <span className="text-[13px] font-semibold text-slate-500 mt-1 block">Active candidates</span>
              </div>
              <div className="h-10 w-[1px] bg-slate-200" />
              <div>
                <span className="block text-3xl font-extrabold text-slate-900">4.5K</span>
                <span className="text-[13px] font-semibold text-slate-500 mt-1 block">Employers</span>
              </div>
              <div className="h-10 w-[1px] bg-slate-200" />
              <div className="flex items-center gap-3">
                {/* Custom Overlapping Rings Graphic from the attached design */}
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#0079FE]/20 flex items-center justify-center" />
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-teal-500/20 flex items-center justify-center" />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-extrabold text-slate-900">98%</span>
                  <span className="text-[11px] font-bold text-slate-500 block">Visa Success</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Staggered Asymmetrical Layout */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative select-none">
            {/* Visual Grid Envelope (size matches collage elements: 480px width, 440px height) */}
            <div className="relative w-[480px] h-[440px] hidden sm:block">
              
              {/* 1. Top Left Portrait Card (Saudi) */}
              <div className="absolute top-0 left-0 w-[210px] h-[260px] rounded-[2.5rem] overflow-hidden bg-[#E3F2FD] border border-slate-100 shadow-sm">
                <Image
                  src="/saudi.jpg"
                  alt="Saudi Careers"
                  fill
                  className="object-cover"
                  sizes="210px"
                  priority
                />
              </div>

              {/* 2. Top Right Portrait Card (Kuwait - offset lower) */}
              <div className="absolute top-[35px] left-[230px] w-[210px] h-[260px] rounded-[2.5rem] overflow-hidden bg-[#F3E5F5] border border-slate-100 shadow-sm">
                <Image
                  src="/kuwait.png"
                  alt="Kuwait Careers"
                  fill
                  className="object-cover"
                  sizes="210px"
                  priority
                />
              </div>

              {/* 3. Bottom Left Landscape Card (UAE) */}
              <div className="absolute top-[280px] left-0 w-[210px] h-[150px] rounded-[2.5rem] overflow-hidden bg-[#E8F5E9] border border-slate-100 shadow-sm">
                <Image
                  src="/uae.png"
                  alt="UAE Careers"
                  fill
                  className="object-cover"
                  sizes="210px"
                  priority
                />
              </div>

              {/* ========================================== */}
              {/* DECORATIVE ELEMENTS FROM ATTACHED DESIGN   */}
              {/* ========================================== */}
              
              {/* Round Arrow Badge */}
              <div className="absolute top-[-10px] left-[195px] w-14 h-14 bg-[#B3E5FC] rounded-full flex items-center justify-center text-sky-800 shadow-sm border-4 border-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 7L7 17M7 17H14M7 17V10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Oval Rings Badge */}
              <div className="absolute top-[255px] left-[180px] w-28 h-12 bg-[#E1BEE7] rounded-full flex items-center justify-center gap-1.5 shadow-sm border-4 border-white">
                <div className="w-5 h-5 rounded-full border border-purple-700 bg-white/20" />
                <div className="w-5 h-5 rounded-full border border-purple-700 bg-white/20 -ml-2" />
                <div className="w-5 h-5 rounded-full border border-purple-700 bg-white/20 -ml-2" />
              </div>

              {/* Decorative Stars */}
              <div className="absolute top-[175px] left-[190px] text-[#A5D6A7]">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
                </svg>
              </div>
              <div className="absolute top-[345px] left-[380px] text-[#A5D6A7]">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
                </svg>
              </div>

              {/* Small scatter circles */}
              <div className="absolute top-[35px] left-[420px] w-3 h-3 rounded-full bg-[#E1BEE7]" />
              <div className="absolute top-[395px] left-[345px] w-4.5 h-4.5 rounded-full bg-[#B3E5FC]" />
            </div>

            {/* Mobile Fallback */}
            <div className="sm:hidden grid grid-cols-3 gap-3 w-full">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-sky-50 border shadow-xs">
                <Image src="/saudi.jpg" alt="Saudi" fill className="object-cover" sizes="100px" />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-purple-50 border shadow-xs">
                <Image src="/kuwait.png" alt="Kuwait" fill className="object-cover" sizes="100px" />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-emerald-50 border shadow-xs">
                <Image src="/uae.png" alt="UAE" fill className="object-cover" sizes="100px" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
