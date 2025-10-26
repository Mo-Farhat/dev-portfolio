import React from "react";
import { motion } from "framer-motion";
import config from "../index.json";
import Image from "next/image";
import { staggerContainer, slideUp, fadeIn, viewportOnce } from "./motions";

const Projects = () => {
  const projects = config.projects;

  return (
    <section id={projects.title} className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <motion.div 
          className="text-center mb-16"
          variants={slideUp(30)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="text-5xl md:text-6xl font-light text-black leading-tight">
            {projects.title}
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {projects.projects.map((item) => (
            <motion.div 
              key={item.title} 
              className="group bg-white overflow-hidden hover:shadow-xl transition-all duration-500"
              variants={slideUp(50)}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src={item.image} 
                  alt="project image" 
                  className="w-full h-64 object-contain group-hover:scale-102 transition-transform duration-500" 
                  width={400} 
                  height={256}
                />
                <motion.div 
                  className="absolute inset-0 group-hover:bg-black/20 transition-all duration-500"
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                ></motion.div>
              </motion.div>
              <motion.div 
                className="p-8"
                variants={fadeIn()}
              >
                <h3 className="text-2xl font-light text-black mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <motion.div 
                  className="flex space-x-4"
                  variants={fadeIn()}
                >
                  <motion.a 
                    href={item.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-black border-b border-black hover:border-transparent transition-all duration-300"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                  <motion.a 
                    href={item.private ? (projects.privateRedirect || '/source-private') : item.github} 
                    target={item.private ? undefined : "_blank"}
                    rel={item.private ? undefined : "noreferrer"}
                    className="text-gray-600 border-b border-gray-300 hover:border-black hover:text-black transition-all duration-300"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.private ? 'Why private?' : 'Source Code'}
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;