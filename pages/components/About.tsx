import React from "react";
import { motion } from "framer-motion";
import config from "../index.json";
import Image from "next/image";
import { staggerContainer, slideUp, fadeIn, viewportOnce } from "./motions";

const About = () => {
  const about = config.about;

  return (
    <section id="About" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div className="space-y-8" variants={slideUp(50)}>
            <motion.h2 
              className="text-5xl md:text-6xl font-light text-black leading-tight"
              variants={slideUp(40)}
            >
              {about.title}
            </motion.h2>
            <motion.div 
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
              variants={slideUp(30)}
            >
              <p>{about.primary}</p>
              <p>{about.secondary}</p>
            </motion.div>
            <motion.div className="pt-4" variants={slideUp(20)}>
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
            variants={fadeIn()}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
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