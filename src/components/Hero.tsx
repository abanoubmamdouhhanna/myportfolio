import { Github, Briefcase, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full bg-repeat animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v30H30z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Profile Image */}
          <br />
          <br />

          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 p-1 shadow-2xl transform hover:scale-110 transition-all duration-500 animate-fade-in">
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
              <img
                src="/lovable-uploads/2af46610-7eb5-4d7f-8719-5ba38ad97027.png"
                alt="Abanoub Mamdouh"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent animate-fade-in">
            Abanoub Mamdouh
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-blue-200 animate-fade-in">
            Node.js Backend Developer
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed animate-fade-in animation-delay-300">
            Passionate Node.js backend developer with a strong foundation in
            JavaScript, specializing in building efficient, scalable server-side
            applications and APIs using Node.js, Express.js, and MongoDB.
          </p>

          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto animate-fade-in animation-delay-500">
            Based in Egypt, Cairo • Always striving to enhance skills and enjoy
            solving problems collaboratively with teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in animation-delay-700">
            <a
              href="#projects"
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 transition-all duration-300"
            >
              <Briefcase
                className="mr-3 group-hover:rotate-12 transition-transform duration-300"
                size={22}
              />
              View My Work
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center px-10 py-5 border-2 border-blue-400 hover:bg-blue-400 hover:text-slate-900 text-blue-300 font-semibold rounded-xl shadow-2xl hover:shadow-blue-400/25 transform hover:-translate-y-2 transition-all duration-300"
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
