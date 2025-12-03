import { Github, Briefcase, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-mesh relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile with animated rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-52 h-52 mx-auto mb-8"
          >
            {/* Outer animated ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/30"
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Middle rotating ring */}
            <motion.div
              className="absolute inset-2 rounded-full border-2 border-dashed border-accent/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner pulsing ring */}
            <motion.div
              className="absolute inset-4 rounded-full border-2 border-primary/50"
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Glowing dots on ring */}
            <motion.div
              className="absolute w-3 h-3 bg-primary rounded-full shadow-lg glow-primary"
              style={{ top: "50%", left: 0, marginTop: -6, marginLeft: -6 }}
              animate={{ 
                rotate: 360,
                x: [0, 104, 0, -104, 0],
                y: [-104, 0, 104, 0, -104]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-2 h-2 bg-accent rounded-full shadow-lg glow-accent"
              style={{ top: "50%", left: "50%", marginTop: -4, marginLeft: -4 }}
              animate={{ 
                x: [80, 0, -80, 0, 80],
                y: [0, 80, 0, -80, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />

            {/* Profile image */}
            <div
              className="absolute inset-6 rounded-full p-1 glow-primary"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))"
              }}
            >
              <motion.div 
                className="w-full h-full rounded-full overflow-hidden glass-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/lovable-uploads/IMG_68101.JPG"
                  alt="Abanoub Mamdouh"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Abanoub Mamdouh
          </motion.h1>

          <motion.h2 
            className="text-2xl md:text-4xl font-semibold mb-8 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Node.js Backend Developer
          </motion.h2>

          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Passionate Node.js backend developer with a strong foundation in
            JavaScript, specializing in building efficient, scalable server-side
            applications and APIs using Node.js, Express.js, and MongoDB.
          </motion.p>

          <motion.p 
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Based in Egypt, Cairo • Always striving to enhance skills and enjoy
            solving problems collaboratively with teams.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="group inline-flex items-center px-10 py-5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl shadow-lg glow-primary"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Briefcase
                className="mr-3 group-hover:rotate-12 transition-transform duration-300"
                size={22}
              />
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="group inline-flex items-center px-10 py-5 glass-card-strong text-foreground font-semibold rounded-2xl"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Github
                className="mr-3 group-hover:rotate-12 transition-transform duration-300"
                size={22}
              />
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
