export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white opacity-[0.05] blur-3xl" />
      </div>

      <div className="fade-up max-w-4xl mx-auto">
<h1 className="text-4xl sm:text-7xl font-semibold tracking-tight leading-[1.05] mb-8">
          AI前提の経営を。
        </h1>
        <p className="fade-up delay-1 text-xl sm:text-2xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto mb-12">
          今や全ての企業で必須ツールとなったAIだが、
          <br />
          その活用余地を見出し、実装し、
          <br />
          経営者を支えられる人材は圧倒的に不足している。
          <br />
          <br />
          Comp Systemsは、単なるAIコンサルティングではない。
          <br />
          外部のAI人材として、AI活用余地の洗い出しから定着まで、
          <br />
          一気通貫で担うことで、経営革新を起こす。
        </p>
      </div>

    </section>
  );
}
