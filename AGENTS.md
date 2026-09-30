<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Comp Systems HP ルール

HP（https://www.compsystems.net）を触るAIは、作業前に必ずこのファイルを守ること。CLAUDE.md は本ファイルを読み込むだけ（ルールは本ファイルに一本化）。ルールの追加・変更は社長の承認を得てから本ファイルに書く。

## 1. デザイン
- 基調は「ブラック基調・洗練・ミニマル」。
- **色**：正本は `app/globals.css` の配色変数。コンポーネントに色を直接書かない。
- **文字**：正本は `components/typography.ts`。文字は「見出し（h1/h2/h3）」と「本文（body）」の2種類だけ。見出しでない文字は全部 body（導入文・説明文・フォームの項目名/選択肢/案内・会社概要の値なども含む）。新しい型を足す・body 以外を本文に使う場合は社長に確認する。
- 例外：`/pitch` だけは型を使わず直書きで作られている（未整理）。

## 2. 社長が決めたこと
- 本文は全部 body に統一し、薄い文字は使わない（2026-09-29）。
- 社長が書いた文章は一字一句そのまま載せる。AIが要約・言い換えしない（例：事業案内「AIについて」）。
- 文言の出どころは各コンポーネント冒頭のコメントに書く（例：Hero＝`00_会社情報/01_MVV.md`、支援の流れ＝`営業資料/企画書.html`）。

## 3. お問い合わせフォームと Google フォーム
- HP のフォームの送信先は Google フォーム（詳細は `components/ContactForm.tsx` 冒頭）。
- 項目・選択肢の文言・必須を変えるときは **HP と Google フォームの両方**を直し、文言を完全に一致させる（ズレると送信が弾かれ、しかも HP 側は失敗に気づけない）。
- 直す順番：**「必須にする」「選択肢を消す」は HP を先に公開してから Google フォーム**。「必須を外す」「選択肢を足す」は Google フォームが先。
- テスト送信は本物の回答になるため、AIはしない（社長が行う）。

## 4. 作業の流れ
1. 手元の確認画面（`npm run dev` → http://localhost:3000）で直す
2. PC 幅とスマホ幅の両方で表示を確認し、社長に見せる
3. 社長の OK が出てから commit & push（push すると Vercel 経由で本番に自動反映される）
4. 本番（www.compsystems.net）に反映されたことを確認して報告する
