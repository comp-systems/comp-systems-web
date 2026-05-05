import FadeUp from "./FadeUp";

const reasons = [
  {
    title: "徹底的な伴走力",
    desc: "AI導入がゴールではなく、経営課題の解決・経営革新をゴールと捉える。",
  },
  {
    title: "完全オーダーメイド",
    desc: "同じ業種・職種でも、AIの正解は企業によって全く異なる。\nパッケージではなく、企業ごとに設計する。",
  },
];

export default function WhyUs() {
  return (
    <section className="py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeUp delay={0}>
          <p className="text-2xl font-medium tracking-widest text-white/50 uppercase mb-6">
            Why Us
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-24">
            選ばれる理由。
          </h2>
        </FadeUp>
        <div className="space-y-px">
          {reasons.map((r, i) => (
            <FadeUp key={r.title} delay={0.3 + i * 0.15}>
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 py-12 border-t border-white/20">
                <div className="flex-none w-24">
                  <span className="block text-4xl font-semibold text-white/20 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4">{r.title}</h3>
                  <p className="text-white/65 font-light leading-relaxed whitespace-pre-line">{r.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
