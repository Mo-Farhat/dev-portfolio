import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import config from "../index.json";
import ContactForm from "./ContactForm";

const Contact = () => {
  const contact = config.contact;
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

  return (
    <section id={contact.title} className="py-24 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-8 lg:px-16">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-light text-black leading-tight"
            variants={itemVariants}
          >
            {contact.title}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {contact.description}
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;