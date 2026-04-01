"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Background image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/firsthero.jpg"
          alt="Interior Design"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 flex flex-col md:flex-row justify-between items-end min-h-screen pb-20 gap-10">

        {/* Left — BIG quote */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="w-full md:w-[720px] shrink-0"
        >
          <svg
            width="100%"
            viewBox="0 0 780 460"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Left vertical bar */}
            <rect x="20" y="30" width="5" height="360" rx="2.5" fill="#d6c39a" />

            {/* Top decorative line */}
            <line x1="44" y1="44" x2="260" y2="44" stroke="#d6c39a" strokeWidth="1.2" opacity="0.4" />

            {/* Bottom decorative line */}
            <line x1="44" y1="390" x2="260" y2="390" stroke="#d6c39a" strokeWidth="1.2" opacity="0.4" />

            {/* Large opening quote mark */}
            <text
              x="34" y="170"
              fontFamily="Georgia, serif"
              fontSize="160"
              fill="#d6c39a"
              opacity="0.10"
              fontWeight="700"
            >
              &ldquo;
            </text>

            {/* Line 1 */}
            <text
              x="44" y="160"
              fontFamily="Georgia, serif"
              fontSize="82"
              fontWeight="400"
              fill="white"
              letterSpacing="-2"
            >
              Transforming spaces,
            </text>

           

            {/* Line 3 — accent */}
            <text
              x="44" y="270"
              fontFamily="Georgia, serif"
              fontSize="82"
              fontWeight="400"
              fill="#d6c39a"
              letterSpacing="-2"
            >
              elevating lives.
            </text>

            {/* Closing quote mark */}
            <text
              x="760" y="400"
              fontFamily="Georgia, serif"
              fontSize="160"
              fill="#d6c39a"
              opacity="0.10"
              fontWeight="700"
              textAnchor="end"
            >
              &rdquo;
            </text>

            {/* Right decorative dots */}
            <circle cx="748" cy="180" r="3.5" fill="#d6c39a" opacity="0.3" />
            <circle cx="748" cy="210" r="6" fill="#d6c39a" opacity="0.5" />
            <circle cx="748" cy="240" r="3.5" fill="#d6c39a" opacity="0.3" />

            {/* Bottom attribution */}
            <line x1="44" y1="345" x2="130" y2="345" stroke="#d6c39a" strokeWidth="1.5" />
            <text
              x="142" y="350"
              fontFamily="sans-serif"
              fontSize="12"
              fill="#d6c39a"
              opacity="0.7"
              letterSpacing="3"
            >
          EDAM
            </text>
          </svg>
        </motion.div>

       

      </div>
    </section>
  );
}