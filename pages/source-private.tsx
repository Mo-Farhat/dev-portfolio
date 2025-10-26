import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import { motion } from 'framer-motion'
import { fadeIn, slideUp, viewportOnce, staggerContainer } from './components/motions'
import config from './index.json'

export default function SourcePrivate() {
  const linkedin = config.footer?.linkedin
  const contactSectionId = config.contact?.title || 'Contact'

  return (
    <>
      <Head>
        <title>Source Code Private • {config.hero?.name || 'Portfolio'}</title>
        <meta name="description" content="The source code for this project is private. Learn why and how to reach out for more details." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main
        className=" bg-gray-50"
        variants={fadeIn()}
        initial="hidden"
        animate="visible"
      >
       

        <section className=" min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-8 lg:px-16">
            <motion.div
              className="text-center"
              variants={staggerContainer()}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.h1
                className="text-5xl md:text-6xl font-light text-black leading-tight mb-6"
                variants={slideUp(40)}
              >
                Source code is private
              </motion.h1>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed mb-10"
                variants={slideUp(30)}
              >
                Some projects are built under client agreements or contain proprietary integrations, so their repositories aren’t public. I’m happy to walk you through the architecture, stack, and selected snippets on request.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                variants={slideUp(20)}
              >
                {linkedin && (
                  <motion.a
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block border-2 border-black px-8 py-4 text-black font-medium hover:bg-black hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Connect on LinkedIn
                  </motion.a>
                )}
                <motion.a
                  href={`/#${contactSectionId}`}
                  className="inline-block border-2 border-black px-8 py-4 text-black font-medium hover:bg-black hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
                <motion.a
                  href="/"
                  className="inline-block border-2 border-black px-8 py-4 text-black font-medium hover:bg-black hover:text-white transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Home
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </motion.main>
    </>
  )
}
