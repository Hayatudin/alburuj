"use client";

import { Calendar, DollarSign, ArrowUpRight } from "lucide-react";

export default function Destinations() {
  const primaryDestinations = [
    {
      country: "Saudi Arabia",
      city: "Riyadh & Jeddah",
      flag: "🇸🇦",
      salary: "$1,800 - $7,500",
      duration: "25-30 Days Visa",
      hotSectors: ["Healthcare", "Engineering", "IT Services", "Construction"],
      imageGrad: "bg-gradient-to-br from-emerald-50 to-slate-50",
      textColor: "text-emerald-700",
      borderColor: "border-emerald-100",
    },
    {
      country: "Qatar",
      city: "Doha",
      flag: "🇶🇦",
      salary: "$2,000 - $8,000",
      duration: "20-25 Days Visa",
      hotSectors: ["Hospitality", "Aviation", "Media & Events", "Energy"],
      imageGrad: "bg-gradient-to-br from-rose-50 to-slate-50",
      textColor: "text-rose-700",
      borderColor: "border-rose-100",
    },
    {
      country: "Kuwait",
      city: "Kuwait City",
      flag: "🇰🇼",
      salary: "$2,200 - $9,000",
      duration: "30-35 Days Visa",
      hotSectors: ["Petrochemicals", "Nursing", "Logistics", "Telecomm"],
      imageGrad: "bg-gradient-to-br from-blue-50 to-slate-50",
      textColor: "text-blue-700",
      borderColor: "border-blue-100",
    },
  ];

  const secondaryDestinations = [
    { name: "Oman 🇴🇲", demand: "High Demand", fields: "Nursing, Petroleum, Education" },
    { name: "United Arab Emirates 🇦🇪", demand: "Premium Jobs", fields: "Finance, Tech, Aviation" },
    { name: "Jordan & Lebanon 🇯🇴 🇱🇧", demand: "Bilingual Placements", fields: "Management, Hospitality" },
  ];

  return (
    <section id="destinations" className="relative py-20 bg-brand-slate overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-[13px] md:text-sm uppercase tracking-[0.25em] font-bold text-brand-navy/40 block mb-3">
            Global Connections
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight">
            Top Job Destinations
          </h2>
        </div>

        {/* 3-Card Destination Layout - Clean & Flat */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {primaryDestinations.map((dest) => (
            <div
              key={dest.country}
              className="bg-white rounded-3xl overflow-hidden shadow-xs border border-gray-200 flex flex-col transition-all"
            >
              {/* Graphic/Illustrative Top Container */}
              <div className={`relative h-[180px] w-full ${dest.imageGrad} flex flex-col items-center justify-center border-b border-gray-100`}>
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-bold text-brand-navy border border-gray-150 shadow-2xs">
                  <span>{dest.flag}</span>
                  <span>{dest.country}</span>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-3xl border shadow-2xs">
                    {dest.flag}
                  </div>
                  <span className="mt-3 block text-sm font-bold text-brand-navy/70">
                    {dest.city} Route
                  </span>
                </div>
              </div>

              {/* Destination Details */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-base font-extrabold text-brand-navy">
                    {dest.country}
                  </span>
                  <div className="flex items-center gap-0.5 text-sm font-bold text-brand-teal">
                    <DollarSign className="w-4 h-4" />
                    <span>{dest.salary}</span>
                  </div>
                </div>

                {/* Hot Sectors Grid */}
                <div className="mb-6">
                  <span className="block text-[11px] font-bold text-brand-navy/40 uppercase tracking-wider mb-2">Demand sectors</span>
                  <div className="flex flex-wrap gap-1.5">
                    {dest.hotSectors.map((sector) => (
                      <span
                        key={sector}
                        className={`px-2 py-0.5 rounded-lg bg-white border text-[11px] font-bold text-brand-navy/70 border-gray-200`}
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-brand-navy/50 text-[13px] font-semibold mb-6">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-brand-gold" />
                    <span>{dest.duration} Processing</span>
                  </div>
                </div>

                {/* Apply Shortcut */}
                <a
                  href="#contact"
                  className="mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-brand-slate hover:bg-brand-navy hover:text-white text-brand-navy font-bold text-xs border border-gray-200 transition-colors"
                >
                  <span>Apply for {dest.country}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Secondary Destinations */}
        <div className="mt-12 bg-white rounded-3xl p-8 border border-gray-200 shadow-2xs">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
            <div>
              <h3 className="text-xl font-extrabold text-brand-navy">
                Expanding Routes & Opportunities
              </h3>
              <p className="text-brand-navy/50 font-semibold text-xs mt-1">
                We regularly mobilize professional cohorts to other active Asian Arab regions.
              </p>
            </div>
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-[#A294F9] hover:bg-[#8F7EF2] text-white font-bold text-xs shadow-xs transition-colors"
            >
              <span>Inquire Other Region</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {secondaryDestinations.map((sec) => (
              <div
                key={sec.name}
                className="p-5 rounded-2xl bg-brand-slate border border-gray-150"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-brand-navy">{sec.name}</span>
                  <span className="px-2 py-0.5 rounded-md bg-white text-[10px] font-extrabold uppercase tracking-wide text-brand-teal border border-gray-150">
                    {sec.demand}
                  </span>
                </div>
                <span className="text-[12px] font-semibold text-brand-navy/50 leading-relaxed block">
                  Placements: {sec.fields}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
