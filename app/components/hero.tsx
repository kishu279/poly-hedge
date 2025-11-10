"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Oswald } from "next/font/google";

const oswaldFont = Oswald({
  subsets: ["latin"],
  weight: "700",
  style: "normal",
});

export default function HeroSection() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-6 py-20 font-sans font-bold uppercase">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading with Pop-up Animation */}
        <motion.h1
          className={`text-5xl md:text-7xl lg:text-9xl font-bold text-neutral-800 mb-6 ${oswaldFont.className}`}
          initial={{ opacity: 0, scale: 1, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1, x: 10, y: -30 }}
          transition={{
            duration: 0.5,
            ease: [0.34, 1.56, 0.64, 1], // Bounce effect
          }}
        >
          Predictions Market for you{" "}
        </motion.h1>

        {/* Subheading with Delayed Pop-up */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 1, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1, x: 10, y: -30 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          Harness the collective intelligence of your organization to make
          better decisions, forecast outcomes, and drive strategic initiatives
          with confidence.
        </motion.p>

        {/* CTA Buttons with Staggered Pop-up */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, scale: 1, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1, x: 10, y: -30 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          <Button size="lg" className="text-base px-8">
            Get Started Free
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8">
            Watch Demo
          </Button>
        </motion.div>

        {/* Feature Pills with Pop-up Animation */}
        {/* <motion.div
          className="flex flex-wrap gap-3 justify-center mt-12"
          initial={{ opacity: 0, scale: 1 , x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1, x: 10, y: -30 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          {["Real-time Insights", "Data-Driven", "Collaborative", "Secure"].map(
            (feature, index) => (
              <motion.span
                key={feature}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.8 + index * 0.1,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                {feature}
              </motion.span>
            )
          )}
        </motion.div> */}
      </div>
    </div>
  );
}
