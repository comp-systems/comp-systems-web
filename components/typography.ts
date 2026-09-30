// タイポグラフィの型（正本）
//
// サイト内のフォントサイズ・ウェイト・文字色は必ずここから参照する。
// 各コンポーネントで text-2xl 等を直接書かないこと（階層が崩れる原因になる）。
//
// 【ルール】文字は「見出し（h1/h2/h3）」と「本文（body）」の2種類だけ。
//   見出しでない文字は、導入文・説明文・フォームの項目名/選択肢/案内・会社概要の値なども含めて全部 body。
//   新しい型を足す・body以外を本文に使う場合は、必ず社長に確認する（2026-09-29 社長決定）。
//   例外：small はフッターのコピーライト専用。
//
// 階層（sm以上での実サイズ）:
//   h1 51px / h2 48px / h3 24px / body 18px
//
// 文字色は app/globals.css の配色トークン（--fg 系）を参照する。
// 黒地／白地の切り替えは .on-light を付けたブロック単位で効く。

export const text = {
  /** ヒーロー見出し（1ページに1つ）。72px → 51.2px（面積で約1/2） */
  h1: "text-[1.6rem] sm:text-[3.2rem] font-semibold tracking-tight leading-[1.15] text-[color:var(--fg)]",

  /** セクション見出し */
  h2: "text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.15] text-[color:var(--fg)]",

  /** 項目見出し（カード・リスト行） */
  h3: "text-xl sm:text-2xl font-semibold tracking-tight leading-snug text-[color:var(--fg)]",

  /** 本文（見出し以外の文字はすべてこれ） */
  body: "text-base sm:text-lg font-light leading-relaxed text-[color:var(--fg-muted)]",

  /** フッターのコピーライト専用（本文には使わない） */
  small: "text-sm font-light leading-relaxed text-[color:var(--fg-subtle)]",

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

  /** モバイルのポップアップメニュー：現在いるページ */
  navSheetActive: "text-2xl font-light tracking-tight text-white",

  /** モバイルのポップアップメニュー：それ以外 */
  navSheetInactive: "text-2xl font-light tracking-tight text-white/50",
} as const;
