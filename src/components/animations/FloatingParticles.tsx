import { motion } from "framer-motion";

const FloatingParticles = () => {
  const particles = [
    { x: "10%", y: "20%", size: 4, delay: 0, duration: 8 },
    { x: "20%", y: "80%", size: 6, delay: 1, duration: 10 },
    { x: "80%", y: "30%", size: 3, delay: 2, duration: 7 },
    { x: "70%", y: "70%", size: 5, delay: 0.5, duration: 9 },
    { x: "30%", y: "50%", size: 4, delay: 1.5, duration: 11 },
    { x: "90%", y: "60%", size: 3, delay: 2.5, duration: 8 },
    { x: "50%", y: "10%", size: 5, delay: 0.8, duration: 10 },
    { x: "15%", y: "40%", size: 4, delay: 1.2, duration: 9 },
    { x: "85%", y: "85%", size: 6, delay: 0.3, duration: 12 },
    { x: "40%", y: "90%", size: 3, delay: 2, duration: 7 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
