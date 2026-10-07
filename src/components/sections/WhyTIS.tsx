"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

const reasons = [
  {
    title: "Holistic Education",
    description:
      "A balanced approach that nurtures academic, physical, creative and personal growth.",
    icon: BookOpen,
  },
  {
    title: "World-Class Sports",
    description:
      "Opportunities to explore a wide range of sports and develop discipline, confidence and teamwork.",
    icon: Trophy,
  },
  {
    title: "Student Wellbeing",
    description:
      "A supportive environment where student health, safety and emotional wellbeing remain a priority.",
    icon: HeartPulse,
  },
  {
    title: "Personal Attention",
    description:
      "A learning environment designed to encourage individual growth, participation and confidence.",
    icon: Users,
  },
  {
    title: "Safe & Secure",
    description:
      "A structured school environment where students can learn, explore and grow with confidence.",
    icon: ShieldCheck,
  },
  {
    title: "Beyond Academics",
    description:
      "Clubs, activities, arts, sports and experiences help students discover interests beyond the classroom.",
    icon: Sparkles,
  },
];

export default function WhyTIS() {
  return (
    <section
      id="why-tis"
      className="relative overflow-hidden bg-(--dark-section) text-(--dark-section-text)"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=2200&q=90"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-5 lg:grid-cols-[1fr_0.65fr] lg:items-end"
        >
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d4ad70]">
              Why TIS
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-medium leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              More than a school.
              <br />
              <span className="text-white/40">A place to grow.</span>
            </h2>
          </div>

          <p className="max-w-md text-xs leading-5 text-white/55 sm:text-sm sm:leading-6 lg:justify-self-end">
            From academics and sports to creativity, wellbeing and life beyond
            the classroom, TIS creates an environment where students can
            discover their strengths and grow with confidence.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="mt-8 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                className="group rounded-xl border border-white/15 bg-black/20 p-4 backdrop-blur-sm transition-all duration-300 hover:border-[#d4ad70]/40 hover:bg-white/10"
              >
                {/* Icon */}
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4ad70]/35 text-[#d4ad70] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={16} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="mt-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-medium tracking-[-0.025em] text-white">
                      {reason.title}
                    </h3>

                    <span className="text-[8px] tracking-[0.15em] text-white/20">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-2 max-w-sm text-[10px] leading-4 text-white/45 sm:text-[11px] sm:leading-5">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-7 border-t border-white/10 pt-5"
        >
          <p className="text-[9px] uppercase tracking-[0.25em] text-[#d4ad70]">
            The TIS Difference
          </p>

          <p className="mt-3 max-w-3xl text-lg font-medium leading-[1.2] tracking-[-0.025em] text-white sm:text-xl lg:text-2xl">
            A school experience designed to help students{" "}
            <span className="text-[#d4ad70]">
              learn, explore, discover and become.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}