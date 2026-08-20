import { text } from "./typography";

const info = [
  { label: "商号", value: "Comp Systems株式会社" },
  { label: "代表者", value: "代表取締役　尾﨑 将也（Masaya Ozaki）" },
  { label: "所在地", value: "〒530-0001 大阪府大阪市北区梅田1丁目1番3号 大阪駅前第3ビル11階2号室" },
  { label: "設立", value: "2026年" },
  { label: "事業内容", value: "AI活用支援・代行" },
  { label: "対応エリア", value: "全国（オンライン）" },
  { label: "お問い合わせ", value: "info@compsystems.net" },
];

const career = [
  {
    title: "学生時代",
    paragraphs: [
      "広島大学体育会ラクロス部で主将を務め、中四国代表にも選出。\nチームスポーツの楽しさや組織運営の難しさを学ぶ。",
      "インターン経験から営業職に興味を持ち、理系院生ながら文系就活。\n120社にエントリーし、大手含む内定多数。",
      "BtoB × 高単価無形商材 × 完全新規の\n最も難易度が高い営業ができると感じた会社に就職。",
    ],
  },
  {
    title: "会社員時代",
    paragraphs: [
      "最も厳しい環境で力をつけるべく、仕事に没頭。\n業務と研鑽で、平日は1日16時間以上PCに向かい続ける。",
      "数多くの挫折を経験しながら、同期上位10％の成績を残す。\n中堅・中小企業に深く入り込み、経営課題を解決。",
    ],
  },
  {
    title: "Comp Systems 創業",
    paragraphs: [
      "会社員として与えられた仕組みの中で、\n顧客に全力で寄り添うことに限界を感じ、\n自身の時間を顧客貢献に最大限使うために独立。",
    ],
  },
];

export default function Company() {
  return (
    <section id="company" className="py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className={`${text.h2} mb-20`}>会社概要</h2>

        {/* 会社情報テーブル */}
        <div className="max-w-4xl mb-32">
          {info.map((item) => (
            <div
              key={item.label}
              className="flex flex-col sm:flex-row gap-2 sm:gap-12 py-3 border-t border-[color:var(--rule)]"
            >
              <span className={`${text.dtLabel} flex-none w-32`}>{item.label}</span>
              <span className={text.dtValue}>{item.value}</span>
            </div>
          ))}
        </div>

        {/* 代表プロフィール */}
        <h2 className={`${text.h2} mb-16`}>代表プロフィール</h2>
        <div className="max-w-4xl">
          <div className="mb-10">
            <p className={`${text.h3} mb-1`}>尾﨑 将也</p>
            <p className={text.small}>代表取締役 / Comp Systems株式会社</p>
          </div>
          <div>
            <p className={`${text.eyebrow} mb-4`}>保有資格</p>
            <div className="flex items-start gap-4 mb-8 p-4 border border-[color:var(--rule-soft)] rounded-xl w-fit">
              <img
                src="/g-cert.svg"
                alt="JDLA Deep Learning for GENERAL"
                className="h-28 w-auto flex-none"
              />
              <div>
                <p className={`${text.dtValue} font-semibold leading-snug`}>
                  JDLA Deep Learning for GENERAL 2026 #3
                </p>
                <p className={`${text.small} mt-2`}>
                  一般社団法人 日本ディープラーニング協会（JDLA）認定のAI資格。<br />
                  AIの基礎理論から倫理・法規制・ビジネス活用まで、<br />
                  体系的な知識を保有することを証明する。
                </p>
              </div>
            </div>
            <div className="space-y-10">
              {career.map((c) => (
                <div key={c.title} className="relative pl-6 border-l border-[color:var(--rule)]">
                  <h3 className={`${text.h3} mb-3`}>{c.title}</h3>
                  <div className={`${text.body} space-y-4`}>
                    {c.paragraphs.map((p) => (
                      <p key={p} className="whitespace-pre-line">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
