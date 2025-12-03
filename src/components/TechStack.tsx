import { motion } from "framer-motion";
import AnimatedSection from "./animations/AnimatedSection";
import GlassCard from "./animations/GlassCard";

const TechStack = () => {
  const categories = [
    {
      title: "Core Technologies",
      gradient: "from-green-500 to-emerald-500",
      techs: ["Node.js", "Express.js", "JavaScript", "TypeScript", "RESTful APIs", "GraphQL"]
    },
    {
      title: "Databases",
      gradient: "from-purple-500 to-violet-500",
      techs: ["MongoDB", "MySQL", "PostgreSQL", "Mongoose", "SQL", "Database Design"]
    },
    {
      title: "Real-time & Communication",
      gradient: "from-blue-500 to-cyan-500",
      techs: ["Socket.io", "WebRTC", "WebSockets", "Real-time Messaging", "Event-driven Architecture"]
    },
    {
      title: "Authentication & Security",
      gradient: "from-red-500 to-rose-500",
      techs: ["JWT", "OAuth", "Bcrypt", "CORS", "Rate Limiting", "Input Validation"]
    },
    {
      title: "Cloud & DevOps",
      gradient: "from-orange-500 to-amber-500",
      techs: ["Docker", "AWS", "Heroku", "PM2", "Load Balancing", "CI/CD"]
    },
    {
      title: "Development Tools",
      gradient: "from-yellow-500 to-orange-500",
      techs: ["Git/GitHub", "Postman", "npm/yarn", "ESLint", "Jest", "Nodemon"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="tech-stack" className="py-24 bg-gradient-mesh relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Tech Stack & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Comprehensive toolkit for building modern, scalable Node.js backend applications and APIs
            </p>
          </AnimatedSection>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {categories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <GlassCard className="p-8 rounded-2xl h-full">
                  <motion.div 
                    className={`w-full h-1 bg-gradient-to-r ${category.gradient} rounded-full mb-6`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  />
                  
                  <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3 justify-center">
                    {category.techs.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex}
                        className={`px-4 py-3 rounded-xl text-sm font-semibold glass-card-strong cursor-default`}
                        whileHover={{ 
                          scale: 1.1, 
                          boxShadow: "0 0 20px hsl(var(--primary) / 0.3)"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div 
                    className={`mt-6 w-12 h-12 mx-auto rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center opacity-0`}
                    whileHover={{ opacity: 1, scale: 1 }}
                    initial={{ scale: 0 }}
                  >
                    <div className="w-3 h-3 bg-background rounded-full"></div>
                  </motion.div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
          
          <AnimatedSection delay={0.3}>
            <GlassCard className="rounded-3xl p-12" hover={false}>
              <div className="text-center">
                <motion.div 
                  className="flex justify-center mb-6"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex space-x-3">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                </motion.div>
                <h3 className="text-3xl font-bold mb-6 gradient-text">
                  Certified & Continuously Learning
                </h3>
                <p className="text-muted-foreground text-xl leading-relaxed max-w-4xl mx-auto">
                  Completed Back-End Development diploma at Route Academy (2022-2023). 
                  I stay current with the latest Node.js technologies and best practices to deliver 
                  modern, efficient backend solutions that meet today's server-side development standards.
                </p>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
