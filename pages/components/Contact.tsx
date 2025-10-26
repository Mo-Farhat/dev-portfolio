import React from "react";
import { motion } from "framer-motion";
import config from "../index.json";
import ContactForm from "./ContactForm";
import { staggerContainer, slideUp, viewportOnce } from "./motions";

const Contact = () => {
  const contact = config.contact;

  return (
    <section id={contact.title} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-8 lg:px-16">
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer(0.3, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-light text-black leading-tight"
            variants={slideUp(50)}
          >
            {contact.title}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto"
            variants={slideUp(40)}
          >
            {contact.description}
          </motion.p>
        </motion.div>
        <motion.div
          variants={slideUp(30)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;