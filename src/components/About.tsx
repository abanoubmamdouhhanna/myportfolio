import { motion } from "framer-motion";
import AnimatedSection from "./animations/AnimatedSection";
import GlassCard from "./animations/GlassCard";

const About = () => {
  const highlights = [
    { number: "B.S.", label: "Computer Science", gradient: "from-blue-500 to-cyan-500" },
    { number: "2023", label: "Graduation Year", gradient: "from-purple-500 to-pink-500" },
    { number: "Node.js", label: "Backend Expert", gradient: "from-green-500 to-emerald-500" },
    { number: "15+", label: "Projects Built", gradient: "from-orange-500 to-red-500" }
  ];

  const skills = [
    { text: "Expert in RESTful APIs, integrating third-party services", delay: 0.1 },
    { text: "Backend development with Node.js and Express.js", delay: 0.2 },
    { text: "Database design and optimization with MongoDB & MySQL", delay: 0.3 },
    { text: "Server architecture and API security implementation", delay: 0.4 }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-mesh relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <AnimatedSection className="space-y-8" delay={0.2}>
              <div className="prose prose-lg">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I'm Abanoub Mamdouh, a passionate Node.js backend developer with a strong foundation in JavaScript. 
                  I specialize in building efficient, scalable server-side applications and APIs using Node.js, Express.js, and MongoDB.
                </p>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  My expertise includes crafting RESTful APIs, integrating third-party services, database architecture, 
                  and server optimization. I am always striving to enhance my skills and enjoy solving complex backend challenges 
                  collaboratively with teams.
                </p>

                <GlassCard className="p-6 rounded-2xl border-l-4 border-primary">
                  <h4 className="font-semibold text-foreground mb-3">Education</h4>
                  <p className="text-muted-foreground">
                    <strong>Bachelor of Science - Computer Science</strong><br/>
                    Benha University Faculty of Science<br/>
                    Sep 2019 - Jun 2023
                  </p>
                </GlassCard>
              </div>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skill.delay }}
                  >
                    <motion.div 
                      className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mr-6"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="text-foreground text-lg group-hover:text-primary transition-colors duration-300">{skill.text}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="grid grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                  <GlassCard 
                    key={index}
                    className="text-center p-8 rounded-2xl"
                  >
                    <motion.div 
                      className={`text-4xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-3`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.number}
                    </motion.div>
                    <div className="text-muted-foreground font-medium text-lg">{item.label}</div>
                    <motion.div 
                      className={`w-full h-1 bg-gradient-to-r ${item.gradient} rounded-full mt-4`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    />
                  </GlassCard>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4}>
            <GlassCard className="rounded-3xl p-12" hover={false}>
              <div className="text-center">
                <motion.div 
                  className="flex justify-center mb-6"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="flex space-x-3">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                </motion.div>
                <h3 className="text-3xl font-bold mb-6 gradient-text">
                  Continuous Learning & Growth
                </h3>
                <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
                  I believe in staying current with the latest technologies and best practices. 
                  From completing my Back-End development diploma to working on diverse projects, 
                  I'm committed to delivering cutting-edge backend solutions that scale with business needs.
                </p>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
