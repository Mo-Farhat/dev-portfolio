import React from "react";
import { motion } from "framer-motion";
import config from "../index.json";
import { staggerContainer, slideUp } from "./motions";

const Hero = () => {
  const hero = config.hero;

  return (
    <section className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto px-8 lg:px-16 text-center"
        variants={staggerContainer(0.3, 0.2)}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8">
          <motion.h1 
            className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-black leading-none"
            variants={slideUp(30)}
          >
            {hero.name}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light text-gray-600 max-w-2xl mx-auto"
            variants={slideUp(30)}
          >
            {hero.subtitle}
          </motion.p>
          <motion.div 
            className="pt-8"
            variants={slideUp(20)}
          >
            <motion.a 
              href="#Projects"
              className="inline-block border-2 border-black px-8 py-4 text-black font-medium hover:bg-black hover:text-white transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                View Work
              </span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Animated background elements */}
     
    </section>
  );
};

export default Hero;