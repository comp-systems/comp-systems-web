import { text } from "./typography";



// 募集職種（募集要項）
// 給与＝月給30万円〜（2026-08-20 社長確認済み）
// !! 勤務時間・待遇・休日の数値は未確認の下書きのまま。公開前に確認が必要 !!
const positions = [
  {
    role: "セールス / AI活用コンサルタント",
    type: "正社員",
    summary:
      "中小企業の経営者に伴走し、AI活用による経営革新を提案から定着まで担う。",
    detail: [
      { label: "雇用形態", value: "正社員" },
      { label: "勤務地", value: "大阪" },
      { label: "勤務時間", value: "9:00〜18:00" },
      { label: "勤務形態", value: "完全週休2日制（週40時間）" },
      { label: "給与", value: "月給30万円〜（経験・能力を考慮のうえ決定）" },
      {
        label: "待遇・福利厚生",
        value: "社会保険完備／交通費支給／試用期間なし／副業・複業可",
      },
      { label: "休日・休暇", value: "完全週休2日制／年末年始 ほか" },
      { label: "応募資格", value: "法人営業の実務経験（必須）" },
    ],
  },
  {
    role: "学生インターン（長期）",
    type: "インターン",
    summary:
      "実際の案件に当事者として関わり、価値を生み対価を得る経験を積む。",
    detail: [
      { label: "雇用形態", value: "長期インターン" },
      { label: "勤務地", value: "大阪（一部リモート可）" },
      { label: "勤務時間", value: "応相談（週2日〜）" },
      { label: "報酬", value: "時給＋インセンティブ（成果に応じて支給）" },
      { label: "対象", value: "学年・文理不問／意欲重視" },
    ],
  },
];


export default function Careers() {
  return (
    <>
      {/* ヒーロー / メッセージ */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className={`${text.h2} mb-10`}>
            まだ生まれたばかりのComp Systemsを
            <br className="hidden sm:block" />
            共に創る仲間を募集しています！
          </h2>
          <p className={`${text.lead} max-w-3xl`}>
            創業期のベンチャー企業で、0から組織を作りながら、
            <br />
            営業力、AI活用力を身につけましょう！
          </p>
        </div>
      </section>

      {/* 募集職種・募集要項 */}
      <section className="py-40 px-6 bg-[color:var(--surface-alt)]">
        <div className="max-w-5xl mx-auto">
          <h2 className={`${text.h2} mb-20`}>
            募集職種。
          </h2>
          <div className="space-y-10">
            {positions.map((p) => (
              <div key={p.role} className="p-10 border border-[color:var(--rule)] rounded-2xl">
                <span className={`${text.eyebrow} inline-block mb-6 px-3 py-1 border border-[color:var(--rule)] rounded-full`}>
                  {p.type}
                </span>
                <h3 className={`${text.h3} mb-4`}>
                  {p.role}
                </h3>
                <p className={`${text.body} mb-10`}>
                  {p.summary}
                </p>
                <div className="border-t border-[color:var(--rule-soft)]">
                  {p.detail.map((d) => (
                    <div
                      key={d.label}
                      className="flex flex-col sm:flex-row gap-1 sm:gap-12 py-4 border-b border-[color:var(--rule-soft)]"
                    >
                      <span className={`${text.dtLabel} flex-none w-40`}>
                        {d.label}
                      </span>
                      <span className={`${text.dtValue} whitespace-pre-line`}>
                        {d.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* エントリー CTA */}
      <section className="py-40 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`${text.h2} mb-6`}>
            まずは話を聞いてみませんか。
          </h2>
          <p className={`${text.lead} mb-16`}>
            まずはカジュアル面談でご状況をお聞かせください！
            <br />
            <span className="text-[0.85em]">
              ※カジュアル面談での内容は選考には一切関係ございません。
            </span>
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfOdoEOG2LBmIA-sb5b42wP9rCRLFQx2o9DgDaR9f0qoQk4LA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className={`${text.cta} inline-flex items-center justify-center px-8 py-4 bg-[color:var(--invert-bg)] text-[color:var(--invert-fg)] rounded-full hover:opacity-85 transition-colors`}
          >
            応募フォームへ →
          </a>
        </div>
      </section>
    </>
  );
}
