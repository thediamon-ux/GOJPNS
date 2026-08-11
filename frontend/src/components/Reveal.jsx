import { motion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];

export const Reveal = ({ children, delay = 0, className = "", y = 40 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, ease: EASE, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// Masked line-by-line reveal for headings. lines: array of ReactNode
export const MaskedLines = ({ lines, className = "", delay = 0, testid }) => (
  <span className={className} data-testid={testid}>
    {lines.map((line, i) => (
      <span key={i} className="block overflow-hidden">
        <motion.span
          className="block"
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1, ease: EASE, delay: delay + i * 0.12 }}
        >
          {line}
        </motion.span>
      </span>
    ))}
  </span>
);

export const Overline = ({ children, className = "" }) => (
  <span className={`inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold ${className}`}>
    <span className="h-px w-8 bg-gold/60" />
    {children}
  </span>
);
