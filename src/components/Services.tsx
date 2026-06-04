import React from "react";
import { ShieldCheck, CheckCircle, Award, Star, ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Heading */}
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0079FE] bg-brand-50 border border-brand-100 px-3.5 py-1.5 rounded-full">
            Our Core Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight font-sans">
            We Offer Best-in-Class Services
          </h2>
          <p className="text-navy-500 max-w-xl text-sm sm:text-base leading-relaxed">
            Connecting talented professionals with government-certified legal employment pathways in premier GCC nations.
          </p>
        </div>

        {/* Services Cards Grid in Thrive Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Card 1: Thrive Dark Capsule Tags Card (span-4) */}
          <div className="lg:col-span-4 bg-navy-950 rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[380px] shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0079FE]/10 rounded-full blur-2xl"></div>

            <div className="flex flex-col gap-4 text-left">
              <h3 className="text-xl font-extrabold text-navy-950 tracking-tight leading-snug">
                Alburuj works for various industries. <br />
                <span className="text-[#B6D9FF]">Apply today!</span>
              </h3>
              <p className="text-xs text-navy-400 leading-normal max-w-xs">
                We supply government-vetted candidates across diverse sectors, coordinating complete embassy approvals.
              </p>
            </div>

            {/* Organic Capsule/Bubble Tags Layout */}
            <div className="flex flex-wrap gap-2.5 mt-8 z-10 text-left">
              <span className="px-3 py-1.5 rounded-full text-[10.5px] font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Healthcare</span>
              <span className="px-3 py-1.5 rounded-full text-[10.5px] font-bold bg-rose-500/10 text-rose-300 border border-rose-500/20">Skilled Trades</span>
              <span className="px-3 py-1.5 rounded-full text-[10.5px] font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20">Domestic Care</span>
            </div>
          </div>

          {/* Card 2: Thrive Avatar Social Proof Card (span-4) */}
          <div className="lg:col-span-4 bg-white rounded-[2.5rem] p-8 border border-slate-100 flex flex-col justify-between min-h-[380px] shadow-sm text-left">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-[#0079FE] flex items-center justify-center mb-1">
                <Award className="w-5.5 h-5.5 text-[#0079FE]" />
              </div>
              <h3 className="text-xl font-extrabold text-navy-950 tracking-tight leading-snug">
                Building strong relationship between candidates & employers
              </h3>
              <p className="text-xs text-navy-500 leading-relaxed">
                Direct connections to top international groups ensuring ethical recruitment and fair salaries.
              </p>
            </div>

            {/* Overlapping candidate avatars */}
            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-center">
                <div className="flex -space-x-3.5 overflow-hidden">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-4 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="Placed candidate"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-4 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                    alt="Placed candidate"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-4 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                    alt="Placed candidate"
                  />
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-brand-50 ring-4 ring-white text-[11px] font-extrabold text-[#0079FE]">
                    +5k
                  </div>
                </div>
              </div>
              <span className="text-[11px] text-navy-400 font-extrabold tracking-wider uppercase">
                (5,000+ Placed candidates worldwide)
              </span>
            </div>
          </div>

          {/* Card 3: Thrive Statistics & Ratings Card (span-4) */}
          <div className="lg:col-span-4 bg-[#bae0fd]/20 rounded-[2.5rem] p-8 border border-[#bae0fd]/30 flex flex-col justify-between min-h-[380px] shadow-sm text-left">
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-teal/10 text-accent-teal flex items-center justify-center mb-1">
                <ShieldCheck className="w-5.5 h-5.5" />
              </div>
              <h3 className="text-xl font-extrabold text-navy-950 tracking-tight leading-snug">
                Highly-rated by candidates and industry experts
              </h3>
              <p className="text-xs text-navy-500 leading-relaxed">
                Known for speedy processing, absolute integrity, and full transparency.
              </p>
            </div>

            {/* Statistics rating block */}
            <div className="mt-8 flex flex-col gap-1.5">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-navy-950 tracking-tight">4.9</span>
                <div className="flex text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
              </div>
              <p className="text-[11px] text-navy-400 font-extrabold tracking-wider uppercase flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-accent-teal" />
                <span>Verified Recruitment License</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
