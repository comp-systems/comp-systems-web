import FadeUp from "./FadeUp";

// 求める人物像（VALUES に基づく）
const values = [
  {
    title: "お節介たれ",
    desc: "助言して放置する評論家ではなく、当事者として現場の内側に踏み込める人。",
  },
  {
    title: "費用対効果で考える",
    desc: "手段に溺れず、「投資に見合う成果が出たか」で語れる人。",
  },
  {
    title: "挑戦をやめない",
    desc: "自らを発展途上と認識し、計画より行動で示せる人。",
  },
  {
    title: "恩を還す",
    desc: "関わる人と環境へ、リスペクトを形にして向き合える人。",
  },
];

// 働く環境（アピール要素）
const benefits = [
  {
    title: "週休3日という選択",
    desc: "柔軟な休日設計で、生産性と暮らしの両立を前提にする。",
  },
  {
    title: "大阪・梅田が拠点",
    desc: "梅田の自宅兼オフィスを拠点に、少人数のチームで動く。",
  },
  {
    title: "副業・複業OK",
    desc: "外の経験が本業を強くする。挑戦を止めない働き方を歓迎する。",
  },
];

// 募集職種（職種ごとの募集要項）※数値は要確認の下書き
const positions = [
  {
    role: "セールス / AI活用コンサルタント",
    type: "正社員",
    summary:
      "中小企業の経営者に伴走し、AI活用による経営革新を提案から定着まで担う。",
    detail: [
      { label: "雇用形態", value: "正社員" },
      { label: "勤務地", value: "大阪・梅田（自宅兼オフィス）" },
      { label: "勤務時間", value: "9:00〜18:00" },
      {
        label: "勤務形態",
        value: "以下の2つから選択できます\n・週休3日制（週32時間）\n・週5日制（週40時間）",
      },
      { label: "給与", value: "月給45万円〜（経験・能力を考慮のうえ決定）" },
      {
        label: "待遇・福利厚生",
        value: "社会保険完備／交通費支給／試用期間なし／副業・複業可",
      },
      { label: "休日・休暇", value: "選択した勤務形態に準ずる／年末年始 ほか" },
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
      { label: "勤務地", value: "大阪・梅田（一部リモート可）" },
      { label: "勤務時間", value: "応相談（週2日〜）" },
      { label: "報酬", value: "時給＋インセンティブ（成果に応じて支給）" },
      { label: "対象", value: "学年・文理不問／意欲重視" },
    ],
  },
];

// 選考フロー
const flow = [
  { title: "エントリー", desc: "面談予約フォームからお気軽にご連絡ください。" },
  { title: "カジュアル面談", desc: "まずはお互いを知るための対話から。" },
  { title: "面接", desc: "価値観と役割のフィットを確認します。" },
  { title: "内定", desc: "条件をすり合わせ、入社時期を決定します。" },
];

export default function Careers() {
  return (
    <>
      {/* ヒーロー / メッセージ */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeUp delay={0}>
            <p className="text-2xl font-medium tracking-widest text-white/50 uppercase mb-6">
              Careers
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-10 leading-tight">
              テクノロジーで余白を生み、
              <br />
              創造性を最大化する。
            </h2>
          </FadeUp>
          <FadeUp delay={0.3} margin="200px">
            <p className="text-xl text-white/65 font-light leading-relaxed max-w-3xl">
              AIがインフラとなり、人が「経験」と「創造性」で差を生む世界へ。
              <br />
              その実現を共に目指す仲間を募集しています。
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 求める人物像 */}
      <section className="py-40 px-6 bg-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <FadeUp delay={0}>
            <p className="text-2xl font-medium tracking-widest text-white/50 uppercase mb-6">
              Values
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-24">
              求める人物像。
            </h2>
          </FadeUp>
          <div className="space-y-px">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={0.3 + i * 0.15} margin="200px">
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 py-12 border-t border-white/20">
                  <div className="flex-none w-24">
                    <span className="block text-4xl font-semibold text-white/20 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-semibold mb-4">{v.title}</h3>
                    <p className="text-xl text-white/65 font-light leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 働く環境 */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeUp delay={0}>
            <p className="text-2xl font-medium tracking-widest text-white/50 uppercase mb-6">
              Environment
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-24">
              働く環境。
            </h2>
          </FadeUp>
          <div className="grid sm:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <FadeUp key={b.title} delay={0.3 + i * 0.15} margin="200px">
                <div className="h-full p-8 border border-white/15 rounded-2xl">
                  <h3 className="text-2xl font-semibold mb-4 leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-lg text-white/65 font-light leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 募集職種・募集要項 */}
      <section className="py-40 px-6 bg-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <FadeUp delay={0}>
            <p className="text-2xl font-medium tracking-widest text-white/50 uppercase mb-6">
              Positions
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-24">
              募集職種。
            </h2>
          </FadeUp>
          <div className="space-y-10">
            {positions.map((p, i) => (
              <FadeUp key={p.role} delay={0.2 + i * 0.15} margin="200px">
                <div className="p-10 border border-white/15 rounded-2xl">
                  <span className="inline-block text-xs font-medium tracking-widest text-white/50 uppercase mb-6 px-3 py-1 border border-white/20 rounded-full">
                    {p.type}
                  </span>
                  <h3 className="text-3xl font-semibold mb-4 leading-snug">
                    {p.role}
                  </h3>
                  <p className="text-lg text-white/65 font-light leading-relaxed mb-10">
                    {p.summary}
                  </p>
                  <div className="border-t border-white/10">
                    {p.detail.map((d) => (
                      <div
                        key={d.label}
                        className="flex flex-col sm:flex-row gap-1 sm:gap-12 py-4 border-b border-white/10"
                      >
                        <span className="flex-none w-40 text-sm text-white/50 font-light">
                          {d.label}
                        </span>
                        <span className="text-base text-white/90 leading-relaxed whitespace-pre-line">
                          {d.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 選考フロー */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeUp delay={0}>
            <p className="text-2xl font-medium tracking-widest text-white/50 uppercase mb-6">
              Flow
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-24">
              選考フロー。
            </h2>
          </FadeUp>
          <div className="space-y-px">
            {flow.map((s, i) => (
              <FadeUp key={s.title} delay={0.3 + i * 0.15} margin="200px">
                <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 py-12 border-t border-white/20">
                  <div className="flex-none w-24">
                    <span className="text-xs font-medium tracking-widest text-white/50 uppercase">
                      Step
                    </span>
                    <span className="block text-4xl font-semibold text-white/20 mt-1 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-semibold mb-4">{s.title}</h3>
                    <p className="text-xl text-white/65 font-light leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* エントリー CTA */}
      <section className="py-40 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp delay={0}>
            <p className="text-2xl font-medium tracking-widest text-white/50 uppercase mb-6">
              Entry
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
              まずは話を聞いてみませんか。
            </h2>
          </FadeUp>
          <FadeUp delay={0.3} margin="200px">
            <p className="text-2xl text-white/65 font-light mb-16 leading-relaxed">
              カジュアル面談から歓迎しています。
            </p>
          </FadeUp>
          <FadeUp delay={0.45} margin="200px">
            <a
              href="https://calendly.com/masaya-compsystems/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-black text-2xl font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              エントリーする →
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
