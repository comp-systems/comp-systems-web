"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useRef, ReactNode } from "react";

export default function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);
  const scrollDir = useRef<"down" | "up">("down");
  const { scrollY } = useScroll();
  const prevY = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    scrollDir.current = y > prevY.current ? "down" : "up";
    prevY.current = y;
  });

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 70, scale: 0.97 }}
      animate={visible
        ? { opacity: 1, y: 0, scale: 1 }
        : { opacity: 0, y: 70, scale: 0.97 }
      }
      transition={
        visible && scrollDir.current === "down"
          ? { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }
          : { duration: 0 }
      }
      onViewportEnter={() => setVisible(true)}
      onViewportLeave={() => setVisible(false)}
      viewport={{ margin: "150px" }}
    >
      {children}
    </motion.div>
  );
}
