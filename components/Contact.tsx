import FadeUp from "./FadeUp";

export default function Contact() {
  return (
    <section id="contact" className="py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeUp>
          <p className="text-sm font-medium tracking-widest text-white/50 uppercase mb-6">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            まずはお気軽にご相談ください。
          </h2>
          <p className="text-lg text-white/65 font-light mb-16 leading-relaxed">
            AI活用に関するご相談は無料です。
            <br />
            現状をお聞きして、何ができるかをお伝えします。
          </p>
          <a
            href="https://calendly.com/masaya980819/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
          >
            無料相談を申し込む →
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
