import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  const fontData = fs.readFileSync(
    path.join(process.cwd(), "public", "fonts", "Geist-SemiBold.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: 512,
          height: 512,
          background: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Geist', sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 300,
            fontWeight: 600,
            letterSpacing: "-18px",
            color: "#ffffff",
            display: "flex",
            // 字間を詰めた分、視覚的な中央に寄せる
            paddingRight: 18,
          }}
        >
          CS
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Geist", data: fontData, weight: 600, style: "normal" }],
    }
  );
}
