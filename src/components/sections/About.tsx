"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  HeartPulse,
  Landmark,
  Trophy,
  Users,
} from "lucide-react";

const stats = [
  {
    value: "22",
    label: "Acres Campus",
    icon: Landmark,
  },
  {
    value: "16+",
    label: "Sports",
    icon: Trophy,
  },
  {
    value: "24×7",
    label: "Medical Assistance",
    icon: HeartPulse,
  },
  {
    value: "6:1",
    label: "Student–Teacher Ratio",
    icon: Users,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-end overflow-hidden bg-(--dark-section) text-(--dark-section-text)"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://photos.wikimapia.org/p/00/05/21/62/59_big.jpg"
          alt="Tulas International School campus"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101611] via-[#101611]/65 to-[#101611]/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-8 pt-24 sm:px-6 sm:pb-10 lg:px-8 lg:pb-12">
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d4ad70]">
              About TIS
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Tulas is made
              <br />
              <span className="text-white/45">for the future.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
              Tulas International School was established to create an
              environment where education goes beyond textbooks and classrooms.
              We encourage students to question, explore, create and grow with
              confidence.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/50">
              From academics and sports to creativity and collaboration, every
              experience is designed to help students discover their strengths
              and prepare for a changing world.
            </p>

            <a
              href="#academics"
              className="group mt-7 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-white"
            >
              Discover our approach
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hidden lg:block"
          >
            <p className="max-w-sm text-sm leading-6 text-white/50">
              A learning environment where curiosity becomes confidence,
              challenges become opportunities and every student is encouraged
              to discover what they can become.
            </p>

            <div className="mt-8 flex items-center gap-3 text-white/35">
              <ArrowDown size={14} />
              <span className="text-[9px] uppercase tracking-[0.25em]">
                Explore TIS
              </span>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3 lg:mt-12"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group rounded-xl border border-white/15 bg-black/20 p-3 backdrop-blur-md transition-all duration-300 hover:border-[#d4ad70]/40 hover:bg-white/10 sm:p-3.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4ad70]/35 text-[#d4ad70] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={15} strokeWidth={1.5} />
                  </div>

                  <span className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                    TIS
                  </span>
                </div>

                <p className="mt-3 text-2xl font-medium tracking-[-0.04em] sm:text-3xl">
                  {stat.value}
                </p>

                <p className="mt-0.5 text-[8px] uppercase tracking-[0.13em] text-white/45 sm:text-[9px]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}