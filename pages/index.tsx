import Head from 'next/head'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'
import ScrollProgress from './components/ScrollProgress'
import { motion } from 'framer-motion'
import { fadeIn } from './components/motions'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mo Farhat - Software Engineer</title>
        <meta name="description" content="Full-stack Software Engineer specializing in web and mobile applications. Available for freelance projects and full-time opportunities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <PageLoader />
      <ScrollProgress />
      
      <motion.main
        className="min-h-screen"
        variants={fadeIn()}
        initial="hidden"
        animate="visible"
      >
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </motion.main>
    </>
  )
}
