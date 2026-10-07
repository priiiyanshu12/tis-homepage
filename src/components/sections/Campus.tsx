"use client";

import { motion } from "framer-motion";

const campusSpaces = [
  {
    title: "Classrooms",
    description: "Focused spaces for learning and collaboration.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Practical Rooms",
    description: "Hands-on learning through projects and activities.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sports Field",
    description: "Spaces for energy, teamwork and competition.",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Assembly Hall",
    description: "A shared space for gatherings and celebrations.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Computer Labs",
    description: "Technology-driven spaces for digital exploration.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Experiment Labs",
    description: "Where curiosity becomes discovery through science.",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Canteens",
    description: "Comfortable spaces to relax, eat and connect.",
    image:
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Library",
    description: "A quiet environment for reading and discovery.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Music Room",
    description: "A creative space for rhythm and expression.",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Dance Room",
    description: "Movement, performance and creative expression.",
    image:
      "https://images.unsplash.com/photo-1508807526345-15e9b5f4e4a0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Art Gallery",
    description: "A space where imagination becomes visible.",
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Activity Spaces",
    description: "Flexible spaces for clubs and creativity.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Campus() {
  return (
    <section
      id="campus"
      className="relative overflow-hidden px-4 py-6 sm:px-6 lg:px-8"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="mb-5 flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d4ad70]">
              The Campus
            </p>

            <h2 className="mt-2 text-3xl font-medium leading-[0.95] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
              A campus built{" "}
              <span className="text-white/50">for discovery.</span>
            </h2>
          </div>

          <p className="hidden max-w-sm text-xs leading-5 text-white/55 sm:block">
            Spaces designed for learning, creativity, collaboration and
            discovery.
          </p>
        </div>

        {/* 12 Cards — 4 × 3 */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
          {campusSpaces.map((space, index) => (
            <motion.article
              key={space.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.025,
              }}
              className="group overflow-hidden rounded-lg border border-white/15 bg-black/30 backdrop-blur-sm"
            >
              {/* Image */}
              <div className="aspect-[1.6/0.8] overflow-hidden">
                <img
                  src={space.image}
                  alt={space.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text BELOW image */}
              <div className="px-2.5 py-2 sm:px-3 sm:py-2.5">
                <h3 className="text-[11px] font-medium leading-tight text-white sm:text-xs">
                  {space.title}
                </h3>

                <p className="mt-0.5 text-[8px] leading-3 text-white/50 sm:text-[9px] sm:leading-3.5">
                  {space.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}