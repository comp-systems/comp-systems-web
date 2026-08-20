// タイポグラフィの型（正本）
//
// サイト内のフォントサイズ・ウェイト・文字色は必ずここから参照する。
// 各コンポーネントで text-2xl 等を直接書かないこと（階層が崩れる原因になる）。
//
// 階層（sm以上での実サイズ）:
//   h1 51px / h2 48px / h3 24px / lead 24px / body 18px / eyebrow 12px
//   → h2:h3 = 2.0倍、h3:body = 1.33倍を保つ
//
// 文字色は app/globals.css の配色トークン（--fg 系）を参照する。
// 黒地／白地の切り替えは .on-light を付けたブロック単位で効く。

export const text = {
  /** セクションラベル */
  eyebrow:
    "text-xs font-medium tracking-[0.25em] uppercase text-[color:var(--fg-subtle)]",

  /** ヒーロー見出し（1ページに1つ）。72px → 51.2px（面積で約1/2） */
  h1: "text-[1.6rem] sm:text-[3.2rem] font-semibold tracking-tight leading-[1.15] text-[color:var(--fg)]",

  /** セクション見出し */
  h2: "text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.15] text-[color:var(--fg)]",

  /** 項目見出し（カード・リスト行） */
  h3: "text-xl sm:text-2xl font-semibold tracking-tight leading-snug text-[color:var(--fg)]",

  /** 導入文（見出し直下の一文） */
  lead: "text-lg sm:text-2xl font-light leading-relaxed text-[color:var(--fg-muted)]",

  /** 本文 */
  body: "text-base sm:text-lg font-light leading-relaxed text-[color:var(--fg-muted)]",

  /** 2カラム等、幅の狭い枠に入れる本文（折り返させたくない一文向け） */
  bodyNarrow: "text-base font-light leading-relaxed text-[color:var(--fg-muted)]",

  /** 補足・注釈 */
  small: "text-sm font-light leading-relaxed text-[color:var(--fg-subtle)]",

  /** 定義リストの項目名（会社概要・募集要項） */
  dtLabel: "text-sm font-light text-[color:var(--fg-subtle)]",

  /** 定義リストの値 */
  dtValue: "text-base leading-relaxed text-[color:var(--fg)]",

  /** 連番の装飾数字（01 / 02 / 03） */
  num: "text-4xl font-semibold leading-none tabular-nums text-[color:var(--fg-faint)]",

  /** CTAボタンのラベル */
  cta: "text-base font-semibold",

  /** 追従CTA・小さめのボタン */
  ctaSmall: "text-sm font-semibold",

  /** グローバルナビ：現在いるページ */
  navActive: "text-sm text-white transition-colors",

  /** グローバルナビ：それ以外 */
  navInactive: "text-sm text-white/50 hover:text-white/85 transition-colors",
} as const;
