import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import ThemeToggle from "@/components/ThemeToggle";
import FloatingParticles from "@/components/animations/FloatingParticles";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="min-h-screen relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ScrollProgress />
        <FloatingParticles />
        <ThemeToggle />
        <BackToTop />
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
