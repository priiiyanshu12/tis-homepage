"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Student",
    quote:
      "TIS has given me the confidence to explore my interests, take part in new experiences and grow beyond academics.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Ananya Mehta",
    role: "Student",
    quote:
      "What I love most about TIS is that there is always something new to discover. The people, activities and environment make school special.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Rohan Kapoor",
    role: "Student",
    quote:
      "The school encourages us to participate, experiment and express ourselves. It has helped me become much more confident.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Ishita Verma",
    role: "Student",
    quote:
      "TIS feels like a place where academics and life come together. The friendships and experiences are something I will always remember.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=85",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-(--dark-section) text-(--dark-section-text)"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2200&q=90"
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
          className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end"
        >
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d4ad70]">
              Student Voices
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-medium leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Hear it from
              <br />
              <span className="text-white/40">the students.</span>
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-5 text-white/55 sm:text-sm sm:leading-6 lg:justify-self-end">
            Every student experiences TIS differently. Here are a few voices
            that reflect the friendships, opportunities and experiences of
            school life.
          </p>
        </motion.div>

        {/* Student Voices */}
        <div className="mt-8 space-y-2.5">
          {testimonials.map((testimonial, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group overflow-hidden rounded-xl border border-white/15 bg-black/20 backdrop-blur-sm"
              >
                <div
                  className={`flex flex-col lg:flex-row ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Student Image */}
                  <div className="relative h-44 w-full shrink-0 overflow-hidden sm:h-48 lg:h-[150px] lg:w-[150px]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover object-center grayscale-[20%] transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  </div>

                  {/* Quote */}
                  <div className="flex min-w-0 flex-1 flex-col justify-center p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-5">
                      <Quote
                        size={22}
                        strokeWidth={1.2}
                        className="shrink-0 text-[#d4ad70]"
                      />

                      <ArrowUpRight
                        size={15}
                        className="shrink-0 text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d4ad70]"
                      />
                    </div>

                    <p className="mt-4 max-w-2xl text-sm font-medium leading-5 tracking-[-0.015em] text-white/85 sm:text-base sm:leading-6">
                      “{testimonial.quote}”
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      <div className="h-px w-6 bg-[#d4ad70]" />

                      <div>
                        <p className="text-xs font-medium text-white">
                          {testimonial.name}
                        </p>

                        <p className="mt-0.5 text-[8px] uppercase tracking-[0.2em] text-white/35">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
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
            Student Perspective
          </p>

          <p className="mt-3 max-w-3xl text-lg font-medium leading-[1.2] tracking-[-0.025em] text-white sm:text-xl lg:text-2xl">
            Because the best way to understand TIS is to{" "}
            <span className="text-[#d4ad70]">experience it.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}