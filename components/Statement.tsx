import { Wordmark } from "./Logo";
import { text } from "./typography";

export default function Statement() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 py-32">
      <div className={`${text.lead} space-y-10`}>
        <p>AIの台頭により、産業は加速度的に進化しています。</p>
        <p>
          常識を疑い、新たな技術を受け入れ続けることが、
          <br />
          極めて重要な時代になりました。
        </p>
        <p>
          <Wordmark
            mono
            className="inline-block h-[0.9em] w-auto align-[-0.2em] text-[color:var(--fg-muted)]"
          />
          は、
          <br />
          少数精鋭の機動力を武器に、最先端であり続けます。
        </p>
      </div>
    </section>
  );
}
