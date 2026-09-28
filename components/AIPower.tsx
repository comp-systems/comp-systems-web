import { text } from "./typography";

// 文言の正本：営業資料/企画書.html「東大首席を超える頭脳が、毎日進化し続けている」

export default function AIPower() {
  return (
    <section id="ai-power" className="py-40 px-6 bg-[color:var(--surface-alt)]">
      <div className="max-w-5xl mx-auto">
        <h2 className={`${text.h2} mb-8`}>
          東大首席を超える頭脳が、
          <br />
          毎日進化し続けている
        </h2>
        <p className={`${text.lead} max-w-4xl`}>
          2026年、AIは東大理三の入試で首席合格点を叩き出した。
          <br />
          AIは毎日アップデートされ、昨日の正解が、今日には陳腐化する。
        </p>
      </div>
    </section>
  );
}
