"use client";
import { motion } from "framer-motion";

export default function FloatingCTA() {
  return (
    <motion.a
      href="https://calendly.com/masaya-compsystems/30min"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-8 right-8 z-50 inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full shadow-2xl hover:bg-white/90 transition-colors"
    >
      無料相談を申し込む
    </motion.a>
  );
}
