"use client";

import { Briefcase, Landmark, ShieldCheck, HeartHandshake } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Briefcase,
      title: "Smart Placement",
      description:
        "Direct connection to top employers in health, tech, engineering, and logistics across GCC nations.",
      color: "text-brand-gold",
      bgColor: "bg-brand-peach",
    },
    {
      icon: Landmark,
      title: "Embassy & Visa Handling",
      description:
        "Complete management of biometrics, medical tests, document attestations, and rapid visa stamping.",
      color: "text-brand-teal",
      bgColor: "bg-teal-50",
    },
    {
      icon: ShieldCheck,
      title: "Vocational Testing",
      description:
        "Comprehensive pre-departure training, skill diagnostics, and cultural adaptation certifications.",
      color: "text-rose-500",
      bgColor: "bg-rose-50",
    },
    {
      icon: HeartHandshake,
      title: "Continuous Welfare",
      description:
        "Guaranteed airport pickup, housing coordination, and 24/7 dedicated legal hotline support in host countries.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <section id="services" className="relative py-20 bg-white overflow-hidden">
      {/* Minimal Grid Background element */}
      <div className="absolute top-[10%] right-[5%] w-[120px] h-[100px] bg-dot-pattern opacity-40 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-[13px] md:text-sm uppercase tracking-[0.25em] font-bold text-brand-navy/40 block mb-3">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight">
            We Offer Best-in-Class Services
          </h2>
        </div>

        {/* 4-Column Service Grid - Simplified flat design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group relative flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-150 transition-all shadow-xs"
              >
                {/* Styled Icon Wrapper - Clean and Flat */}
                <div className={`relative flex items-center justify-center w-16 h-16 rounded-2xl ${service.bgColor} ${service.color} mb-6`}>
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Service Details */}
                <h3 className="text-lg font-bold text-brand-navy mb-3">
                  {service.title}
                </h3>
                
                <p className="text-[14px] leading-relaxed text-brand-navy/60 font-medium">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
