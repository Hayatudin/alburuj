"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Destinations", href: "#destinations" },
    { name: "Our Process", href: "#process" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-white/90 backdrop-blur-sm shadow-xs border-b border-gray-100"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#A294F9] text-white font-extrabold text-lg">
            A
          </div>
          <span className="font-serif text-2xl font-extrabold text-brand-navy tracking-wide">
            Albrooj<span className="text-[#A294F9]">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-brand-navy/70 hover:text-brand-navy transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-gray-50 text-[14px] font-semibold text-brand-navy transition-all">
            <Globe className="w-4 h-4 text-[#A294F9]" />
            <span>AR</span>
          </button>

          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full text-[14px] font-semibold border border-gray-300 text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-brand-navy hover:bg-gray-50 transition-all"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 z-45 w-4/5 max-w-sm bg-white border-l border-gray-200 p-8 flex flex-col shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-12">
          <span className="font-serif text-2xl font-bold text-brand-navy tracking-wide">
            Albrooj<span className="text-[#A294F9]">.</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-gray-50 text-brand-navy/70"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-5 text-lg font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-brand-navy/80 hover:text-brand-navy py-1 border-b border-gray-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-gray-100 flex flex-col gap-4">
          <button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gray-200 hover:bg-gray-50 font-semibold text-[15px] transition-all">
            <Globe className="w-4 h-4 text-[#A294F9]" />
            <span>Switch to Arabic</span>
          </button>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full py-3 rounded-xl bg-[#A294F9] text-white font-bold text-[15px] transition-all hover:bg-[#8F7EF2]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
