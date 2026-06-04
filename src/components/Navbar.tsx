"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Contact Bar */}
      <div className="bg-[#FAF9F6] text-slate-600 py-2 px-4 sm:px-6 md:px-8 border-b border-slate-100 text-xs transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 font-medium">
          <div className="flex items-center gap-6">
            <a
              href="tel:+251925939684"
              className="flex items-center gap-2 hover:text-[#0079FE] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0079FE]" />
              <span>+251925939684</span>
            </a>
            <a
              href="mailto:yahyaaabdu93@gmail.com"
              className="flex items-center gap-2 hover:text-[#0079FE] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#0079FE]" />
              <span>yahyaaabdu93@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-teal-600 animate-pulse" />
              Government Licensed Foreign Employment Agency
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full py-5 px-6 md:px-12 transition-all duration-300 ${scrolled
          ? "glass-effect shadow-sm py-4 border-b border-slate-200/40"
          : "bg-transparent border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className="font-extrabold text-2xl tracking-tight text-slate-900 font-sans">
              Alburuj
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#0079FE] self-end mb-1.5 animate-pulse"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-semibold text-[13px] text-slate-600 hover:text-slate-900 tracking-tight transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="bg-[#0079FE] hover:bg-[#0263e2] text-white px-6 py-2.5 rounded-full font-bold text-[13px] hover:shadow-lg hover:shadow-brand-500/20 active:scale-95 transition-all duration-300"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-all"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="absolute top-[105px] right-4 left-4 rounded-2xl glass-effect p-6 shadow-xl border border-white/20 flex flex-col gap-5 animate-in fade-in slide-in-from-top-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-4 text-left">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-bold text-base text-slate-800 hover:text-[#0079FE] py-2 border-b border-slate-100 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#0079FE] hover:bg-[#0263e2] text-white text-center py-3 rounded-full font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
