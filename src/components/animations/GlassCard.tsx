import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className = "", hover = true }: GlassCardProps) => {
  return (
    <motion.div
      className={`glass-card ${className}`}
      whileHover={hover ? { 
        y: -8, 
        scale: 1.02,
        boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.25)"
      } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
