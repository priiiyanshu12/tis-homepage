"use client";

import { motion } from "framer-motion";
import useScrollProgress from "../../hooks/useScrollProgress";

export default function ScrollProgress() {
  const scrollProgress = useScrollProgress();

  return (
    <div
      className="fixed left-0 right-0 top-0 z-60 h-0.5 bg-transparent"
      aria-hidden="true"
    >
      <motion.div
        className="h-full origin-left bg-(--accent)"
        style={{
          scaleX: scrollProgress / 100,
        }}
      />
    </div>
  );
}