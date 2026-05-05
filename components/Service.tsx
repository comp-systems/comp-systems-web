import FadeUp from "./FadeUp";

const steps = [
  {
    label: "Discover",
    title: "現状の把握と\n優先領域の特定",
    desc: "業務ヒアリングをもとに、AIで最大の効果が出る領域を特定。何を自動化すべきか、何は人がやるべきかを整理する。",
  },
  {
    label: "Build",
    title: "設計・実装",
    desc: "ツール選定から実装まで一貫して担う。完璧を求めず、まず動く状態を作ることを優先し、速く改善サイクルを回す。",
  },
  {
    label: "Scale",
    title: "定着・自走化",
    desc: "現場担当者が自律的に使いこなせる状態にする。社長が事業拡大・意思決定に時間を集中できる体制を作る。",
  },
];

export default function Service() {
  return (
    <section id="service" className="py-40 px-6 bg-white/[0.04]">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <p className="text-sm font-medium tracking-widest text-white/50 uppercase mb-6">
            Service
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            活用余地の洗い出しから定着まで、
            <br />
            一気通貫で担う。
          </h2>
          <p className="text-lg text-white/60 font-light mb-24 max-w-xl">
            売っているのはAIではなく、経営ソリューション。
            <br />
            AIはあくまで手段。
          </p>
        </FadeUp>
        <div className="space-y-px">
          {steps.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.12}>
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
                  <h3 className="text-2xl font-semibold mb-4 whitespace-pre-line">
                    {s.title}
                  </h3>
                  <p className="text-white/65 font-light leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
