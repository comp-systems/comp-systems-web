const info = [
  { label: "屋号", value: "Comp Systems" },
  { label: "代表者", value: "尾﨑 将也（Masaya Ozaki）" },
  { label: "所在地", value: "〒530-0001 大阪府大阪市北区梅田1丁目1番3号 大阪駅前第3ビル11階2号室" },
  { label: "創業", value: "2026年4月" },
  { label: "事業内容", value: "AI活用支援のコンサルティング" },
  { label: "対応エリア", value: "全国（オンライン）" },
  { label: "お問い合わせ", value: "info@compsystems.net" },
];


export default function Company() {
  return (
    <section id="company" className="py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-2xl font-medium tracking-widest text-white/50 uppercase mb-6">
          Company
        </p>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-24">
          会社概要
        </h2>

        {/* 会社情報テーブル */}
        <div className="max-w-4xl mb-32">
          {info.map((item) => (
            <div
              key={item.label}
              className="flex flex-col sm:flex-row gap-2 sm:gap-12 py-3 border-t border-white/20"
            >
              <span className="flex-none w-32 text-base text-white/50 font-light">
                {item.label}
              </span>
              <span className="text-base text-white/90 whitespace-nowrap">{item.value}</span>
            </div>
          ))}
        </div>

        {/* 代表プロフィール */}
        <p className="text-2xl font-medium tracking-widest text-white/50 uppercase mb-12">
          代表プロフィール
        </p>
        <div className="flex gap-10 items-start max-w-4xl">
          <div className="flex-none">
            <img
              src="/masaya-ozaki.jpg"
              alt="尾﨑 将也"
              className="w-48 object-cover object-top rounded-2xl"
            />
          </div>
          <div className="flex-1">
            <p className="text-3xl font-semibold mb-1">尾﨑 将也</p>
            <p className="text-xl text-white/50 mb-4">代表 / Comp Systems</p>
            <div className="flex items-start gap-4 mb-8 p-4 border border-white/10 rounded-xl w-fit">
              <img src="/g-cert.svg" alt="JDLA Deep Learning for GENERAL" className="h-36 w-auto opacity-90 flex-none" />
              <div>
                <p className="text-sm font-medium text-white/90 leading-snug">JDLA Deep Learning for GENERAL 2026 #3</p>
                <p className="text-sm text-white/45 font-light leading-relaxed mt-1">
                  一般社団法人 日本ディープラーニング協会（JDLA）認定のAI資格。<br />
                  AIの基礎理論から倫理・法規制・ビジネス活用まで、<br />
                  体系的な知識を保有することを証明する。
                </p>
              </div>
            </div>
            <div className="space-y-10">
              <div className="relative pl-6 border-l border-white/15">
                <div className="text-2xl font-semibold text-white mb-3">
                  学生時代
                </div>
                <div className="text-xl text-white/65 font-light leading-relaxed space-y-4">
                  <p>
                    広島大学体育会ラクロス部で主将を務め、中四国代表にも選出。<br />
                    チームスポーツの楽しさや組織運営の難しさを学ぶ。
                  </p>
                  <p>
                    インターン経験から営業職に興味を持ち、理系院生ながら文系就活。<br />
                    120社にエントリーし、大手含む内定多数。
                  </p>
                  <p>
                    BtoB × 高単価無形商材 × 完全新規の<br />
                    最も難易度が高い営業ができると感じた会社に就職。
                  </p>
                </div>
              </div>

              <div className="relative pl-6 border-l border-white/15">
                <div className="text-2xl font-semibold text-white mb-3">
                  会社員時代
                </div>
                <div className="text-xl text-white/65 font-light leading-relaxed space-y-4">
                  <p>
                    最も厳しい環境で力をつけるべく、仕事に没頭。<br />
                    業務と研鑽で、平日は1日16時間以上PCに向かい続ける。
                  </p>
                  <p>
                    数多くの挫折を経験しながら、同期上位10％の成績を残す。<br />
                    中堅・中小企業に深く入り込み、経営課題を解決。
                  </p>
                </div>
              </div>

              <div className="relative pl-6 border-l border-white/15">
                <div className="text-2xl font-semibold text-white mb-3">
                  Comp Systems 創業
                </div>
                <p className="text-xl text-white/65 font-light leading-relaxed">
                  会社員として与えられた仕組みの中で、<br />
                  顧客に全力で寄り添うことに限界を感じ、<br />
                  自身の時間を顧客貢献に最大限使うために独立。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
