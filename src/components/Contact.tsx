
import { Github, Briefcase, Contact as ContactIcon, Mail, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a line anytime",
      contact: "abanoubmamdou7@outlook.com",
      href: "mailto:abanoubmamdou7@outlook.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Let's connect professionally",
      contact: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/abanoubmamdouh/",
      gradient: "from-blue-600 to-blue-700"
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

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v30H30z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Ready to bring your MERN stack project to life? I'm Abanoub Mamdouh, and I'd love to discuss how my expertise 
              in full-stack development can help transform your ideas into scalable web applications.
            </p>
          </div>
          
          {/* Enhanced feature cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Available for Projects</h3>
              <p className="text-blue-100 text-center leading-relaxed">Full-stack development, APIs, and consulting opportunities</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <ContactIcon size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Quick Response</h3>
              <p className="text-blue-100 text-center leading-relaxed">Based in Egypt, Cairo - I typically respond within 24 hours</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Github size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Problem Solver</h3>
              <p className="text-blue-100 text-center leading-relaxed">Collaborative approach to solving complex challenges</p>
            </div>
          </div>

          {/* Contact methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 border border-white/10 hover:border-white/20"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon size={20} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{method.title}</h4>
                <p className="text-blue-200 text-sm mb-2">{method.description}</p>
                <p className="text-blue-300 font-medium">{method.contact}</p>
              </a>
            ))}
          </div>
          
          {/* Main CTA buttons */}
          <div className="text-center space-y-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://wa.me/201029009237" 
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 transition-all duration-300"
              >
                <ContactIcon className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={22} />
                Get In Touch
              </a>
              <a 
                href="https://github.com/abanoubmamdouhhanna" 
                className="group inline-flex items-center px-10 py-5 border-2 border-blue-400 hover:bg-blue-400 hover:text-slate-900 text-blue-300 font-semibold rounded-xl shadow-2xl hover:shadow-blue-400/25 transform hover:-translate-y-2 transition-all duration-300"
              >
                <Github className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={22} />
                View GitHub
              </a>
            </div>
            
            <div className="flex justify-center">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-200"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
