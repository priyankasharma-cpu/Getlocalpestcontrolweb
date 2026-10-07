import { motion, useReducedMotion } from "framer-motion";
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}) {
  const reduced = useReducedMotion();
  const Element = as === "article" ? motion.article : motion.div;
  return (
    <Element
      className={className}
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      {children}
    </Element>
  );
}
