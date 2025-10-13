import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

export const FadeInOnScroll: React.FC<FadeInProps> = ({ children, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // solo animar la primera vez
    threshold: 0.2,   // porcentaje visible para activar
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
