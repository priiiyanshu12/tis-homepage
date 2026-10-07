"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { sports } from "../../data/sportsData";

const SPORTS_PER_PAGE = 8;

export default function Sports() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(sports.length / SPORTS_PER_PAGE);

  const startIndex = currentPage * SPORTS_PER_PAGE;

  const visibleSports = sports.slice(
    startIndex,
    startIndex + SPORTS_PER_PAGE
  );

  const goToPrevious = () => {
    setCurrentPage((page) => Math.max(page - 1, 0));
  };

  const goToNext = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages - 1));
  };

  return (
    <section
      id="sports"
      className="relative overflow-hidden px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-9"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=2000&q=85"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-5 flex items-end justify-between gap-5 sm:mb-6">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d4ad70]">
              Sports at TIS
            </p>

            <h2 className="mt-2 text-3xl font-medium leading-[0.95] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
              More than{" "}
              <span className="text-white/50">a game.</span>
            </h2>
          </div>

          <p className="hidden max-w-sm text-xs leading-5 text-white/55 sm:block">
            Discipline, teamwork, confidence and the joy of challenging
            yourself.
          </p>
        </div>

        {/* Sports Grid */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
          {visibleSports.map((sport) => (
            <article
              key={sport.name}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/30 backdrop-blur-sm"
            >
              {/* Image */}
              <div className="relative aspect-[1.45/0.9] overflow-hidden">
                <img
                  src={sport.image}
                  alt={`${sport.name} at Tulas International School`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative px-2.5 py-2.5 sm:px-3 sm:py-3">
                <div className="absolute left-0 top-0 h-px w-0 bg-[#d4ad70] transition-all duration-500 group-hover:w-full" />

                <h3 className="text-xs font-medium tracking-[-0.01em] text-white sm:text-sm">
                  {sport.name}
                </h3>

                <p className="mt-1 text-[8px] leading-3.5 text-white/50 sm:text-[9px] sm:leading-4">
                  {sport.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/45">
            Explore 16+ sports
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goToPrevious}
              disabled={currentPage === 0}
              aria-label="Previous sports"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white transition-all duration-300 hover:border-white/40 hover:-translate-x-0.5 disabled:pointer-events-none disabled:opacity-25"
            >
              <ArrowLeft size={13} />
            </button>

            <button
              type="button"
              onClick={goToNext}
              disabled={currentPage === totalPages - 1}
              aria-label="Next sports"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white transition-all duration-300 hover:border-white/40 hover:translate-x-0.5 disabled:pointer-events-none disabled:opacity-25"
            >
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}