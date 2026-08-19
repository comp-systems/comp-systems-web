import { SymbolMark } from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <SymbolMark className="h-8 w-auto text-white opacity-60" />
        <p className="text-base text-white/70">
          © {new Date().getFullYear()} Comp Systems株式会社. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
