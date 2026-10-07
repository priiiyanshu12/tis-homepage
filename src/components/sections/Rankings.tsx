"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Trophy } from "lucide-react";

const rankings = [
  {
    rank: "#1",
    location: "In Dehradun",
    description:
      "Co-Educational Boarding School in Dehradun by Education Today",
  },
  {
    rank: "#2",
    location: "In Uttrakhand",
    description:
      "Co-Educational Boarding School in North India by Education Today",
  },
  {
    rank: "#1",
    location: "In North India",
    description:
      "Co-Educational Boarding School in North India by Outlook",
  },
  {
    rank: "#4",
    location: "In India",
    description:
      "Co-Educational Boarding School in India by Education Today",
  },
];

export default function Rankings() {
  return (
    <section
      id="rankings"
      className="relative overflow-hidden px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-9"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=2200&q=90"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end"
        >
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d4ad70]">
              Recognition
            </p>

            <h2 className="mt-2 max-w-2xl text-4xl font-medium leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Recognised for
              <br />
              <span className="text-white/40">excellence.</span>
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-5 text-white/55 sm:text-sm sm:leading-6 lg:justify-self-end">
            TIS continues to be recognised among leading schools for its
            academic environment, holistic education and student development.
          </p>
        </motion.div>

        {/* Recognition Cards */}
        <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
          {/* Trophy Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group flex aspect-square flex-col justify-between rounded-xl border border-white/15 bg-black/20 p-4 backdrop-blur-sm transition-all duration-300 hover:border-[#d4ad70]/40 hover:bg-white/10"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4ad70]/35 text-[#d4ad70] transition-transform duration-300 group-hover:scale-110">
              <Trophy size={15} strokeWidth={1.5} />
            </div>

            <div>
              <p className="text-[8px] uppercase tracking-[0.22em] text-white/35">
                Recognition
              </p>

              <h3 className="mt-1.5 text-xl font-medium tracking-[-0.04em] text-white">
                Excellence
              </h3>

              <div className="mt-2 flex items-center gap-1.5 text-[7px] uppercase tracking-[0.18em] text-[#d4ad70]">
                Tulas International School
                <ArrowUpRight size={10} />
              </div>
            </div>
          </motion.div>

          {/* Ranking Cards */}
          {rankings.map((item, index) => (
            <motion.div
              key={`${item.rank}-${item.location}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.08 * (index + 1),
              }}
              className="group flex aspect-square flex-col justify-between rounded-xl border border-white/15 bg-black/20 p-4 backdrop-blur-sm transition-all duration-300 hover:border-[#d4ad70]/40 hover:bg-white/10"
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl font-medium tracking-[-0.06em] text-white">
                  {item.rank}
                </span>

                <ArrowUpRight
                  size={14}
                  className="text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#d4ad70]"
                />
              </div>

              <div>
                <p className="text-sm font-medium tracking-[-0.02em] text-white">
                  {item.location}
                </p>

                <p className="mt-2 text-[9px] leading-4 text-white/45">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-5 border-t border-white/10 pt-3"
        >
          <p className="text-[8px] uppercase tracking-[0.25em] text-white/35">
            Recognition · Excellence · Impact
          </p>
        </motion.div>
      </div>
    </section>
  );
}