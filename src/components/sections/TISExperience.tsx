"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Globe2,
  Lightbulb,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    number: "01",
    title: "Experiential Learning",
    shortTitle: "Learn by doing",
    description:
      "Learning becomes meaningful when students can question, experiment, observe and connect ideas with the world around them.",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "02",
    title: "Holistic Development",
    shortTitle: "Grow as a whole",
    description:
      "TIS looks beyond academic results by encouraging intellectual, physical, creative and personal development.",
    icon: Target,
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "03",
    title: "Future Ready",
    shortTitle: "Prepare for tomorrow",
    description:
      "Students develop confidence, communication, problem-solving and independent thinking to navigate an evolving world.",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "04",
    title: "Global Perspective",
    shortTitle: "Think beyond boundaries",
    description:
      "Exposure to diverse ideas, people and perspectives helps students become thoughtful citizens of an interconnected world.",
    icon: Globe2,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85",
  },
];

export default function TISExperience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeExperience = experiences[activeIndex];
  const ActiveIcon = activeExperience.icon;

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-(--dark-section) text-(--dark-section-text)"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2200&q=90"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/75" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        {/* =======================================================
            HEADER
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-end"
        >
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-(--accent)">
              The TIS Experience
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-medium leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Education that
              <br />
              <span className="text-white/40">extends beyond</span>
              <br />
              the ordinary.
            </h2>
          </div>

          <p className="max-w-md text-xs leading-5 text-white/55 sm:text-sm sm:leading-6 lg:justify-self-end">
            At TIS, education is not limited to what happens inside a
            classroom. Students are encouraged to explore, think independently
            and develop the confidence to shape their own future.
          </p>
        </motion.div>

        {/* =======================================================
            EXPERIENCE AREA
        ======================================================= */}
        <div className="mt-9 grid items-stretch gap-5 lg:grid-cols-[0.42fr_1fr]">
          {/* =====================================================
              LEFT NAVIGATION
          ===================================================== */}
          <div className="flex h-full flex-col border-t border-white/10">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              const isActive = index === activeIndex;

              return (
                <button
                  key={experience.number}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`group flex min-h-[82px] flex-1 items-center gap-4 border-b border-white/10 text-left transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-white/45 hover:text-white"
                  }`}
                >
                  {/* Number */}
                  <span
                    className={`w-7 shrink-0 text-[9px] tracking-[0.15em] transition-colors ${
                      isActive
                        ? "text-(--accent)"
                        : "text-white/35"
                    }`}
                  >
                    {experience.number}
                  </span>

                  {/* Icon */}
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? "border-(--accent) text-(--accent)"
                        : "border-white/15"
                    }`}
                  >
                    <Icon size={14} strokeWidth={1.5} />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium tracking-[-0.02em]">
                      {experience.title}
                    </p>

                    <p
                      className={`mt-0.5 text-[9px] transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-50"
                      }`}
                    >
                      {experience.shortTitle}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight
                    size={14}
                    className={`shrink-0 transition-all duration-300 ${
                      isActive
                        ? "translate-x-0 text-(--accent) opacity-100"
                        : "-translate-x-1 opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* =====================================================
              RIGHT FEATURED STORY
          ===================================================== */}
          <motion.div
            key={activeExperience.number}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="grid min-h-[328px] overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm lg:min-h-[328px] lg:grid-cols-[1.05fr_0.95fr]"
          >
            {/* Image */}
            <div className="relative min-h-[260px] overflow-hidden lg:min-h-full">
              <img
                src={activeExperience.image}
                alt={activeExperience.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              {/* Icon */}
              <div className="absolute bottom-5 left-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-sm">
                  <ActiveIcon size={16} strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="flex min-h-[260px] flex-col justify-between p-5 sm:p-7 lg:min-h-full lg:p-8">
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-(--accent)">
                  {activeExperience.number} / 04
                </p>

                <h3 className="mt-4 max-w-md text-3xl font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-4xl">
                  {activeExperience.title}
                </h3>

                <div className="mt-5 h-px w-12 bg-(--accent)" />

                <p className="mt-5 max-w-md text-xs leading-5 text-white/55 sm:text-sm sm:leading-6">
                  {activeExperience.description}
                </p>
              </div>

              {/* Bottom */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-[8px] uppercase tracking-[0.22em] text-white/35">
                  Shaping the future
                </span>

                <div className="flex gap-1.5">
                  {experiences.map((experience, index) => (
                    <button
                      key={experience.number}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`View ${experience.title}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "w-7 bg-(--accent)"
                          : "w-1.5 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            QUOTE
        ======================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-9 border-t border-white/10 pt-6"
        >
          <p className="text-[9px] uppercase tracking-[0.25em] text-(--accent)">
            A thought worth remembering
          </p>

          <div className="mt-4 max-w-3xl">
            <p className="text-lg font-medium leading-[1.2] tracking-[-0.025em] text-white sm:text-xl lg:text-2xl">
              “Education is not preparation for life;
              <span className="text-(--accent)">
                {" "}
                education is life itself.
              </span>
              ”
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}