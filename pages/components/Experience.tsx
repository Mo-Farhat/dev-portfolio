import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import config from "../index.json";

const Experience = () => {
  const experience = config.experience;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
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

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <section id="Experience" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <motion.div 
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-5xl md:text-6xl font-light text-black leading-tight">
            Experience
          </h2>
        </motion.div>
        
        <motion.div 
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experience.map((job, index) => (
            <motion.div key={index} className="group" variants={itemVariants}>
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <motion.div 
                  className="lg:col-span-1"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="sticky top-24">
                    <h3 className="text-2xl font-light text-black mb-2">
                      {job.position}
                    </h3>
                    <p className="text-lg text-gray-600 mb-1">{job.company}</p>
                    <p className="text-sm text-gray-500 mb-4">{job.duration}</p>
                    <p className="text-sm text-gray-500">{job.location}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="lg:col-span-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="space-y-6">
                    {job.responsibilities.map((responsibility, respIndex) => (
                      <motion.p 
                        key={respIndex} 
                        className="text-gray-700 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (respIndex * 0.1) }}
                      >
                        {responsibility}
                      </motion.p>
                    ))}
                    
                    <motion.div 
                      className="pt-4"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    >
                      <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <motion.span 
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-black hover:text-white transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: (index * 0.2) + (techIndex * 0.05) }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              
              {index < experience.length - 1 && (
                <motion.div 
                  className="mt-16 mb-8"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                >
                  <div className="w-full h-px bg-gray-200"></div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
