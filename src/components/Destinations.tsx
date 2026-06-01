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
      image: "/qatar.png",
    },
    {
      name: "Oman",
      count: "320+ Deployed",
      image: "https://images.unsplash.com/photo-1608933221956-c443d50f8c2b?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Jordan",
      count: "380+ Deployed",
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Lebanon",
      count: "200+ Deployed",
      image: "https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "And Beyond",
      count: "Explore Placements",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop",
    },
  ];

  // Duplicate countries list to ensure perfect endless scrolling
  const scrollList = [...countries, ...countries];

  return (
    <section id="destinations" className="py-24 bg-transparent overflow-hidden border-t border-navy-100">
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
            Albrooj organizes secure placements in vetted, authorized countries across the Middle East and beyond.
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
              className="group/card relative w-72 sm:w-80 h-96 rounded-[2.2rem] overflow-hidden border border-navy-100/30 flex-shrink-0 shadow-sm transition-all duration-300"
            >
              {/* Country Cityscape Image */}
              <img
                src={country.image}
                alt={country.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
              />

              {/* Dark Ambient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>

              {/* Floating Bottom Glass Panel Control */}
              <div className="absolute bottom-6 inset-x-6 glass-effect rounded-[1.6rem] p-5 flex items-center justify-between z-10 text-left border border-white/30 shadow-lg">
                <div>
                  <h3 className="font-extrabold text-navy-950 text-[15px] tracking-tight">
                    {country.name}
                  </h3>
                  <p className="text-[10px] text-[#0079FE] font-black uppercase tracking-wider mt-0.5">
                    {country.count}
                  </p>
                </div>

                {/* Arrow up-right pill action */}
                <a
                  href="#contact"
                  className="w-10 h-10 rounded-full bg-[#0079FE] text-white flex items-center justify-center hover:bg-[#0263e2] transition-transform duration-300 shadow-md group-hover/card:scale-105 active:scale-95"
                >
                  <ArrowUpRight className="w-5 h-5 text-white stroke-[2.5]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
