import FadeUp from "./FadeUp";

export default function Contact() {
  return (
    <section id="contact" className="py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeUp delay={0}>
          <p className="text-2xl font-medium tracking-widest text-white/50 uppercase mb-6">
            Contact
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            まずはお気軽にご相談ください。
          </h2>
        </FadeUp>
        <FadeUp delay={0.3} margin="200px">
          <p className="text-2xl text-white/65 font-light mb-16 leading-relaxed">
            無料でAI活用余地を検証します。
          </p>
        </FadeUp>
        <FadeUp delay={0.45} margin="200px">
          <a
            href="https://calendly.com/masaya-compsystems/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-black text-2xl font-semibold rounded-full hover:bg-white/90 transition-colors"
          >
            無料相談を申し込む →
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
