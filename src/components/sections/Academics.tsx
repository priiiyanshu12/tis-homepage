"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  FlaskConical,
  Lightbulb,
  Users,
} from "lucide-react";

const academicAreas = [
  {
    title: "Practical Classes",
    description:
      "Learning extends beyond textbooks through experiments, projects and hands-on experiences.",
    icon: FlaskConical,
  },
  {
    title: "Seasonal Activities",
    description:
      "Students discover new interests through activities that connect learning with the world around them.",
    icon: BookOpen,
  },
  {
    title: "Clubs & Organizations",
    description:
      "A space to collaborate, lead, create and explore interests with fellow students.",
    icon: Users,
  },
  {
    title: "Progressive Programs",
    description:
      "Future-focused learning encourages independent thinking and turns ideas into possibilities.",
    icon: Lightbulb,
  },
];

export default function Academics() {
  return (
    <section
      id="academics"
      className="relative min-h-[calc(100svh-72px)] overflow-hidden bg-[#17251f] text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=2200&q=85"
          alt="Books and library"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#101812]/95 via-[#17251f]/75 to-[#17251f]/45" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-72px)] max-w-7xl flex-col justify-between px-5 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-10">
        {/* Header */}
        <div className="grid gap-5 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#d4ad70]">
              Academics
            </p>

            <p className="mt-2 text-xs text-white/45">
              Learning · Discovery · Growth
            </p>
          </motion.div>

          {/* Heading */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-5xl text-4xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-[clamp(3.2rem,5.5vw,5.8rem)]"
            >
              Learning that goes
              <br />
              <span className="text-white/40">
                beyond the classroom.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 max-w-2xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7"
            >
              At TIS, academics encourage curiosity, independent thinking and
              a deeper understanding of the world through exploration,
              experimentation and collaboration.
            </motion.p>
          </div>
        </div>

        {/* Academic Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3"
        >
          {academicAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className="group rounded-xl border border-white/15 bg-black/20 p-3.5 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 sm:p-4"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4ad70]/40 text-[#d4ad70]">
                  <Icon size={15} strokeWidth={1.5} />
                </div>

                <h3 className="mt-4 text-sm font-medium tracking-[-0.01em] sm:text-base">
                  {area.title}
                </h3>

                <p className="mt-1.5 text-[10px] leading-4 text-white/45 sm:text-xs sm:leading-5">
                  {area.description}
                </p>

                <ArrowUpRight
                  size={13}
                  className="mt-4 text-white/25 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </article>
            );
          })}
        </motion.div>

        {/* Quote + CTA */}
        <div className="mt-7 grid gap-6 border-t border-white/15 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
          {/* Dramatic Quote */}
          <p className="font-medium leading-[1.05] tracking-[-0.04em] text-white">
            <span className="text-2xl text-white/40 sm:text-3xl lg:text-4xl">
              “
            </span>{" "}

            <span className="text-xl sm:text-2xl lg:text-3xl">
              Only
            </span>{" "}

            <span className="text-2xl font-semibold text-[#d4ad70] sm:text-3xl lg:text-[clamp(2.2rem,3.2vw,3.6rem)]">
              PATIENCE
            </span>{" "}

            <span className="text-xl sm:text-2xl lg:text-3xl">
              and
            </span>{" "}

            <span className="text-2xl font-semibold text-[#d4ad70] sm:text-3xl lg:text-[clamp(2.2rem,3.2vw,3.6rem)]">
              PERSISTENCE
            </span>{" "}

            <span className="text-xl sm:text-2xl lg:text-3xl">
              can give
            </span>

            <br />

            <span className="mt-2 inline-block text-2xl font-semibold text-[#d4ad70] sm:text-3xl lg:text-[clamp(2.2rem,3.2vw,3.6rem)]">
              GOOD MARKS
            </span>{" "}

            <span className="text-2xl text-white/40 sm:text-3xl lg:text-4xl">
              ”
            </span>
          </p>

          {/* CTA */}
          <motion.a
            href="#life"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-xs font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10"
          >
            Explore student life

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-1"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}