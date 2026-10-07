"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const collaborations = [
  {
    name: "Universities",
    category: "Higher Education",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Colleges",
    category: "Academic Partnerships",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Healthcare",
    category: "Student Wellbeing",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Technology",
    category: "Innovation & Learning",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Sports",
    category: "Training & Development",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Arts & Culture",
    category: "Creative Development",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Global Schools",
    category: "International Exposure",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Research",
    category: "Knowledge & Discovery",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Leadership",
    category: "Student Development",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Environmental Programs",
    category: "Sustainability",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Career Guidance",
    category: "Future Preparation",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Community",
    category: "Social Impact",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=85",
  },
];

const ITEMS_PER_PAGE = 6;

export default function Collaborations() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(collaborations.length / ITEMS_PER_PAGE);

  const visibleItems = collaborations.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const goToPrevious = () => {
    setCurrentPage((page) => Math.max(page - 1, 0));
  };

  const goToNext = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages - 1));
  };

  return (
    <section
      id="collaborations"
      className="relative overflow-hidden bg-(--dark-section) text-(--dark-section-text)"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2200&q=90"
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
              Collaborations
            </p>

            <h2 className="mt-3 max-w-3xl text-4xl font-medium leading-[0.92] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Learning through
              <br />
              <span className="text-white/40">connections.</span>
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-5 text-white/55 sm:text-sm sm:leading-6 lg:justify-self-end">
            Meaningful connections with institutions and organisations give
            students opportunities to explore new ideas, experiences and
            perspectives.
          </p>
        </motion.div>

        {/* Collaboration Grid */}
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6"
        >
          {visibleItems.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-xl border border-white/15 bg-black/20 backdrop-blur-sm"
            >
              <div className="aspect-[1/1.05] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-3">
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <p className="text-[11px] font-medium text-white">
                      {item.name}
                    </p>

                    <p className="mt-0.5 text-[7px] uppercase tracking-[0.15em] text-white/45">
                      {item.category}
                    </p>
                  </div>

                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white/70 backdrop-blur-sm transition-all duration-300 group-hover:border-[#d4ad70] group-hover:text-[#d4ad70]">
                    <ArrowUpRight size={10} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation Controls */}
        <div className="mt-5 flex items-center justify-center gap-3 border-t border-white/10 pt-4">
          {/* Previous */}
          <button
            type="button"
            onClick={goToPrevious}
            disabled={currentPage === 0}
            aria-label="Previous collaborations"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:border-[#d4ad70] hover:text-[#d4ad70] disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:border-white/15 disabled:hover:text-white/60"
          >
            <ArrowLeft size={13} />
          </button>

          {/* Page Indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentPage(index)}
                aria-label={`View collaboration set ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? "w-7 bg-[#d4ad70]"
                    : "w-1.5 bg-white/25 hover:bg-white/45"
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={goToNext}
            disabled={currentPage === totalPages - 1}
            aria-label="Next collaborations"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:border-[#d4ad70] hover:text-[#d4ad70] disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:border-white/15 disabled:hover:text-white/60"
          >
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 border-t border-white/10 pt-5"
        >
          <p className="text-[9px] uppercase tracking-[0.25em] text-[#d4ad70]">
            Beyond the classroom
          </p>

          <p className="mt-3 max-w-3xl text-lg font-medium leading-[1.2] tracking-[-0.025em] text-white sm:text-xl lg:text-2xl">
            The right connections open doors to{" "}
            <span className="text-[#d4ad70]">
              new ideas, experiences and possibilities.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}