import FadeUp from "./FadeUp";

const reasons = [
  {
    title: "外部AI人材として、経営に入り込む",
    desc: "社内にAI担当者がいなくても機能する。推進・設計・実装・定着まで、Comp Systemsが担う。社長は意思決定と事業拡大に集中できる。",
  },
  {
    title: "引き継ぎなし・一人が一気通貫",
    desc: "営業から伴走まで同じ人間が担う。「言ってたことと違う」が起きない。大手コンサルの構造的な弱点を、そもそも持っていない。",
  },
  {
    title: "業務実態に合わせたカスタマイズ",
    desc: "同じ業種・職種でも、AIの正解は会社によって全く違う。パッケージの枠なしで、その会社の現場に合った設計をする。",
  },
];

export default function WhyUs() {
  return (
    <section className="py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <p className="text-sm font-medium tracking-widest text-white/50 uppercase mb-6">
            Why Us
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-24">
            選ばれる理由。
          </h2>
        </FadeUp>
        <div className="grid sm:grid-cols-3 gap-12">
          {reasons.map((r, i) => (
            <FadeUp key={r.title} delay={i * 0.12}>
              <h3 className="text-lg font-semibold mb-4 leading-snug">{r.title}</h3>
              <p className="text-white/65 font-light leading-relaxed text-sm">
                {r.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
