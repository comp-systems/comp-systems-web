import FadeUp from "./FadeUp";

const problems = [
  {
    num: "01",
    title: "AI人材が確保できない",
    text: "AIが飛躍的に進化する一方で、推進・実装まで担える人材は不足している。",
  },
  {
    num: "02",
    title: "自社では手が付けられない",
    text: "社長も現場も本業で手一杯。AIを継続的に学び、業務に落とし込んでいく余白がない。",
  },
  {
    num: "03",
    title: "定着しない",
    text: "外部に任せたが、現場に根付かず終わった。ツールだけ入れても使われなかった。",
  },
];

export default function Problem() {
  return (
    <section className="py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeUp delay={0}>
          <p className="text-2xl font-medium tracking-widest text-white/50 uppercase mb-6">
            Problem
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-24">
            AI対応の遅れは経営リスク。
            <br />
            でも、社内に動ける人材がいない。
          </h2>
        </FadeUp>
        <FadeUp delay={0.3} margin="200px">
          <p className="text-3xl text-white font-light mb-8">こんな事象は起こっていませんか？</p>
        </FadeUp>
        <div className="grid sm:grid-cols-3 gap-px bg-white/20 rounded-2xl overflow-hidden">
          {problems.map((p, i) => (
            <FadeUp key={p.num} delay={0.4 + i * 0.12} margin="200px">
              <div className="bg-[#0a0a0a] p-10 h-full">
                <span className="block text-6xl font-semibold text-white/25 mb-6 leading-none">
                  {p.num}
                </span>
                <h3 className="text-3xl font-semibold mb-3">{p.title}</h3>
                <p className="text-2xl text-white/65 leading-relaxed font-light">
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
