"use client";

import { ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Campus", href: "#campus" },
  { label: "Life at TIS", href: "#life" },
  { label: "Sports", href: "#sports" },
  { label: "Rankings", href: "#rankings" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "Facebook", short: "f", href: "#" },
  { label: "YouTube", short: "▶", href: "#" },
  { label: "Instagram", short: "◎", href: "#" },
  { label: "X", short: "𝕏", href: "#" },
  { label: "LinkedIn", short: "in", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-(--dark-section) text-(--dark-section-text)">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2200&q=90"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-6 pt-14 sm:px-6 sm:pb-7 sm:pt-16 lg:px-8 lg:pb-8 lg:pt-20">
        {/* Main Footer */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:gap-16">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="text-2xl font-semibold tracking-[-0.05em]"
            >
              TULAS<span className="text-(--accent)">.</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/50">
              Shaping minds, building futures through curiosity, character,
              creativity and a love for learning.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-white/25 hover:bg-white/5 hover:text-white"
                >
                  <span
                    className={
                      social.label === "LinkedIn"
                        ? "text-[10px] font-semibold"
                        : "text-sm font-medium"
                    }
                  >
                    {social.short}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-(--accent)">
              Explore
            </p>

            <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-white/55 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Find Us */}
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-(--accent)">
              Find Us
            </p>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/55">
              Dhoolkot, P.O. Selaqui,
              <br />
              Chakrata Road,
              <br />
              Dehradun – 248011,
              <br />
              Uttarakhand
            </p>
          </div>
        </div>

        {/* Admissions CTA */}
        <div className="mt-14 border-t border-white/10 pt-9 sm:mt-16 sm:pt-10">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-14">
            <p className="text-sm font-medium">
              Thinking about joining TIS?
            </p>

            <a
              href="#admissions"
              className="group inline-flex items-center gap-2 rounded-full bg-(--dark-section-text) px-5 py-3 text-xs font-medium text-(--dark-section) transition-transform duration-300 hover:scale-[1.02]"
            >
              Apply for Admission

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/10 pt-5 text-center">
          <p className="text-[10px] leading-5 text-white/35 sm:text-[11px]">
            Copyright © 2026 Tulas International School, Dehradun | All Rights
            Reserved
          </p>

          <p className="mt-1 text-[10px] leading-5 text-white/35 sm:text-[11px]">
            Designed and Managed By Priyanshu Singh
          </p>
        </div>
      </div>
    </footer>
  );
}