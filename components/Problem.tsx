import FadeUp from "./FadeUp";

const problems = [
  {
    num: "01",
    title: "AI人材が確保できない",
    text: "AIを推進・実装まで担える人材は市場全体で不足している。採用しようにも、そもそも供給がない。",
  },
  {
    num: "02",
    title: "自社では手が付けられない",
    text: "社長も現場も本業で手一杯。AIを継続的に学び、業務に落とし込んでいく余白がない。",
  },
  {
    num: "03",
    title: "頼んでも定着しない",
    text: "外部に任せたが、現場に根付かず形だけで終わった。ツールだけ入れても、使われなければ意味がない。",
  },
];

export default function Problem() {
  return (
    <section className="py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <p className="text-sm font-medium tracking-widest text-white/50 uppercase mb-6">
            Problem
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-24">
            AIは経営課題になった。
            <br />
            でも、動ける人材がいない。
          </h2>
        </FadeUp>
        <div className="grid sm:grid-cols-3 gap-px bg-white/20 rounded-2xl overflow-hidden">
          {problems.map((p, i) => (
            <FadeUp key={p.num} delay={i * 0.12}>
              <div className="bg-[#0a0a0a] p-10 h-full">
                <span className="block text-6xl font-semibold text-white/25 mb-6 leading-none">
                  {p.num}
                </span>
                <h3 className="text-base font-semibold mb-3">{p.title}</h3>
                <p className="text-sm text-white/65 leading-relaxed font-light">
                  {p.text}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
