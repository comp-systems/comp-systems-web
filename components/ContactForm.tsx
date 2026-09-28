"use client";

import { useEffect, useRef, useState } from "react";
import { text } from "./typography";

// 送信先は Google フォーム「AI活用 無料相談のお申し込み｜Comp Systems株式会社」（会社アカウント所有）。
// 回答はフォームの「回答」タブにたまり、新着はメールで通知される。
// フォームの質問を変えたら、下の entry ID を取り直すこと（viewform の FB_PUBLIC_LOAD_DATA_ に載っている）。
const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSf-cFgLnlrP1CT47KmFWI58K4WjkT5EhDzsMwreKM_lPVtmLw/formResponse";

const entry = {
  name: "entry.22640984",
  company: "entry.1521308331",
  title: "entry.1234653584",
  tel: "entry.66885563",
  email: "entry.759704897",
  inquiry: "entry.615171376",
  status: "entry.1219285152",
  concern: "entry.1945431035",
  method: "entry.864418707",
} as const;

const statusOptions = ["まだ何もしていない", "個人で少し試している", "会社で一部使っている", "活用し、業務を効率化している"];
const methodOptions = ["電話", "メール"];
// お問い合わせ内容（複数選択・必須）。Google フォーム側の選択肢と文言を完全に一致させること（違うと送信が弾かれる）
const inquiryOptions = [
  "AI活用余地の無料検証の問い合わせ",
  "サービス内容・料金について",
  "取材・講演・セミナーのご依頼",
  "協業・パートナーシップについて",
  "その他",
];

const inputClass =
  "w-full px-4 py-3 bg-transparent border border-[color:var(--rule)] text-[color:var(--fg)] placeholder:text-[color:var(--fg-faint)] focus:outline-none focus:border-[color:var(--fg)] transition-colors";

function Label({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <span className="flex items-center gap-3 mb-2">
      <span className={text.dtValue}>{children}</span>
      {required && (
        <span className="text-xs px-2 py-0.5 bg-[color:var(--invert-bg)] text-[color:var(--invert-fg)]">必須</span>
      )}
    </span>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="mb-16">
      <legend className={`${text.h3} mb-8`}>{title}</legend>
      <div className="flex flex-col gap-8">{children}</div>
    </fieldset>
  );
}

// 任意項目のラジオボタン。選んだものをもう一度押すと未選択に戻る
function ClearableRadios({ name, options, row }: { name: string; options: string[]; row?: boolean }) {
  const [value, setValue] = useState("");
  return (
    <>
      <div className={`flex flex-col gap-3 mt-3 ${row ? "sm:flex-row sm:gap-8" : ""}`}>
        {options.map((o) => (
          <label key={o} className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={o}
              checked={value === o}
              onChange={() => setValue(o)}
              onClick={() => value === o && setValue("")}
              className="accent-[color:var(--fg)]"
            />
            <span className={text.bodyNarrow}>{o}</span>
          </label>
        ))}
      </div>
    </>
  );
}

// 必須・複数選択のチェックボックス。1つも選ばれていなければ先頭の項目に吹き出しを出す
function RequiredCheckboxes({
  name,
  options,
  selected,
  setSelected,
}: {
  name: string;
  options: string[];
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const firstRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstRef.current?.setCustomValidity(selected.length ? "" : "1つ以上選択してください");
  }, [selected]);

  const toggle = (o: string) =>
    setSelected((cur) => (cur.includes(o) ? cur.filter((x) => x !== o) : [...cur, o]));

  return (
    <div className="flex flex-col gap-3 mt-3">
      {options.map((o, i) => (
        <label key={o} className="flex items-center gap-3 cursor-pointer">
          <input
            ref={i === 0 ? firstRef : undefined}
            type="checkbox"
            name={name}
            value={o}
            checked={selected.includes(o)}
            onChange={() => toggle(o)}
            className="accent-[color:var(--fg)]"
          />
          <span className={text.bodyNarrow}>{o}</span>
        </label>
      ))}
    </div>
  );
}

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [inquiries, setInquiries] = useState<string[]>([]);
  // 「現在の状況（AIのご活用状況）」は無料検証を選んだときだけ出す（検証の下調べに使う情報のため）
  const wantsReview = inquiries.includes(inquiryOptions[0]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = new FormData(e.currentTarget);
    // Google フォーム側の「お名前」は1項目なので、姓名とフリガナをつないで送る（例：山田 太郎（ヤマダ タロウ））
    data.set(entry.name, `${data.get("lastName")} ${data.get("firstName")}（${data.get("lastKana")} ${data.get("firstKana")}）`);
    for (const k of ["lastName", "firstName", "lastKana", "firstKana"]) data.delete(k);
    try {
      // Google フォームは CORS を返さないため no-cors で送る（結果は読めない＝通信エラーのみ検知できる）
      await fetch(FORM_ACTION, { method: "POST", mode: "no-cors", body: data });
      setState("sent");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="py-16">
        <p className={`${text.h3} mb-6`}>送信しました。ありがとうございます。</p>
        <p className={text.body}>担当より2営業日以内にご連絡いたします。</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-2xl">
      <Group title="貴社について教えてください">
        <div>
          <Label required>お名前</Label>
          <div className="grid grid-cols-2 gap-4">
            <input name="lastName" required aria-label="姓" className={inputClass} placeholder="姓（山田）" autoComplete="family-name" />
            <input name="firstName" required aria-label="名" className={inputClass} placeholder="名（太郎）" autoComplete="given-name" />
          </div>
        </div>
        <div>
          <Label required>フリガナ</Label>
          <div className="grid grid-cols-2 gap-4">
            <input name="lastKana" required pattern="[ァ-ヶー\s　]+" title="カタカナで入力してください" aria-label="セイ" className={inputClass} placeholder="セイ（ヤマダ）" />
            <input name="firstKana" required pattern="[ァ-ヶー\s　]+" title="カタカナで入力してください" aria-label="メイ" className={inputClass} placeholder="メイ（タロウ）" />
          </div>
        </div>
        <label>
          <Label required>会社名</Label>
          <input name={entry.company} required className={inputClass} placeholder="株式会社〇〇" autoComplete="organization" />
        </label>
        <label>
          <Label>役職</Label>
          <input name={entry.title} className={inputClass} placeholder="代表取締役" autoComplete="organization-title" />
        </label>
      </Group>

      <Group title="ご連絡先">
        <label>
          <Label required>メールアドレス</Label>
          <input name={entry.email} type="email" required className={inputClass} placeholder="taro@example.co.jp" autoComplete="email" />
        </label>
        <label>
          <Label>電話番号</Label>
          <input name={entry.tel} type="tel" className={inputClass} placeholder="06-1234-5678" autoComplete="tel" />
        </label>
      </Group>

      <Group title="お問い合わせ内容">
        <div>
          <Label required>ご用件（複数選択可）</Label>
          <RequiredCheckboxes name={entry.inquiry} options={inquiryOptions} selected={inquiries} setSelected={setInquiries} />
        </div>
        <label>
          <Label>お問い合わせ内容</Label>
          <span className={`${text.small} block mb-3`}>
            検証をお選びいただいた方は、
            <br />
            AI活用に関して気になっていること・お困りごとなどご記入ください。
          </span>
          <textarea name={entry.concern} rows={6} className={inputClass} />
        </label>
      </Group>

      {wantsReview && (
        <Group title="現在の状況">
          <div>
            <Label>AIのご活用状況</Label>
            <ClearableRadios name={entry.status} options={statusOptions} />
          </div>
        </Group>
      )}

      <Group title="ご希望の連絡方法">
        <ClearableRadios name={entry.method} options={methodOptions} row />
      </Group>

      {state === "error" && (
        <p className={`${text.small} mb-6`}>
          送信できませんでした。通信環境をご確認のうえ、もう一度お試しいただくか、info@compsystems.net までメールでご連絡ください。
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className={`${text.cta} inline-flex items-center justify-center px-10 py-4 bg-[color:var(--invert-bg)] text-[color:var(--invert-fg)] rounded-full hover:opacity-85 transition-opacity disabled:opacity-50`}
      >
        {state === "sending" ? "送信中…" : "この内容で送信する"}
      </button>
    </form>
  );
}
