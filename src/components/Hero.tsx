import { Github, Briefcase, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="w-full h-full bg-repeat animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='currentColor' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v30H30z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-bounce opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary/70 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Profile Image */}
          <br />
          <br />

          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary via-primary/80 to-primary p-1 shadow-2xl transform hover:scale-110 transition-all duration-500 animate-fade-in">
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-r from-primary to-primary/80">
              <img
                src="/lovable-uploads/IMG_68101.JPG"
                alt="Abanoub Mamdouh"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-fade-in">
            Abanoub Mamdouh
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-foreground animate-fade-in">
            Node.js Backend Developer
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-fade-in animation-delay-300">
            Passionate Node.js backend developer with a strong foundation in
            JavaScript, specializing in building efficient, scalable server-side
            applications and APIs using Node.js, Express.js, and MongoDB.
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-500">
            Based in Egypt, Cairo • Always striving to enhance skills and enjoy
            solving problems collaboratively with teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in animation-delay-700">
            <a
              href="#projects"
              className="group inline-flex items-center px-10 py-5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-primary/25 transform hover:-translate-y-2 transition-all duration-300"
            >
              <Briefcase
                className="mr-3 group-hover:rotate-12 transition-transform duration-300"
                size={22}
              />
              View My Work
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center px-10 py-5 border-2 border-primary hover:bg-primary hover:text-primary-foreground text-primary font-semibold rounded-xl shadow-lg hover:shadow-primary/25 transform hover:-translate-y-2 transition-all duration-300"
            >
              <Github
                className="mr-3 group-hover:rotate-12 transition-transform duration-300"
                size={22}
              />
              Get In Touch
            </a>
          </div>
          <br />
          <br />
        </div>
      </div>
    </section>
  );
};

export default Hero;
