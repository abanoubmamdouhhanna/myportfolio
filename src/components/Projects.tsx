import { useState } from "react";
import { ArrowRight, Code, Layers, Database, Globe, Calendar, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./animations/AnimatedSection";
import GlassCard from "./animations/GlassCard";

interface Project {
  title: string;
  date: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
  gradient: string;
  icon: any;
  image: string | null;
  additionalImage?: string;
  anotherImage?: string;
  fourthImage?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Crunchy Fried Chicken Restaurant Platform",
      date: "Sep 2025 - Nov 2025",
      problem: "A growing fried chicken restaurant chain in North Carolina needed a comprehensive web platform to handle online ordering across multiple branches, manage operations for 28+ locations, and process secure payments via Stripe and PayPal.",
      solution: "Developed a full-stack Node.js platform featuring a customer-facing restaurant website with menu browsing and cart checkout, individual branch dashboards for order management, a master admin panel for monitoring all locations, and integrated Stripe & PayPal payment gateways with role-based authentication (Admin/Manager/Customer).",
      result: "Successfully launched a scalable multi-branch restaurant platform enabling seamless online ordering, real-time order tracking, secure payment processing, and comprehensive analytics across all locations with branch-specific management capabilities.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Stripe API", "PayPal SDK", "React.js", "Role-based Access"],
      gradient: "from-red-500 to-orange-500",
      icon: Globe,
      image: "/lovable-uploads/cfc-logo.png",
      additionalImage: "/lovable-uploads/cfc-menu.png",
      anotherImage: "/lovable-uploads/cfc-dashboard.png",
      fourthImage: "/lovable-uploads/cfc-orders-management.png"
    },
    {
      title: "Noorex Ecommerce App Backend",
      date: "Jul - Sep 2025",
      problem: "Noorex needed a comprehensive ecommerce backend solution to handle product management, user authentication, order processing, and inventory management for their online retail platform.",
      solution: "Developed using Node.js, Express.js, and MongoDB to create a scalable ecommerce backend with secure user authentication, efficient product catalog management, order processing workflows, and inventory tracking systems.",
      result: "Successfully delivered a robust ecommerce backend that enables seamless online shopping experiences with secure transactions, real-time inventory updates, and comprehensive order management capabilities.",
      tech: ["Node.js", "Express.js", "MongoDB", "RESTful API", "Authentication"],
      gradient: "from-indigo-500 to-purple-500",
      icon: Globe,
      image: "/lovable-uploads/a938314a-5817-4c7e-a0f7-14efbc9c8af5.png",
      additionalImage: "/lovable-uploads/8f84dfff-8b71-4d8f-ada8-a419bd53e149.png",
      anotherImage: "/lovable-uploads/clientsNoorex.png"
    },
    {
      title: "Powerline Gas API Backend",
      date: "Apr - Jun 2025",
      problem: "SAM Fuel Company in Saudi Arabia needed a comprehensive HR and operations management system to efficiently manage 28+ fuel stations and their multilingual workforce (English, Arabic, Bengali speakers).",
      solution: "Developed a Node.js backend API with complete multilingual support, featuring employee management, attendance tracking, automated document expiry monitoring with cron jobs, salary management, and role-based access for admins and station managers.",
      result: "Successfully delivered a scalable HR management system that reduces manual workloads, ensures compliance, and improves operational transparency while supporting SAM Fuel Company's diverse multilingual workforce across all stations.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Cron Jobs", "Multilingual API"],
      gradient: "from-green-500 to-teal-500",
      icon: Database,
      image: "/lovable-uploads/PowerLineGas.png",
      additionalImage: "/lovable-uploads/58a853b6-e5fa-4bd4-af5b-90bbee150347.png",
      anotherImage: "/lovable-uploads/2c60e4e3-6cb5-4c48-8f4d-9f368898f012.png"
    },
    {
      title: "Herfa App Backend API",
      date: "Mar - Apr 2025",
      problem: "Herfa App needed a robust backend to connect users with service providers while enabling real-time communication, secure authentication, and seamless file management across different user roles.",
      solution: "Built a comprehensive Node.js backend API with RESTful endpoints for user registration, JWT authentication, role-based access control, and real-time messaging using Socket.io. Integrated Cloudinary for file uploads and designed scalable architecture for service listings and requests.",
      result: "Created a fully functional service platform backend that enables users to find trusted service providers with real-time notifications, secure authentication, and efficient communication channels, ready to scale with growing user activity.",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Socket.io", "Cloudinary"],
      gradient: "from-purple-500 to-pink-500",
      icon: Layers,
      image: "/lovable-uploads/645b23e3-7d10-414d-9599-9df112497d8f.png",
      additionalImage: "/lovable-uploads/3cbe8958-9b1f-4abb-aa7d-a9a37c782421.png"
    },
    {
      title: "RiedBerg Residential App Backend",
      date: "Feb 2025",
      problem: "A residential compound needed a comprehensive management system for admin, worker, and user interfaces with social networking and maintenance reporting.",
      solution: "Created a backend for a residential management app with admin, worker, and user interfaces, integrating social networking and maintenance reporting capabilities.",
      result: "Built a scalable and efficient residential management system that streamlines compound operations and enhances resident communication.",
      tech: ["Node.js", "Express.js", "MongoDB", "Multi-role System", "Social Features"],
      gradient: "from-orange-500 to-red-500",
      icon: Code,
      image: null
    },
    {
      title: "Chat App Backend API",
      date: "Jan 2025",
      problem: "Needed to build a WhatsApp-like real-time messaging system that could handle single chats, group chats, and channels with file sharing capabilities and instant notifications.",
      solution: "Built using Node.js and Socket.io for real-time messaging with MongoDB for scalable data storage. Implemented secure JWT authentication, file upload with Multer, and efficient Socket.io rooms for group management.",
      result: "Created a comprehensive real-time messaging backend with single chat, group chat, and channel features, supporting file sharing, message editing/deletion, and instant notifications with read receipts.",
      tech: ["Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Multer"],
      gradient: "from-green-500 to-emerald-500",
      icon: MessageSquare,
      image: null
    },
    {
      title: "Ecommerce App - Backend API",
      date: "2023",
      problem: "Built a scalable backend for an eCommerce platform that needed to handle user authentication, product management, and order processing with robust security measures.",
      solution: "Developed using Node.js, Express.js, and MongoDB with comprehensive features including user authentication, product management, and order processing systems.",
      result: "Successfully created a fully functional eCommerce backend with secure authentication, efficient product catalog management, and streamlined order processing.",
      tech: ["Node.js", "Express.js", "MongoDB", "RESTful API", "Authentication"],
      gradient: "from-blue-500 to-cyan-500",
      icon: Globe,
      image: null
    }
  ];

  const PROJECTS_PER_PAGE = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  
  const currentProjects = projects.slice(
    currentPage * PROJECTS_PER_PAGE,
    (currentPage + 1) * PROJECTS_PER_PAGE
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-20 bg-gradient-mesh relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-20">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Code className="text-primary" size={16} />
              <span className="text-muted-foreground font-medium text-sm">Portfolio</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade backend solutions built with Node.js and related technologies, 
              focusing on scalability, security, and performance.
            </p>
          </AnimatedSection>
          
          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {currentProjects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard className="rounded-2xl overflow-hidden" hover={false}>
                  {/* Gradient accent */}
                  <div className={`h-1 bg-gradient-to-r ${project.gradient}`}></div>
                  
                  <div className="p-8 md:p-12">
                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                      {/* Project Image */}
                      {project.image && (
                        <div className="lg:col-span-4 space-y-4">
                          <Dialog>
                            <DialogTrigger asChild>
                              <motion.div 
                                className="relative aspect-square rounded-xl overflow-hidden glass-card cursor-pointer"
                                whileHover={{ scale: 1.02 }}
                              >
                                <img 
                                  src={project.image} 
                                  alt={`${project.title} logo`}
                                  className="w-full h-full object-cover"
                                />
                              </motion.div>
                            </DialogTrigger>
                            <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-0">
                              <img 
                                src={project.image} 
                                alt={`${project.title} logo`}
                                className="w-full h-auto rounded-lg"
                              />
                            </DialogContent>
                          </Dialog>

                          {project.additionalImage && (
                            <Dialog>
                              <DialogTrigger asChild>
                                <motion.div 
                                  className="relative aspect-video rounded-xl overflow-hidden glass-card cursor-pointer"
                                  whileHover={{ scale: 1.02 }}
                                >
                                  <img 
                                    src={project.additionalImage} 
                                    alt={`${project.title} interface`}
                                    className="w-full h-full object-cover"
                                  />
                                </motion.div>
                              </DialogTrigger>
                              <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-0">
                                <img 
                                  src={project.additionalImage} 
                                  alt={`${project.title} interface`}
                                  className="w-full h-auto rounded-lg"
                                />
                              </DialogContent>
                            </Dialog>
                          )}

                          {project.anotherImage && (
                            <Dialog>
                              <DialogTrigger asChild>
                                <motion.div 
                                  className="relative aspect-video rounded-xl overflow-hidden glass-card cursor-pointer"
                                  whileHover={{ scale: 1.02 }}
                                >
                                  <img 
                                    src={project.anotherImage} 
                                    alt={`${project.title} interface`}
                                    className="w-full h-full object-cover"
                                  />
                                </motion.div>
                              </DialogTrigger>
                              <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-0">
                                <img 
                                  src={project.anotherImage} 
                                  alt={`${project.title} interface`}
                                  className="w-full h-auto rounded-lg"
                                />
                              </DialogContent>
                            </Dialog>
                          )}

                          {project.fourthImage && (
                            <Dialog>
                              <DialogTrigger asChild>
                                <motion.div 
                                  className="relative aspect-video rounded-xl overflow-hidden glass-card cursor-pointer"
                                  whileHover={{ scale: 1.02 }}
                                >
                                  <img 
                                    src={project.fourthImage} 
                                    alt={`${project.title} orders management`}
                                    className="w-full h-full object-cover"
                                  />
                                </motion.div>
                              </DialogTrigger>
                              <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-0">
                                <img 
                                  src={project.fourthImage} 
                                  alt={`${project.title} orders management`}
                                  className="w-full h-auto rounded-lg"
                                />
                              </DialogContent>
                            </Dialog>
                          )}
                        </div>
                      )}
                      
                      {/* Project Content */}
                      <div className={project.image ? "lg:col-span-8" : "lg:col-span-12"}>
                        {/* Header */}
                        <div className="flex items-start justify-between mb-8">
                          <div className="flex items-start gap-4">
                            <motion.div 
                              className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}
                              whileHover={{ scale: 1.1, rotate: 12 }}
                              transition={{ duration: 0.3 }}
                            >
                              <project.icon className="text-white" size={20} />
                            </motion.div>
                            <div className="min-w-0">
                              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                                {project.title}
                              </h3>
                              <div className="flex items-center gap-2">
                                <Calendar className="text-muted-foreground" size={14} />
                                <span className="text-muted-foreground font-medium text-sm glass-card px-3 py-1 rounded-full">
                                  {project.date}
                                </span>
                              </div>
                            </div>
                          </div>
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="text-muted-foreground" size={20} />
                          </motion.div>
                        </div>
                        
                        {/* Content Sections */}
                        <div className="space-y-6">
                          {/* Challenge */}
                          <div className="group/section">
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                              <h4 className="font-semibold text-red-500 text-sm uppercase tracking-wide">Challenge</h4>
                            </div>
                            <p className="text-muted-foreground leading-relaxed pl-5 border-l-2 border-red-500/30 glass-card p-4 rounded-r-lg">
                              {project.problem}
                            </p>
                          </div>
                          
                          {/* Solution */}
                          <div className="group/section">
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <h4 className="font-semibold text-blue-500 text-sm uppercase tracking-wide">Solution</h4>
                            </div>
                            <p className="text-muted-foreground leading-relaxed pl-5 border-l-2 border-blue-500/30 glass-card p-4 rounded-r-lg">
                              {project.solution}
                            </p>
                          </div>
                          
                          {/* Result */}
                          <div className="group/section">
                            <div className="flex items-start gap-3 mb-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <h4 className="font-semibold text-green-500 text-sm uppercase tracking-wide">Result</h4>
                            </div>
                            <p className="text-muted-foreground leading-relaxed pl-5 border-l-2 border-green-500/30 glass-card p-4 rounded-r-lg">
                              {project.result}
                            </p>
                          </div>
                        </div>
                        
                        {/* Technologies */}
                        <div className="mt-8">
                          <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                            <Code className="text-muted-foreground" size={14} />
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <motion.span 
                                key={techIndex}
                                className="px-3 py-1 glass-card-strong text-foreground text-sm rounded-lg font-medium"
                                whileHover={{ scale: 1.05 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <motion.button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 0}
              className="p-3 glass-card rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted/50 transition-colors"
              whileHover={{ scale: currentPage === 0 ? 1 : 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-10 h-10 rounded-full font-medium transition-all ${
                    currentPage === index
                      ? "bg-primary text-primary-foreground"
                      : "glass-card hover:bg-muted/50"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {index + 1}
                </motion.button>
              ))}
            </div>
            
            <motion.button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
              className="p-3 glass-card rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted/50 transition-colors"
              whileHover={{ scale: currentPage === totalPages - 1 ? 1 : 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Call to Action */}
          <AnimatedSection delay={0.5} className="mt-20">
            <GlassCard className="rounded-2xl p-8 md:p-12 text-center" hover={false}>
              <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
                Ready to Build Your Next Project?
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                Let's collaborate to create scalable, secure, and high-performance backend solutions 
                tailored to your business needs.
              </p>
              <motion.a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl glow-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowRight className="mr-2" size={18} />
                Start a Conversation
              </motion.a>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Projects;
