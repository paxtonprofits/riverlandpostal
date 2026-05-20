import { useReducedMotion } from "motion/react";
import { motion } from "motion/react";
import type { ReactNode, CSSProperties, ElementType } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  style?: CSSProperties;
};

export function Reveal({ children, className = "", delay = 0, as: Tag = "div", style }: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: reduced ? 0 : 0.5, delay: delay / 1000, ease: "easeOut" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
