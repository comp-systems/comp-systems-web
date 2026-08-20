import { text } from "./typography";

// 文言の正本：.company/00_会社情報/01_MVV.md（VALUES）
// 正本を変更したら、必ずここへ反映すること。
const values = [
  {
    title: "干渉",
    desc: "意見の対立から逃げず、正しいと信じることは忌憚なく伝える。\n主体的に他者を巻き込み、積極的に干渉し、お節介を焼く。",
  },
  {
    title: "実装",
    desc: "助言して終わりのコンサルにならない。\nクライアントの成果創出を最優先に考える。",
  },
  {
    title: "成長",
    desc: "過去の成功体験を疑い、進化し続ける。",
  },
  {
    title: "報恩",
    desc: "お世話になった環境に還元できる人であり続ける。",
  },
];

export default function Values() {
  return (
    <section id="values" className="relative pt-8 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className={`${text.h2} mb-8`}>Value</h2>
        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-10">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="border-t border-[color:var(--rule)] pt-6"
            >
              <div className="flex items-baseline gap-4 mb-2">
                <span className={text.num}>{i + 1}</span>
                <h3 className={text.h3}>{v.title}</h3>
              </div>
              <p className={`${text.bodyNarrow} whitespace-pre-line`}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
