import React from "react";
import { motion } from "framer-motion";
import config from "../index.json";

const Hero = () => {
  const hero = config.hero;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const backgroundVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto px-8 lg:px-16 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8">
          <motion.h1 
            className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-black leading-none"
            variants={itemVariants}
          >
            {hero.name}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {hero.subtitle}
          </motion.p>
          <motion.div 
            className="pt-8"
            variants={itemVariants}
          >
            <motion.a 
              href="#About" 
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