import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import config from "../index.json";
import Image from "next/image";
import { staggerContainer, slideUp, fadeIn, viewportOnce } from "./motions";

const Projects = () => {
  const projects = config.projects;

  return (
    <section id={projects.title} className="py-32 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <motion.div 
          className="text-center mb-24"
          variants={slideUp(30)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="text-5xl md:text-7xl font-light text-black leading-tight tracking-tight">
            {projects.title}
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mt-8"></div>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {projects.projects.map((item, index) => (
            <ProjectCard key={item.title} item={item} index={index} projectsConfig={projects} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ item, index, projectsConfig }: { item: any, index: number, projectsConfig: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="group bg-white overflow-hidden hover:shadow-2xl transition-all duration-700"
      variants={slideUp(50)}
      whileHover={{ y: -15 }}
      layout
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-100 p-8 flex items-center justify-center">
        <motion.div
          className="w-full h-full relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <Image 
            src={item.image} 
            alt={item.title} 
            className="object-contain w-full h-full drop-shadow-xl" 
            width={400} 
            height={300}
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        
        {/* Overlay with links */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4 bg-black/20 backdrop-blur-[2px]">
          <a 
            href={item.url} 
            target="_blank" 
            rel="noreferrer"
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group/link"
            title="View Project"
          >
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a 
            href={item.private ? (projectsConfig.privateRedirect || '/source-private') : item.github} 
            target={item.private ? undefined : "_blank"}
            rel={item.private ? undefined : "noreferrer"}
            className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group/link"
            title="Source Code"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </a>
        </div>
      </div>

      <div className="p-8">
        <div className="flex justify-between items-baseline mb-4">
          <h3 className="text-2xl font-light text-black group-hover:text-gray-600 transition-colors duration-300">
            {item.title}
          </h3>
          <span className="text-xs font-mono text-gray-400">0{index + 1}</span>
        </div>
        
        <div className="relative">
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : "4.5em" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 leading-relaxed text-sm">
              {item.description}
            </p>
          </motion.div>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-xs font-medium uppercase tracking-wider text-black hover:text-gray-600 transition-colors flex items-center gap-1"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
            <motion.svg 
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="w-3 h-3" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>
        </div>

        <div className="w-full h-px bg-gray-100 group-hover:bg-black transition-colors duration-500 origin-left group-hover:scale-x-100 scale-x-50 mt-6" />
      </div>
    </motion.div>
  );
};

export default Projects;