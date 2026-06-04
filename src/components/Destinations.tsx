import React from "react";
import { ArrowUpRight } from "lucide-react";

interface Country {
  name: string;
  count: string;
  image: string;
}

export default function Destinations() {
  const countries: Country[] = [
    {
      name: "Saudi Arabia",
      count: "1,500+ Deployed",
      image: "/saudi.jpg",
    },
    {
      name: "UAE",
      count: "980+ Deployed",
      image: "/uae.png",
    },
    {
      name: "Kuwait",
      count: "750+ Deployed",
      image: "/kuwait.png",
    },
    {
      name: "Qatar",
      count: "600+ Deployed",
      image: "/qatar.jpg",
    },
    {
      name: "Oman",
      count: "320+ Deployed",
      image: "/OMAN.jpg",
    },
    {
      name: "Jordan",
      count: "380+ Deployed",
      image: "/jordan.jpg",
    },
    {
      name: "Lebanon",
      count: "200+ Deployed",
      image: "/lebanon.jpg",
    },

  ];

  // Duplicate countries list to ensure perfect endless scrolling
  const scrollList = [...countries, ...countries];
  return (
    <section id="destinations" className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16 text-center">
        {/* Section Heading */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0079FE] bg-brand-50 border border-brand-100 px-3.5 py-1.5 rounded-full">
            Regional Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight font-sans">
            Popular Work Destinations
          </h2>
          <p className="text-navy-500 max-w-2xl text-sm sm:text-base leading-relaxed">
            Alburuj organizes secure placements in vetted, authorized countries across the Middle East and beyond.
          </p>
        </div>
      </div>

      {/* Endless Horizontal Marquee Slider */}
      <div className="relative w-full overflow-hidden select-none py-4">
        {/* Shadow Overlays to blend edges cleanly */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#FAF9F6] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#FAF9F6] to-transparent z-20 pointer-events-none"></div>

        {/* Moving Marquee Track */}
        <div className="animate-marquee flex gap-6 w-max">
          {scrollList.map((country, idx) => (
            <div
              key={idx}
              className="group/card relative w-72 sm:w-80 h-96 rounded-[2.2rem] overflow-hidden flex-shrink-0 shadow-sm transition-all duration-300"
            >
              {/* Country Cityscape Image */}
              <img
                src={country.image}
                alt={country.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
              />

              {/* Dark Ambient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              {/* Minimal Text Overlay (No Box Panel) */}
              <div className="absolute bottom-8 left-8 right-8 z-10 text-left">
                <h3 className="font-extrabold text-white text-2xl tracking-tight uppercase font-sans">
                  {country.name}
                </h3>
                <p className="text-[11px] text-white/70 font-bold uppercase tracking-widest mt-1">
                  {country.count}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
