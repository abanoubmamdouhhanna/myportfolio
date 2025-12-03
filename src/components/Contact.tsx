import { Github, Briefcase, Contact as ContactIcon, Mail, Linkedin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./animations/AnimatedSection";
import GlassCard from "./animations/GlassCard";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a line anytime",
      contact: "abanoubmamdouu7@gmail.com",
      href: "mailto:abanoubmamdouu7@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Let's connect professionally",
      contact: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/abanoubmamdouh/",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Available for discussions",
      contact: "(+20) 1029009237",
      href: "tel:+201029009237",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const features = [
    { icon: Briefcase, title: "Available for Projects", desc: "Backend development, APIs, and consulting opportunities" },
    { icon: ContactIcon, title: "Quick Response", desc: "Based in Egypt, Cairo - I typically respond within 24 hours" },
    { icon: Github, title: "Problem Solver", desc: "Collaborative approach to solving complex challenges" }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-mesh relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl"
        animate={{ scale: [1.3, 1, 1.3], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
              Let's Build Something Amazing
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Ready to bring your backend project to life? I'm Abanoub Mamdouh, and I'd love to discuss how my expertise 
              in Node.js development can help transform your ideas into scalable applications.
            </p>
          </AnimatedSection>
          
          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard className="p-8 rounded-2xl text-center h-full">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon size={28} className="text-primary-foreground" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>

          {/* Contact methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <AnimatedSection key={index} delay={0.3 + index * 0.1}>
                <motion.a
                  href={method.href}
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="block"
                >
                  <GlassCard className="p-6 rounded-2xl h-full">
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center mb-4`}
                      whileHover={{ rotate: 12 }}
                    >
                      <method.icon size={20} className="text-white" />
                    </motion.div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{method.title}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{method.description}</p>
                    <p className="text-primary font-medium">{method.contact}</p>
                  </GlassCard>
                </motion.a>
              </AnimatedSection>
            ))}
          </div>
          
          {/* CTA buttons */}
          <AnimatedSection delay={0.5}>
            <div className="text-center space-y-8">
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a 
                  href="https://wa.me/201029009237" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center px-10 py-5 bg-primary text-primary-foreground font-semibold rounded-2xl glow-primary"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ContactIcon className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={22} />
                  Get In Touch
                </motion.a>
                <motion.a 
                  href="https://github.com/abanoubmamdouhhanna" 
                  className="group inline-flex items-center px-10 py-5 glass-card-strong text-foreground font-semibold rounded-2xl"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Github className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={22} />
                  View GitHub
                </motion.a>
              </div>
              
              <motion.div 
                className="flex justify-center"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
