"use client";

import { UserCheck, FileSpreadsheet, Send, Heart, MapPin, Compass } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: UserCheck,
      title: "Profile Review & Screening",
      description:
        "Submit your credentials. Our licensing experts conduct a complete document audit for GCC compliance.",
      bgColor: "bg-[#FFF9E6]",
      iconColor: "text-[#F1A501]",
    },
    {
      icon: FileSpreadsheet,
      title: "Employer Panels & Matches",
      description:
        "We coordinate interviews directly with official company panels and secure authentic salary offers.",
      bgColor: "bg-[#FFECE6]",
      iconColor: "text-[#DF6951]",
    },
    {
      icon: Send,
      title: "Embassy Clearances & Mobilization",
      description:
        "We manage complete embassy stamping, biometric booking, airline ticketing, and pre-flight orientation.",
      bgColor: "bg-[#E6F8FF]",
      iconColor: "text-[#00B1F1]",
    },
  ];

  return (
    <section id="process" className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: 3 Steps Timeline */}
          <div className="lg:col-span-6">
            <span className="text-[13px] md:text-sm uppercase tracking-[0.25em] font-bold text-brand-navy/40 block mb-3">
              Easy & Compliant
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight mb-12">
              Land Your Dream Job in 3 Easy Steps
            </h2>

            {/* List */}
            <div className="flex flex-col gap-8 md:gap-10">
              {steps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.title} className="flex gap-5 md:gap-6 items-start">
                    {/* Icon Column */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-2xl ${step.bgColor} ${step.iconColor} flex items-center justify-center border border-black/5`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {/* Text Column */}
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-brand-navy mb-2">
                        {idx + 1}. {step.title}
                      </h3>
                      <p className="text-[14px] leading-relaxed text-brand-navy/60 max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Clean Jadoo Floating Progress Card */}
          <div className="lg:col-span-6 flex justify-center relative">
            
            {/* Main Visual Card - Flat & Minimal */}
            <div className="relative w-[340px] md:w-[360px] p-6 bg-white rounded-[2rem] shadow-xs border border-gray-200 flex flex-col">
              
              {/* Card Image representation - Clean Light Flat Blue */}
              <div className="relative h-[180px] w-full bg-slate-50 rounded-2xl overflow-hidden mb-6 border border-gray-100">
                <div className="absolute inset-0 bg-dot-pattern opacity-30" />
                
                {/* Large center graphic */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-brand-navy">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center border shadow-3xs">
                    <Compass className="w-6 h-6 text-sky-700" />
                  </div>
                  <span className="mt-3 block text-xs font-bold tracking-widest uppercase text-brand-navy/60">
                    Riyadh Pathway
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="px-1">
                <h4 className="text-lg font-extrabold text-brand-navy mb-1.5">
                  Cohort Placement to Riyadh
                </h4>
                
                <span className="text-[13px] font-semibold text-brand-navy/40 block mb-4">
                  Departure Date: June 15 | by Albrooj Agency
                </span>

                {/* Sub-Badges row */}
                <div className="flex gap-4 items-center mb-6">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-slate text-brand-navy border border-gray-150">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-slate text-brand-navy border border-gray-150">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-slate text-brand-navy border border-gray-150">
                    <Send className="w-4 h-4" />
                  </div>
                </div>

                {/* Card footer metrics */}
                <div className="flex items-center justify-between text-[13px] font-bold text-brand-navy/40">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-[#DF6951] fill-[#DF6951]" />
                    <span>24 Candidates Placed</span>
                  </div>
                </div>
              </div>

              {/* signature floating ongoing mini-card (overlapping on absolute position) - Clean flat border */}
              <div className="absolute bottom-[10%] right-[-30px] md:right-[-40px] bg-white px-5 py-4 rounded-2xl shadow-sm flex gap-3 border border-gray-200 w-[230px]">
                <div className="w-10 h-10 rounded-full bg-brand-peach flex items-center justify-center text-brand-gold flex-shrink-0 border">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center text-[10px] font-bold text-brand-navy/40 uppercase tracking-widest mb-1">
                    <span>Clearance Status</span>
                    <span className="text-brand-teal">85% Done</span>
                  </div>
                  <span className="block text-[13px] font-bold text-brand-navy mb-2">
                    Medical & Stamping
                  </span>
                  
                  {/* Linear progress bar */}
                  <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden border">
                    <div
                      className="bg-brand-teal h-full rounded-full"
                      style={{ width: "85%" }}
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
