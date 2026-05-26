"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 250], [0, 1]);
  const y = useTransform(scrollY, [0, 250], [40, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center text-center px-6 pt-[35vh]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white opacity-[0.05] blur-3xl" />
      </div>

      <h1 className="text-4xl sm:text-7xl font-semibold tracking-tight leading-[1.05]">
        AI前提の経営を。
      </h1>
      <motion.p
        style={{ opacity, y }}
        className="mt-12 text-xl sm:text-4xl text-white/70 font-light leading-relaxed max-w-6xl mx-auto"
      >
        今や全ての企業で必須ツールとなったAIだが、
        <br className="hidden sm:inline" />
        活用できる人材は不足している。
        <br className="hidden sm:inline" />
        <br className="hidden sm:inline" />
        <br className="sm:hidden" />
        <br className="sm:hidden" />
        Comp Systemsは、単なるAIコンサルティングではない。
        <br className="hidden sm:inline" />
        外部のAI人材として、AI活用余地の洗い出しから定着まで、
        <br className="hidden sm:inline" />
        一気通貫で担うことで、経営革新を起こす。
      </motion.p>
    </section>
  );
}
