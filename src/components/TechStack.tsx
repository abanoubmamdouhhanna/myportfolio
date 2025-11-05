
const TechStack = () => {
  const categories = [
    {
      title: "Core Technologies",
      color: "bg-green-100 text-green-800 border-green-200",
      gradient: "from-green-500 to-emerald-500",
      techs: ["Node.js", "Express.js", "JavaScript", "TypeScript", "RESTful APIs", "GraphQL"]
    },
    {
      title: "Databases",
      color: "bg-purple-100 text-purple-800 border-purple-200",
      gradient: "from-purple-500 to-violet-500",
      techs: ["MongoDB", "MySQL", "PostgreSQL", "Mongoose", "SQL", "Database Design"]
    },
    {
      title: "Real-time & Communication",
      color: "bg-blue-100 text-blue-800 border-blue-200",
      gradient: "from-blue-500 to-cyan-500",
      techs: ["Socket.io", "WebRTC", "WebSockets", "Real-time Messaging", "Event-driven Architecture"]
    },
    {
      title: "Authentication & Security",
      color: "bg-red-100 text-red-800 border-red-200",
      gradient: "from-red-500 to-rose-500",
      techs: ["JWT", "OAuth", "Bcrypt", "CORS", "Rate Limiting", "Input Validation"]
    },
    {
      title: "Cloud & DevOps",
      color: "bg-orange-100 text-orange-800 border-orange-200",
      gradient: "from-orange-500 to-amber-500",
      techs: ["Docker", "AWS", "Heroku", "PM2", "Load Balancing", "CI/CD"]
    },
    {
      title: "Development Tools",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
      gradient: "from-yellow-500 to-orange-500",
      techs: ["Git/GitHub", "Postman", "npm/yarn", "ESLint", "Jest", "Nodemon"]
    }
  ];

  return (
    <section id="tech-stack" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Tech Stack & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Comprehensive toolkit for building modern, scalable Node.js backend applications and APIs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-border hover:border-primary/50"
              >
                {/* Category header with gradient line */}
                <div className={`w-full h-1 bg-gradient-to-r ${category.gradient} rounded-full mb-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                
                <h3 className="text-2xl font-bold text-foreground mb-8 text-center group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.techs.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-4 py-3 rounded-xl text-sm font-semibold border ${category.color} hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover indicator */}
                <div className={`mt-6 w-12 h-12 mx-auto rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500`}>
                  <div className="w-3 h-3 bg-white dark:bg-background rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-muted/20 via-primary/5 to-muted/20 rounded-3xl p-12 shadow-xl border border-primary/20">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-3">
                  <div className="w-4 h-4 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-4 h-4 bg-primary/70 rounded-full animate-bounce animation-delay-200"></div>
                  <div className="w-4 h-4 bg-primary rounded-full animate-bounce animation-delay-400"></div>
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Certified & Continuously Learning
              </h3>
              <p className="text-muted-foreground text-xl leading-relaxed max-w-4xl mx-auto">
                Completed Back-End Development diploma at Route Academy (2022-2023). 
                I stay current with the latest Node.js technologies and best practices to deliver 
                modern, efficient backend solutions that meet today's server-side development standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
