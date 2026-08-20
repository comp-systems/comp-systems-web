import { SymbolMark } from "./Logo";
import { text } from "./typography";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--rule-soft)] py-12 px-6">
      {/* 3カラムにして、コピーライトをフッター幅の中央に置く（ロゴ幅に影響されない） */}
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 sm:grid sm:grid-cols-3">
        <SymbolMark className="h-8 w-auto text-[color:var(--fg)] opacity-60 sm:justify-self-start" />
        <p className={`${text.small} text-center sm:justify-self-center`}>
          © {new Date().getFullYear()} Comp Systems Inc. All rights reserved.
        </p>
        <div className="hidden sm:block" />
      </div>
    </footer>
  );
}
