import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import config from "../index.json";
import Image from "next/image";

const About = () => {
  const about = config.about;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="About" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.h2 
              className="text-5xl md:text-6xl font-light text-black leading-tight"
              variants={itemVariants}
            >
              {about.title}
            </motion.h2>
            <motion.div 
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
              variants={itemVariants}
            >
              <p>{about.primary}</p>
              <p>{about.secondary}</p>
            </motion.div>
            <motion.div className="pt-4" variants={itemVariants}>
              <motion.a 
                href="#" 
                className="inline-block border-2 border-black px-8 py-4 text-black font-medium hover:bg-black hover:text-white transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                  View Resume
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="aspect-square relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src={about.image} 
                alt="about" 
                className="object-cover w-full h-full" 
                width={500} 
                height={500}
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;