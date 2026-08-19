import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Comp Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  // ロゴは確定マスターから書き出した透過PNG（カラー・ロックアップ縦組み 1600x898）。
  // LINE等は og:image を正方形にクロップして小カードに出すため、
  // 中央 630x630 の内側に収まる縦組みを使う（横組みだと両端が切れる）。
  const logo = await readFile(
    join(process.cwd(), "public", "logo", "cs-lockup-vertical-color.png")
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#080808",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* グリッドライン */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(180,180,180,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(180,180,180,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            display: "flex",
          }}
        />

        {/* コーナーアクセント */}
        <div style={{ position: "absolute", top: 48, left: 48, width: 28, height: 28, borderTop: "1.5px solid rgba(180,180,180,0.2)", borderLeft: "1.5px solid rgba(180,180,180,0.2)", display: "flex" }} />
        <div style={{ position: "absolute", top: 48, right: 48, width: 28, height: 28, borderTop: "1.5px solid rgba(180,180,180,0.2)", borderRight: "1.5px solid rgba(180,180,180,0.2)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 48, left: 48, width: 28, height: 28, borderBottom: "1.5px solid rgba(180,180,180,0.2)", borderLeft: "1.5px solid rgba(180,180,180,0.2)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 48, right: 48, width: 28, height: 28, borderBottom: "1.5px solid rgba(180,180,180,0.2)", borderRight: "1.5px solid rgba(180,180,180,0.2)", display: "flex" }} />

        {/* ロックアップ縦組み（シンボル＋ワードマーク） */}
        <img src={logoSrc} alt="Comp Systems" width={520} height={292} />
      </div>
    ),
    // テキストを持たない画像なのでフォント読み込みは不要
    { ...size }
  );
}
