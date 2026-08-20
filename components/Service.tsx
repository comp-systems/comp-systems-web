import { text } from "./typography";

// 内容の正本：.company/00_会社情報/04_AI活用支援事業.md
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
    desc: "使い続けられる状態になるまで伴走し、仕組み化する。",
  },
];

export default function Service() {
  return (
    <section id="service" className="py-40 px-6 bg-[color:var(--surface-alt)]">
      <div className="max-w-5xl mx-auto">
        <h2 className={`${text.h2} mb-12`}>支援の流れ</h2>

        <div className="space-y-px">
          {steps.map((s, i) => (
            <div key={s.label} className="flex flex-col sm:flex-row gap-8 sm:gap-16 py-12 border-t border-[color:var(--rule)]">
              <div className="flex-none w-24">
                <span className={text.eyebrow}>{s.label}</span>
                <span className={`${text.num} block mt-2`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex-1">
                <h3 className={`${text.h3} mb-4`}>{s.title}</h3>
                <p className={text.body}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
