
const About = () => {
  const highlights = [
    { number: "B.S.", label: "Computer Science", color: "from-blue-500 to-blue-600" },
    { number: "2023", label: "Graduation Year", color: "from-purple-500 to-purple-600" },
    { number: "Node.js", label: "Backend Expert", color: "from-green-500 to-green-600" },
    { number: "15+", label: "Projects Built", color: "from-orange-500 to-orange-600" }
  ];

  const skills = [
    { text: "Expert in RESTful APIs, integrating third-party services", delay: "delay-100" },
    { text: "Backend development with Node.js and Express.js", delay: "delay-200" },
    { text: "Database design and optimization with MongoDB & MySQL", delay: "delay-300" },
    { text: "Server architecture and API security implementation", delay: "delay-400" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
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

                <div className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary">
                  <h4 className="font-semibold text-foreground mb-3">Education</h4>
                  <p className="text-muted-foreground">
                    <strong>Bachelor of Science - Computer Science</strong><br/>
                    Benha University Faculty of Science<br/>
                    Sep 2019 - Jun 2023
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className={`flex items-center group animate-fade-in ${skill.delay}`}>
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary/60 rounded-full mr-6 group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-foreground text-lg group-hover:text-primary transition-colors duration-300">{skill.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="group text-center p-8 bg-card rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-border hover:border-primary/50"
                >
                  <div className={`text-4xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {item.number}
                  </div>
                  <div className="text-muted-foreground font-medium text-lg">{item.label}</div>
                  <div className={`w-full h-1 bg-gradient-to-r ${item.color} rounded-full mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12 shadow-xl border border-primary/20">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Continuous Learning & Growth
              </h3>
              <p className="text-muted-foreground text-xl leading-relaxed max-w-3xl mx-auto">
                I believe in staying current with the latest technologies and best practices. 
                From completing my Back-End development diploma to working on diverse projects, 
                I'm committed to delivering cutting-edge backend solutions that scale with business needs.
              </p>
              <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-primary/70 rounded-full animate-bounce animation-delay-100"></div>
                  <div className="w-3 h-3 bg-primary rounded-full animate-bounce animation-delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
