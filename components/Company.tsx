import { text } from "./typography";

const info = [
  { label: "商号", value: "Comp Systems株式会社" },
  { label: "代表者", value: "代表取締役　尾﨑 将也" },
  { label: "所在地", value: "〒530-0001 大阪府大阪市北区梅田1丁目1番3号 大阪駅前第3ビル11階2号室" },
  { label: "設立", value: "2026年8月" },
  { label: "事業内容", value: "AI活用支援・代行" },
  { label: "対応エリア", value: "全国（オンライン）" },
  { label: "お問い合わせ", value: "info@compsystems.net" },
];

export default function Company() {
  return (
    <section id="company" className="py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className={`${text.h2} mb-20`}>会社概要</h2>

        {/* 会社情報テーブル */}
        <div className="max-w-4xl">
          {info.map((item) => (
            <div
              key={item.label}
              className="flex flex-col sm:flex-row gap-2 sm:gap-12 py-3 border-t border-[color:var(--rule)]"
            >
              <span className={`${text.body} flex-none w-32`}>{item.label}</span>
              <span className={text.body}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
