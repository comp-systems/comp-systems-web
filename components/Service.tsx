import { text } from "./typography";

// 内容の正本：営業資料/企画書.html の料金表（最上位プランの提供内容）。金額・回数は載せない
const items = [
  "AI活用に最適なPCの選び方レクチャー",
  "最適なAIツールの選定",
  "AIで効率化できる業務の棚卸し",
  "業務設計・実装",
  "オーダーメイドのツール開発",
];

export default function Service() {
  return (
    <section id="service" className="py-40 px-6 bg-[color:var(--surface-alt)]">
      <div className="max-w-5xl mx-auto">
        <h2 className={`${text.h2} mb-6`}>支援の流れ</h2>
        <p className={`${text.body} mb-12`}>企業様によって必要な内容をカスタマイズして提供いたします。</p>

        <div className="space-y-px">
          {items.map((item, i) => (
            <div key={item} className="flex gap-8 sm:gap-16 items-baseline py-8 border-t border-[color:var(--rule)]">
              <span className={`${text.num} flex-none w-24`}>{i + 1}</span>
              <h3 className={`${text.h3} flex-1`}>{item}</h3>
            </div>
          ))}
        </div>
        <p className={`${text.body} mt-8`}>
          ※以上の内容に加え、AIに関するご不明点、チャットでの相談は24時間受け付けております。
        </p>
      </div>
    </section>
  );
}
