import { text } from "./typography";

// 事業案内「AIについて」。本文は社長の原文そのまま（改行位置も原文どおり）。書き換え禁止
export default function AboutAI() {
  return (
    <section id="about-ai" className="py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className={`${text.h2} mb-12`}>AIについて</h2>
        <div className={`${text.body} space-y-6`}>
          <p>
            AIは便利である反面、苦手なことはとことん苦手です。
            <br />
            例えば、「要約」や「情報のまとめ」
            <br />
            これらはAIに任せるにはとっかかりやすくはありますが、
            <br />
            実はAIが苦手としている内容です。
          </p>
          <p>
            情報の取捨選択というのは、人間の膨大な経験値をもとに、
            <br />
            何がどういう背景で大事なのか、全容を理解していないとできない”高付加価値”な仕事です。
          </p>
          <p>こういった”AIの苦手なこと”を理解していなければ、AIを使いこなすことはできません。</p>
          <p>貴社の業務に合わせて、貴社とAIの付き合い方をComp Systemsがご提案します。</p>
        </div>
      </div>
    </section>
  );
}
