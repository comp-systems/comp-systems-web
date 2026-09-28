import { text } from "./typography";

const problems = [
  {
    num: "1",
    title: "AI人材が確保できない",
    text: "AIが飛躍的に進化する一方で、推進・実装まで担える人材は不足している。",
  },
  {
    num: "2",
    title: "自社では手が付けられない",
    text: "社長も現場も本業で手一杯。AIを継続的に学び、業務に落とし込んでいく余白がない。",
  },
  {
    num: "3",
    title: "定着しない",
    text: "外部に任せたが、現場に根付かず終わった。ツールだけ入れても使われなかった。",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className={`${text.h2} mb-16`}>
          こんな課題はありませんか。
        </h2>
        <div className="grid sm:grid-cols-3 gap-px bg-[color:var(--rule)] rounded-2xl overflow-hidden">
          {problems.map((p) => (
            <div key={p.num} className="bg-[color:var(--surface)] p-10 h-full">
              <span className={`${text.num} block mb-6`}>{p.num}</span>
              <h3 className={`${text.h3} mb-3`}>{p.title}</h3>
              <p className={text.body}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
