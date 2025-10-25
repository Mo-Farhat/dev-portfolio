import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import config from "../index.json";

const Header = () => {
  const navigation = config.navigation;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
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
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto px-8 lg:px-16">
        <nav className="flex items-center justify-between py-6">
          <motion.div 
            className="text-2xl font-light text-black"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Portfolio
          </motion.div>
          <motion.ul 
            className="hidden md:flex space-x-12"
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            {navigation.map((item, index) => (
              <motion.li key={item.title} variants={navItemVariants}>
                <motion.a 
                  href={`#${item.title}`}
                  className="text-black font-light hover:text-gray-600 transition-colors duration-300 relative group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
          
          {/* Mobile menu button */}
          <motion.button 
            className="md:hidden text-black"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;