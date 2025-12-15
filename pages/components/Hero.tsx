import React from "react";
import { motion } from "framer-motion";
import config from "../index.json";
import { staggerContainer, slideUp, textReveal, containerReveal } from "./motions";

const Hero = () => {
  const hero = config.hero;
  
  // Split text into words for reveal animation
  const nameWords = hero.name.split(" ");

  return (
    <section className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-gray-100 blur-3xl opacity-60 mix-blend-multiply"
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-gray-50 blur-3xl opacity-60 mix-blend-multiply"
          animate={{ 
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div 
        className="max-w-6xl mx-auto px-8 lg:px-16 text-center z-10"
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8">
          <div className="overflow-hidden">
            <motion.div 
              className="flex flex-wrap justify-center gap-x-4 md:gap-x-8"
              variants={containerReveal}
            >
              {nameWords.map((word, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h1 
                    className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-black leading-none"
                    variants={textReveal}
                  >
                    {word}
                  </motion.h1>
                </div>
              ))}
            </motion.div>
          </div>

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
      
      
    </section>
  );
};

export default Hero;