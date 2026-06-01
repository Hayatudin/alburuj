"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown, Quote, Star } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const feedback = [
    {
      quote:
        "Albrooj changed my career trajectory. From document evaluation to my final boarding pass, their team managed everything with ultimate transparency and speed. I am now overseeing prime infrastructure in Riyadh!",
      name: "Ramil Hameed",
      role: "Senior Civil Engineer",
      location: "Riyadh, Saudi Arabia 🇸🇦",
      initials: "RH",
    },
    {
      quote:
        "The pre-departure vocational training and language classes they provided gave me the exact confidence I needed. Their host country representatives even welcomed me at Doha airport. Outstanding agency welfare support!",
      name: "Fatima Az-Zahra",
      role: "Specialized Pediatric Nurse",
      location: "Doha, Qatar 🇶🇦",
      initials: "FZ",
    },
    {
      quote:
        "Most agencies make false promises regarding salaries. Albrooj matched me with a tier-1 logistics conglomerate in Kuwait with the exact contract terms we signed. Extremely professional and fully licensed.",
      name: "Mustafa Naim",
      role: "Logistics Operations Lead",
      location: "Kuwait City, Kuwait 🇰🇼",
      initials: "MN",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % feedback.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + feedback.length) % feedback.length);
  };

  return (
    <section id="testimonials" className="relative py-24 bg-transparent border-t border-slate-200/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[13px] md:text-sm uppercase tracking-[0.25em] font-bold text-brand-navy/40 block mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight mb-8">
              What People Say About Us.
            </h2>
            
            {/* Slider Dots */}
            <div className="flex gap-3 mb-8">
              {feedback.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "bg-brand-navy scale-110" : "bg-gray-200"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Trust Badge - Clean */}
            <div className="p-4 rounded-2xl bg-white border border-gray-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-peach flex items-center justify-center text-brand-gold text-sm font-black border">
                ★
              </div>
              <div>
                <span className="block text-xs font-bold text-brand-navy uppercase tracking-wider">Licensed Agency</span>
                <span className="block text-[12px] font-semibold text-brand-navy/40">Ministry Approval: AL-2026-GCC</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Testimonial Cards */}
          <div className="lg:col-span-7 flex items-center justify-center lg:justify-end gap-6 relative min-h-[340px] w-full">
            
            <div className="relative w-full max-w-[500px]">
              
              {/* Back Card (Stacked Offset) */}
              {feedback.map((item, idx) => {
                const isNext = (activeIndex + 1) % feedback.length === idx;
                if (!isNext) return null;
                return (
                  <div
                    key={`back-${item.name}`}
                    className="absolute inset-0 translate-x-[16px] translate-y-[16px] p-6 bg-gray-50 border border-gray-200 rounded-3xl -z-10 opacity-50 scale-[0.97] pointer-events-none select-none transition-all duration-500"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                    <div className="h-4 bg-gray-200 rounded w-full mt-6" />
                    <div className="h-4 bg-gray-200 rounded w-5/6 mt-2" />
                    <div className="h-4 bg-gray-200 rounded w-2/3 mt-2" />
                  </div>
                );
              })}

              {/* Active Front Card */}
              {feedback.map((item, idx) => {
                const isActive = activeIndex === idx;
                if (!isActive) return null;
                return (
                  <div
                    key={`front-${item.name}`}
                    className="w-full p-6 md:p-8 bg-white rounded-3xl shadow-xs border border-gray-200 transition-all duration-500 relative"
                  >
                    {/* User profile bubble */}
                    <div className="absolute top-[-22px] left-8 w-11 h-11 rounded-full bg-[#0079FE] text-white font-extrabold text-sm flex items-center justify-center border-4 border-white shadow-sm">
                      {item.initials}
                    </div>

                    {/* Quote mark */}
                    <div className="absolute right-6 top-6 text-gray-100">
                      <Quote className="w-14 h-14 fill-current" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-5 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-[14px] md:text-[15px] font-medium leading-relaxed text-brand-navy/65 mb-6 italic relative z-10">
                      &ldquo;{item.quote}&rdquo;
                    </p>

                    {/* User credentials */}
                    <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                      <div>
                        <h4 className="text-base font-bold text-brand-navy">
                          {item.name}
                        </h4>
                        <span className="text-[12px] font-semibold text-brand-navy/40 uppercase tracking-wider block mt-0.5">
                          {item.role}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-brand-teal px-3 py-1 rounded-full bg-teal-50 border border-teal-100">
                        {item.location}
                      </span>
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Slider arrows */}
            <div className="flex flex-col gap-3 ml-4 relative z-10">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-[#0079FE] hover:text-white hover:border-[#0079FE] flex items-center justify-center text-brand-navy transition-colors active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronUp className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-[#0079FE] hover:text-white hover:border-[#0079FE] flex items-center justify-center text-brand-navy transition-colors active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
