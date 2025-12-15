import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "../index.json";
import { fadeIn, staggerContainer, slideUp } from "./motions";

const Header = () => {
  const navigation = config.navigation;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    closed: { y: 20, opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
        variants={fadeIn()}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <nav className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-light text-black z-50 relative mix-blend-difference"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <a href="#" className="block">
                Mo Farhat
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.ul
              className="hidden md:flex space-x-12"
              variants={staggerContainer(0.1, 0.3)}
              initial="hidden"
              animate="visible"
            >
              {navigation.map((item) => (
                <motion.li key={item.title} variants={slideUp(20)}>
                  <motion.a
                    href={item.url}
                    className="text-black font-light hover:text-gray-600 transition-colors duration-300 relative group text-sm uppercase tracking-wider"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden text-black z-50 relative w-10 h-10 flex flex-col justify-center items-end gap-1.5 mix-blend-difference"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                animate={
                  isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                }
                className={`w-8 h-0.5 bg-current block transition-all duration-300 ${
                  isMenuOpen ? "bg-white" : "bg-black"
                }`}
              ></motion.span>
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-black block transition-all duration-300"
              ></motion.span>
              <motion.span
                animate={
                  isMenuOpen
                    ? { rotate: -45, y: -6, width: 32 }
                    : { rotate: 0, y: 0, width: 16 }
                }
                className={`h-0.5 bg-current block transition-all duration-300 ${
                  isMenuOpen ? "bg-white" : "bg-black"
                }`}
              ></motion.span>
            </motion.button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center md:hidden"
          >
            <ul className="flex flex-col space-y-8 text-center">
              {navigation.map((item) => (
                <motion.li key={item.title} variants={linkVariants}>
                  <a
                    href={item.url}
                    className="text-4xl font-light text-white hover:text-gray-300 transition-colors duration-300 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              variants={linkVariants}
              className="absolute bottom-12 text-gray-500 text-sm"
            >
              © {new Date().getFullYear()} Portfolio
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
