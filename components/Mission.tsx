import { text } from "./typography";

// 文言の正本：.company/00_会社情報/01_MVV.md（MISSION）
export default function Mission() {
  return (
    <section id="mission" className="relative pt-16 pb-8 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className={`${text.h2} mb-6`}>Mission</h2>
        <p className={text.lead}>
          テクノロジーで余白を生み、創造力を最大化する。
        </p>
      </div>
    </section>
  );
}
