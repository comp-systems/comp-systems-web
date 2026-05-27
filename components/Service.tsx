import FadeUp from "./FadeUp";

const steps = [
  {
    label: "Discover",
    title: "現状把握と優先領域の特定",
    desc: "業務ヒアリングをもとに、AIで最大の効果が出る領域を特定する。",
  },
  {
    label: "Build",
    title: "設計・実装",
    desc: "ツール選定から実装まで一貫して担う。",
  },
  {
    label: "Scale",
    title: "定着・自走化",
    desc: "使い続けられる状態になるまで伴走し仕組み化する。",
  },
];

export default function Service() {
  return (
    <section id="service" className="py-40 px-6 bg-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <FadeUp delay={0}>
          <p className="text-2xl font-medium tracking-widest text-white/50 uppercase mb-6">
            Service
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            活用余地の洗い出しから定着まで、
            <br />
            一気通貫で担う。
          </h2>
        </FadeUp>
        <div className="space-y-px mt-24">
          {steps.map((s, i) => (
            <FadeUp key={s.label} delay={0.3 + i * 0.15} margin="200px">
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 py-12 border-t border-white/20">
                <div className="flex-none w-24">
                  <span className="text-xs font-medium tracking-widest text-white/50 uppercase">
                    {s.label}
                  </span>
                  <span className="block text-4xl font-semibold text-white/20 mt-1 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-semibold mb-4 whitespace-pre-line">
                    {s.title}
                  </h3>
                  <p className="text-xl text-white/65 font-light leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
