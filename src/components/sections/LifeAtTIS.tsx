"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const lifeItems = [
  {
    title: "Clubs",
    description:
      "Discover interests, build new skills and find your own community.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Fests",
    description:
      "A celebration of culture, creativity, friendship and school spirit.",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Performing Arts",
    description:
      "Music, dance and performance give students a stage to express themselves.",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Student Life",
    description:
      "The everyday moments, friendships and memories that make school special.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Leadership",
    description:
      "Opportunities to take responsibility, collaborate and grow with confidence.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Community",
    description:
      "Growing together through shared experiences, values and meaningful connections.",
    image:
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function LifeAtTIS() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = lifeItems[activeIndex];

  return (
    <section
      id="life"
      className="relative overflow-hidden bg-(--dark-section) text-(--dark-section-text)"
    >
      {/* Fixed Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2200&q=90"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-[#101611]/85" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between gap-8"
        >
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-(--accent)">
              Life at TIS
            </p>

            <h2 className="mt-2 max-w-2xl text-3xl font-medium leading-[0.92] tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
              School is more than
              <br />
              <span className="text-white/40">a classroom.</span>
            </h2>
          </div>

          <p className="hidden max-w-xs text-xs leading-5 text-white/45 lg:block">
            Explore the experiences, friendships and activities that make
            everyday life at TIS memorable.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="mt-6 grid gap-4 lg:grid-cols-[1.35fr_0.65fr] lg:gap-5">
          {/* Featured Image */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-xl border border-white/10"
          >
            <div className="aspect-[1.35/1] sm:aspect-[1.5/1]">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

              {/* Featured Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h3 className="text-2xl font-medium tracking-[-0.04em] text-white sm:text-3xl">
                  {activeItem.title}
                </h3>

                <p className="mt-1.5 max-w-md text-[10px] leading-4 text-white/60 sm:text-xs sm:leading-5">
                  {activeItem.description}
                </p>

                <div className="mt-3 flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-white/60">
                  Explore experience
                  <ArrowUpRight size={12} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Activity Cards */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 lg:gap-2.5">
            {lifeItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.button
                  key={item.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative overflow-hidden rounded-lg border text-left transition-all duration-300 ${
                    isActive
                      ? "border-(--accent)"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  {/* Square Image */}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`h-full w-full object-cover transition-transform duration-700 ${
                        isActive
                          ? "scale-105"
                          : "scale-100 group-hover:scale-105"
                      }`}
                    />

                    <div
                      className={`absolute inset-0 transition-colors duration-300 ${
                        isActive
                          ? "bg-black/25"
                          : "bg-black/50 group-hover:bg-black/30"
                      }`}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3">
                    <div className="flex items-end justify-between gap-2">
                      <h3 className="text-[10px] font-medium text-white sm:text-xs">
                        {item.title}
                      </h3>

                      <div
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isActive
                            ? "border-(--accent) bg-(--accent) text-(--dark-section)"
                            : "border-white/25 bg-black/20 text-white"
                        }`}
                      >
                        <ArrowUpRight size={10} />
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-6 border-t border-white/10 pt-4">
          <p className="text-[8px] uppercase tracking-[0.25em] text-white/35">
            Learn · Create · Connect · Grow
          </p>
        </div>
      </div>
    </section>
  );
}