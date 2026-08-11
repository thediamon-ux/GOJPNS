import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

export const Counter = ({ value, prefix = "", suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const spring = useSpring(0, { duration: 2200, bounce: 0 });
  const display = useTransform(spring, (v) =>
    Math.round(v).toLocaleString("en-US")
  );

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, value, spring]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
};
