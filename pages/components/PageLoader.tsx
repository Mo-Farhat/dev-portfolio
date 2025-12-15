import React from "react";
import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 0.8, delay: 2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="overflow-hidden">
        <motion.h1
          className="text-4xl md:text-6xl font-light text-white tracking-tighter"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          Mohamed Farhat
        </motion.h1>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-white"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default PageLoader;
