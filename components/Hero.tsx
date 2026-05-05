export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white opacity-[0.05] blur-3xl" />
      </div>

      <div className="fade-up max-w-4xl mx-auto">
        <p className="text-sm font-medium tracking-widest text-white/60 uppercase mb-8">
          AI活用支援コンサルティング
        </p>
        <h1 className="text-4xl sm:text-7xl font-semibold tracking-tight leading-[1.05] mb-8">
          AI前提の経営を。
        </h1>
        <p className="fade-up delay-1 text-xl sm:text-2xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto mb-12">
          今や全ての企業で必須ツールとなったAIだが、
          <br />
          その活用余地を見出し、実装し、
          <br />
          経営者を支えられる人材は圧倒的に不足している。
        </p>
        <div className="fade-up delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/masaya980819/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
          >
            無料相談を申し込む
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
