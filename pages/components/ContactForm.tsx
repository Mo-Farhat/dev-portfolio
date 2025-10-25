import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';
import config from "../index.json";

function ContactForm() {
  const contact = config.contact;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [state, handleSubmit] = useForm(contact.formId);
  if (state.succeeded) {
      return (
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3 
            className="text-2xl font-light text-black mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Thank you!
          </motion.h3>
          <motion.p 
            className="text-gray-600"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Your message has been sent successfully.
          </motion.p>
        </motion.div>
      );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="max-w-2xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.form 
        onSubmit={handleSubmit} 
        action={`https://formspree.io/f/${contact.formId}`}
        method="post" 
        className="space-y-8"
        variants={itemVariants}
      >
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <label className="block text-black font-light mb-3" htmlFor="name">
              Name
            </label>
            <motion.input
              className="w-full border-b-2 border-gray-300 bg-transparent py-3 px-0 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-colors duration-300"
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
              required
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label className="block text-black font-light mb-3" htmlFor="email">
              Email
            </label>
            <motion.input
              className="w-full border-b-2 border-gray-300 bg-transparent py-3 px-0 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-colors duration-300"
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              value={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
              required
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <label className="block text-black font-light mb-3" htmlFor="message">
            Message
          </label>
          <motion.textarea
            className="w-full border-b-2 border-gray-300 bg-transparent py-3 px-0 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-colors duration-300 resize-none"
            id="message"
            name="message"
            rows={6}
            placeholder="Tell me about your project..."
            value={message}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(event.target.value)}
            required
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </motion.div>
        <motion.div 
          className="text-center pt-4"
          variants={itemVariants}
        >
          <motion.button 
            type="submit"
            disabled={state.submitting}
            className="inline-block border-2 border-black px-12 py-4 text-black font-medium hover:bg-black hover:text-white transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
              {state.submitting ? 'Sending...' : 'Send Message'}
            </span>
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}

export default ContactForm;
