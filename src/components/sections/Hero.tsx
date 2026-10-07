"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=85"
          alt="Students learning together"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-black/10" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8 lg:pb-20">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-white/70"
          >
            Tulas International School · Dehradun
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-tighter text-white sm:text-7xl lg:text-[clamp(4.5rem,9vw,9rem)]"
          >
            Shaping minds.
            <br />
            Building futures.
          </motion.h1>

          {/* Bottom content */}
          <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="max-w-md text-base leading-7 text-white/75 sm:text-lg"
            >
              A learning environment where curiosity, character and ambition
              come together to prepare students for a changing world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#about"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#17251f] transition-transform duration-300 hover:scale-105"
              >
                Discover TIS
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#admissions"
                className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
              >
                Explore Admissions
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50"
        >
          <span>Scroll to explore</span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={15} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}