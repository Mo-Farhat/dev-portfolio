import React from "react";
import { motion } from "framer-motion";
import config from "../index.json";
import { staggerContainer, slideUp, slideInX, fadeIn, viewportOnce } from "./motions";

const Experience = () => {
  const experience = config.experience;
  
  return (
    <section id="Experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <motion.div 
          className="text-center mb-16"
          variants={fadeIn()}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="text-5xl md:text-6xl font-light text-black leading-tight">
            Experience
          </h2>
        </motion.div>
        
        <motion.div 
          className="space-y-16"
          variants={staggerContainer(0.3, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {experience.map((job, index) => (
            <motion.div key={index} className="group" variants={slideUp(50)}>
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
                  variants={slideInX(20)}
                >
                  <div className="space-y-6">
                    {job.responsibilities.map((responsibility, respIndex) => (
                      <motion.p 
                        key={respIndex} 
                        className="text-gray-700 leading-relaxed"
                        variants={slideUp(20)}
                      >
                        {responsibility}
                      </motion.p>
                    ))}
                    
                    <motion.div 
                      className="pt-4"
                      variants={fadeIn()}
                    >
                      <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <motion.span 
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-black hover:text-white transition-all duration-300 hover-trigger"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            variants={fadeIn()}
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
                  variants={fadeIn()}
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
