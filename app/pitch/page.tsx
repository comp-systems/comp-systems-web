"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useRef, ReactNode } from "react";

function Slide({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`min-h-screen flex flex-col justify-center px-12 sm:px-24 py-20 ${className}`}
    >
      {children}
    </section>
  );
}

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);
  const scrollDir = useRef<"down" | "up">("down");
  const { scrollY } = useScroll();
  const prevY = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    scrollDir.current = y > prevY.current ? "down" : "up";
    prevY.current = y;
  });

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 60, scale: 0.97 }}
      animate={visible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.97 }}
      transition={
        visible && scrollDir.current === "down"
          ? { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }
          : { duration: 0 }
      }
      onViewportEnter={() => setVisible(true)}
      onViewportLeave={() => setVisible(false)}
      viewport={{ margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

const stats = [
  {
    source: "米テック企業",
    fact: "2026年第1四半期に約8万人を解雇",
    note: "Tom's HARDWARE / 2026.4.8",
  },
  {
    source: "GMO",
    fact: "AI活用率97.8% / 月53.9時間削減 / 約2,200人分の労働力創出",
    note: "PR TIMES / 2026.4.9",
  },
  {
    source: "みずほFG",
    fact: "事前準備50%削減 / 顧客との対話機会3倍",
    note: "FinTech Journal / 2026.4.3",
  },
];

const whyFail = [
  "目的が「今の業務の効率化」止まりになっているから",
  "一部の業務だけで断片的に使っているから",
  "一部の社員しか使っていないから",
  "業務の前提がAIになっていないから",
];

export default function Pitch() {
  return (
    <main className="bg-white text-black overflow-x-hidden font-sans">

      {/* 01 タイトル */}
      <Slide className="items-center text-center">
        <FadeUp delay={0}>
          <p className="text-lg font-medium tracking-widest text-black/40 uppercase mb-8">
            Comp Systems
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
            AIを活用した
            <br />
            経営革新のご提案
          </h1>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="text-2xl text-black/50 font-light">東大首席超えの頭脳を、貴社に。</p>
        </FadeUp>
      </Slide>

      {/* 02 Hook */}
      <Slide className="bg-black/[0.03]">
        <FadeUp delay={0}>
          <p className="text-2xl sm:text-3xl text-black/60 font-light leading-relaxed max-w-3xl mb-12">
            AIが代替できる仕事を理解した上で、
            <br />
            組織図を構築し、外注先を選定できていますか？
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <h2 className="text-6xl sm:text-8xl font-semibold tracking-tight">
            AI、
            <br />
            使っていますか？
          </h2>
        </FadeUp>
      </Slide>

      {/* 03 AIは労働力 */}
      <Slide>
        <FadeUp delay={0}>
          <p className="text-lg font-medium tracking-widest text-black/40 uppercase mb-6">Data</p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-16">
            AIはもはや"便利ツール"ではなく
            <br />
            <span className="text-black/40">"労働力"</span>だ。
          </h2>
        </FadeUp>
        <div className="space-y-px max-w-4xl">
          {stats.map((s, i) => (
            <FadeUp key={s.source} delay={0.3 + i * 0.15}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 py-8 border-t border-black/15">
                <span className="flex-none w-40 text-xl text-black/40 font-light">{s.source}</span>
                <div>
                  <p className="text-2xl font-medium mb-1">{s.fact}</p>
                  <p className="text-lg text-black/30">{s.note}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.8}>
          <p className="mt-12 text-2xl text-black/70 font-light">
            差は<span className="text-black font-medium">"使うか"</span>ではなく、<span className="text-black font-medium">"どこまで業務に組み込めるか"</span>
          </p>
        </FadeUp>
      </Slide>

      {/* 04 IQ150 */}
      <Slide className="bg-black/[0.03]">
        <FadeUp delay={0}>
          <p className="text-lg font-medium tracking-widest text-black/40 uppercase mb-6">Reality</p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-16">
            IQ150の頭脳が、
            <br />
            毎日進化し続けている。
          </h2>
        </FadeUp>
        <div className="space-y-6 max-w-3xl">
          {[
            "2026年4月現在、AIは「IQ148」— 人類上位0.07%、東大首席相当",
            "2030年には、AIが全人類の知能の総和を超える（シンギュラリティ）",
            "「1日単位」でアップデートされ、人間が学ぶスピードでは追いつけない",
            "昨日の正解が、今日には陳腐化する",
          ].map((text, i) => (
            <FadeUp key={i} delay={0.3 + i * 0.12}>
              <div className="flex gap-6 items-start py-4 border-t border-black/10">
                <span className="flex-none text-black/20 font-semibold text-2xl mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-2xl text-black/80 font-light leading-relaxed">{text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.85}>
          <p className="mt-12 text-xl text-black/50 font-light">
            求められるのは、過去の成功を捨てる勇気と、変わり続ける組織力
          </p>
        </FadeUp>
      </Slide>

      {/* 05 中小企業の現状 */}
      <Slide>
        <FadeUp delay={0}>
          <p className="text-lg font-medium tracking-widest text-black/40 uppercase mb-6">Gap</p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            中小企業は、
            <br />
            まだ"使いこなせていない"。
          </h2>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="text-2xl text-black/50 font-light mb-16">今ならまだ"追いつける"</p>
        </FadeUp>
        <div className="flex gap-16 items-end mb-12">
          <FadeUp delay={0.4}>
            <div>
              <p className="text-8xl font-semibold mb-2">90<span className="text-4xl">%</span></p>
              <p className="text-xl text-black/50">大企業のAI導入率</p>
            </div>
          </FadeUp>
          <FadeUp delay={0.55}>
            <div>
              <p className="text-8xl font-semibold text-black/25 mb-2">20<span className="text-4xl">%</span></p>
              <p className="text-xl text-black/50">中小企業のAI導入率</p>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={0.7}>
          <p className="text-2xl text-black/50 font-light">
            活用用途も「文章作成・検索」など、局所的な効率化が中心
            <br />
            <span className="text-black font-medium">→ 生産性に10倍以上の差が出る</span>
          </p>
        </FadeUp>
      </Slide>

      {/* 06 なぜ成果が出ないか */}
      <Slide className="bg-black/[0.03]">
        <FadeUp delay={0}>
          <p className="text-lg font-medium tracking-widest text-black/40 uppercase mb-6">Problem</p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-16">
            なぜAIを導入しても
            <br />
            成果が出ないのか。
          </h2>
        </FadeUp>
        <div className="space-y-2 max-w-3xl">
          {whyFail.map((text, i) => (
            <FadeUp key={i} delay={0.3 + i * 0.12}>
              <div className="flex gap-6 items-start py-5 border-t border-black/10">
                <span className="flex-none text-black/20 font-semibold text-xl">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-2xl text-black/80 font-light">{text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.85}>
          <p className="mt-10 text-black font-medium text-2xl">
            ツールを入れても、業務が変わらなければ何も変わらない
          </p>
        </FadeUp>
      </Slide>

      {/* 07 構造から変える */}
      <Slide className="items-center text-center">
        <FadeUp delay={0}>
          <h2 className="text-5xl sm:text-7xl font-semibold tracking-tight mb-10">
            問題は
            <br />
            "AIを入れるかどうか"
            <br />
            <span className="text-black/30">ではない。</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.25}>
          <p className="text-2xl text-black/60 font-light max-w-2xl leading-relaxed">
            重要なのは、AI前提で業務と組織を作り直すこと。
            <br />
            後でやるほど難しくなる。
            <br />
            だから今、<span className="text-black font-medium">"構造から変える"</span>しかない。
          </p>
        </FadeUp>
      </Slide>

      {/* 08 兼務では危険 */}
      <Slide className="bg-black/[0.03]">
        <FadeUp delay={0}>
          <p className="text-lg font-medium tracking-widest text-black/40 uppercase mb-6">Risk</p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-16">
            AI担当者を
            <br />
            "兼務"では危険。
          </h2>
        </FadeUp>
        <div className="space-y-2 max-w-3xl">
          {[
            "本業の片手間では「決まったやり方」を作ろうとしてしまう",
            "常にアップデートされる挙動を追うのは、兼務では不可能",
          ].map((text, i) => (
            <FadeUp key={i} delay={0.3 + i * 0.15}>
              <div className="flex gap-6 items-start py-5 border-t border-black/10">
                <p className="text-2xl text-black/80 font-light">{text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.6}>
          <div className="mt-10 p-8 border border-black/20 rounded-2xl max-w-3xl">
            <p className="text-2xl font-medium mb-3">毎日10時間以上AIを触り続ける専門家を、貴社のチームに。</p>
            <p className="text-xl text-black/50 font-light">最新の機能・挙動・活用法を検証し続けている。貴社は「検証」を捨て、「成果」だけを受け取ることができる。</p>
          </div>
        </FadeUp>
      </Slide>

      {/* 09 スクールだけでは不十分 */}
      <Slide>
        <FadeUp delay={0}>
          <p className="text-lg font-medium tracking-widest text-black/40 uppercase mb-6">Insight</p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-16">
            「AIスクール」だけでは
            <br />
            不十分。
          </h2>
        </FadeUp>
        <div className="space-y-8 max-w-3xl">
          <FadeUp delay={0.3}>
            <p className="text-2xl text-black/60 font-light leading-relaxed">
              「ツールの使い方」を覚えても、1週間後にはルールが変わる。
              <br />
              AIの"操作方法"の暗記は、応用性がなく意味が薄い。
            </p>
          </FadeUp>
          <FadeUp delay={0.45}>
            <div className="p-8 border border-black/20 rounded-2xl">
              <p className="text-2xl font-medium mb-4">必要なのは</p>
              <p className="text-2xl text-black/80 font-light leading-relaxed">
                「今の状況でAIをどう使うべきか」という<span className="font-medium">【思考力】</span>と
                <br />
                「ここでAIを介在させられないか」という<span className="font-medium">【発想力】</span>
              </p>
            </div>
          </FadeUp>
        </div>
      </Slide>

      {/* 10 AI人材の空白 */}
      <Slide className="items-center text-center bg-black/[0.03]">
        <FadeUp delay={0}>
          <p className="text-lg font-medium tracking-widest text-black/40 uppercase mb-6">Solution</p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight mb-8">
            中堅・中小企業における
            <br />
            「AI人材の空白」
          </h2>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="text-2xl text-black/60 font-light max-w-2xl leading-relaxed mb-12">
            世の中の全ての企業で、「AI専任担当者」が必須の時代。
            <br />
            AI人材を採用することは極めて困難かつ、リスクが高い。
            <br />
            しかし、多くの中小企業はマンパワー不足で身動きが取れない。
          </p>
        </FadeUp>
        <FadeUp delay={0.5}>
          <div className="inline-block p-10 border border-black/20 rounded-2xl max-w-xl">
            <p className="text-3xl font-semibold mb-4">Comp Systems</p>
            <p className="text-2xl text-black/60 font-light leading-relaxed">
              外部のAI人材として経営に入り込む。
              <br />
              活用余地の洗い出しから定着まで、一気通貫で担う。
            </p>
          </div>
        </FadeUp>
        <FadeUp delay={0.7}>
          <a
            href="https://calendly.com/masaya-compsystems/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center justify-center px-10 py-5 bg-black text-white text-lg font-semibold rounded-full hover:bg-black/80 transition-colors"
          >
            無料相談を申し込む →
          </a>
        </FadeUp>
      </Slide>

    </main>
  );
}
