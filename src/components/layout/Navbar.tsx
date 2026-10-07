"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

const campusLinks = [
  { label: "Campus", href: "#campus" },
  { label: "Life at TIS", href: "#life" },
  { label: "Sports", href: "#sports" },
  { label: "TIS Experience", href: "#experience" },
];

const exploreLinks = [
  { label: "Rankings", href: "#rankings" },
  { label: "Student Voices", href: "#testimonials" },
  { label: "Why TIS", href: "#why-tis" },
  { label: "Collaborations", href: "#collaborations" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [campusOpen, setCampusOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setCampusOpen(false);
    setExploreOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-[100]">
      <div className="mx-auto max-w-[1500px] px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="relative rounded-xl border border-white/10 bg-[#17251f]/95 px-5 py-3 shadow-2xl backdrop-blur-xl sm:px-7 sm:py-3.5 lg:px-9">
          
          {/* DESKTOP NAVBAR */}
          <div className="hidden items-center justify-between lg:flex">
            
            {/* LOGO */}
            <a
              href="#"
              className="flex shrink-0 items-center gap-2.5"
            >
              <span className="text-[27px] font-semibold tracking-[-0.07em] text-white">
                TULAS<span className="text-[#d4ad70]">.</span>
              </span>

              <span className="hidden text-[9px] uppercase tracking-[0.22em] text-white/30 xl:block">
                International School
              </span>
            </a>

            {/* MAIN NAVIGATION */}
            <div className="flex items-center gap-1.5">
              
              {/* ABOUT */}
              <a
                href="#about"
                className="rounded-lg px-4 py-2.5 text-[13px] font-medium text-white/65 transition-all duration-300 hover:bg-white/5 hover:text-white"
              >
                About
              </a>

              {/* ACADEMICS */}
              <a
                href="#academics"
                className="rounded-lg px-4 py-2.5 text-[13px] font-medium text-white/65 transition-all duration-300 hover:bg-white/5 hover:text-white"
              >
                Academics
              </a>

              {/* CAMPUS & LIFE */}
              <div
                className="relative"
                onMouseEnter={() => setCampusOpen(true)}
                onMouseLeave={() => setCampusOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => {
                    setCampusOpen(!campusOpen);
                    setExploreOpen(false);
                  }}
                  className={`flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-[13px] font-medium transition-all duration-300 ${
                    campusOpen
                      ? "bg-white/5 text-white"
                      : "text-white/65 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  Campus & Life

                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      campusOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* CAMPUS DROPDOWN */}
                <div
                  className={`absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    campusOpen
                      ? "pointer-events-auto visible translate-y-0 opacity-100"
                      : "pointer-events-none invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-[#17251f]/95 p-2 shadow-2xl backdrop-blur-xl">
                    {campusLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="group flex items-center justify-between rounded-lg px-4 py-3 text-[12px] text-white/60 transition-all duration-200 hover:bg-white/5 hover:text-white"
                      >
                        {link.label}

                        <ArrowUpRight
                          size={13}
                          className="text-white/20 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d4ad70]"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* EXPLORE */}
              <div
                className="relative"
                onMouseEnter={() => setExploreOpen(true)}
                onMouseLeave={() => setExploreOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => {
                    setExploreOpen(!exploreOpen);
                    setCampusOpen(false);
                  }}
                  className={`flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-[13px] font-medium transition-all duration-300 ${
                    exploreOpen
                      ? "bg-white/5 text-white"
                      : "text-white/65 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  Explore

                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      exploreOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* EXPLORE DROPDOWN */}
                <div
                  className={`absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    exploreOpen
                      ? "pointer-events-auto visible translate-y-0 opacity-100"
                      : "pointer-events-none invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-[#17251f]/95 p-2 shadow-2xl backdrop-blur-xl">
                    {exploreLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="group flex items-center justify-between rounded-lg px-4 py-3 text-[12px] text-white/60 transition-all duration-200 hover:bg-white/5 hover:text-white"
                      >
                        {link.label}

                        <ArrowUpRight
                          size={13}
                          className="text-white/20 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d4ad70]"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* CONTACT */}
              <a
                href="#contact"
                className="rounded-lg px-4 py-2.5 text-[13px] font-medium text-white/65 transition-all duration-300 hover:bg-white/5 hover:text-white"
              >
                Contact
              </a>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex shrink-0 items-center gap-3">
              
              {/* THEME TOGGLE */}
              <ThemeToggle />

              {/* ADMISSIONS */}
              <a
                href="#admissions"
                className="group flex items-center gap-1.5 rounded-lg bg-[#d4ad70] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#17251f] transition-all duration-300 hover:bg-white"
              >
                Admissions

                <ArrowUpRight
                  size={12}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          {/* MOBILE NAVBAR */}
          <div className="flex items-center justify-between lg:hidden">
            
            {/* MOBILE LOGO */}
            <a
              href="#"
              className="text-2xl font-semibold tracking-[-0.07em] text-white"
              onClick={closeMobileMenu}
            >
              TULAS<span className="text-[#d4ad70]">.</span>
            </a>

            {/* MOBILE ACTIONS */}
            <div className="flex items-center gap-2">
              
              {/* THEME TOGGLE */}
              <ThemeToggle />

              {/* MENU BUTTON */}
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-white/65 transition-all duration-300 hover:border-white/20 hover:text-white"
              >
                {mobileOpen ? (
                  <X size={19} />
                ) : (
                  <Menu size={19} />
                )}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          <div
            className={`overflow-hidden transition-all duration-300 lg:hidden ${
              mobileOpen
                ? "max-h-[700px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-white/10 pb-2 pt-4">
              
              {/* ABOUT */}
              <a
                href="#about"
                onClick={closeMobileMenu}
                className="block rounded-lg px-4 py-3.5 text-[15px] text-white/65 transition-colors hover:bg-white/5 hover:text-white"
              >
                About
              </a>

              {/* ACADEMICS */}
              <a
                href="#academics"
                onClick={closeMobileMenu}
                className="block rounded-lg px-4 py-3.5 text-[15px] text-white/65 transition-colors hover:bg-white/5 hover:text-white"
              >
                Academics
              </a>

              {/* MOBILE CAMPUS & LIFE */}
              <button
                type="button"
                onClick={() => {
                  setCampusOpen(!campusOpen);
                  setExploreOpen(false);
                }}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-left text-[15px] text-white/65 transition-colors hover:bg-white/5 hover:text-white"
              >
                Campus & Life

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    campusOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  campusOpen
                    ? "max-h-60 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-4 border-l border-white/10 pl-3">
                  {campusLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block rounded-md px-3 py-3 text-[13px] text-white/45 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* MOBILE EXPLORE */}
              <button
                type="button"
                onClick={() => {
                  setExploreOpen(!exploreOpen);
                  setCampusOpen(false);
                }}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3.5 text-left text-[15px] text-white/65 transition-colors hover:bg-white/5 hover:text-white"
              >
                Explore

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    exploreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  exploreOpen
                    ? "max-h-60 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="ml-4 border-l border-white/10 pl-3">
                  {exploreLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block rounded-md px-3 py-3 text-[13px] text-white/45 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* CONTACT */}
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="block rounded-lg px-4 py-3.5 text-[15px] text-white/65 transition-colors hover:bg-white/5 hover:text-white"
              >
                Contact
              </a>

              {/* MOBILE ADMISSION CTA */}
              <a
                href="#admissions"
                onClick={closeMobileMenu}
                className="group mt-3 flex items-center justify-center gap-1.5 rounded-lg bg-[#d4ad70] px-4 py-3 text-[10px] font-medium uppercase tracking-[0.15em] text-[#17251f] transition-all duration-300 hover:bg-white"
              >
                Apply for Admission

                <ArrowUpRight
                  size={12}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}