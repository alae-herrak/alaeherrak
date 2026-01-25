"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="bg-primary fixed top-0 right-0 left-0 z-[60] h-1 origin-left"
      style={{ scaleX }}
    />
  );
}

export function ScrollIcon() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="text-muted-foreground/50 animate-bounce"
    >
      <div className="border-muted-foreground/20 flex h-10 w-6 justify-center rounded-full border-2 p-1">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="bg-muted-foreground/40 h-2 w-1 rounded-full"
        />
      </div>
    </motion.div>
  );
}
