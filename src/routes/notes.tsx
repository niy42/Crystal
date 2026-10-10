import { aiProduct, analyticsNote, designNote, wordCount } from "../content/assessment";

function BulletList({ items, inverse = false }: { items: string[]; inverse?: boolean }) {
  return (
    <ul className={`mt-5 space-y-3 text-sm leading-7 ${inverse ? "text-paper/80" : "text-ink-soft"}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function NotesPage() {
  return (
    <main className="min-h-screen bg-paper px-5 py-10 md:py-16 lg:px-8">
      <article className="mx-auto max-w-5xl">
        <a href="/" className="text-sm underline underline-offset-4">← Back to Crystal Kizor</a>
        <header className="mt-12 max-w-3xl">
          <p className="text-xs uppercase tracking-[.2em] text-clay">Assessment notes</p>
          <h1 className="mt-4 font-serif text-5xl tracking-tight md:text-7xl">Thinking behind the work</h1>
          <p className="mt-5 text-lg leading-8 text-muted">The thinking, product boundaries, and measurement choices behind the experience.</p>
        </header>

        <section className="mt-14 border-t border-line pt-8">
          <p className="text-xs uppercase tracking-[.18em] text-clay">01 / Design direction</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl">Design note</h2>
          <p className="mt-5 whitespace-pre-line leading-8 text-muted">{designNote}</p>
          <p className="mt-4 text-xs text-muted">{wordCount(designNote)} words</p>
        </section>

        <section className="mt-14 border-t border-line pt-8">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-14">
            <div>
              <p className="text-xs uppercase tracking-[.18em] text-clay">02 / AI product thinking</p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">Studio Notes</h2>
              <p className="mt-5 leading-8 text-muted">{aiProduct.intro}</p>
              <p className="mt-4 leading-8 text-muted">{aiProduct.audience}</p>
            </div>
            <div className="space-y-5">
              <div className="rounded-3xl border border-line bg-paper-2/50 p-6 md:p-8">
                <h3 className="font-serif text-2xl">The learner experience</h3>
                <BulletList items={aiProduct.experience} />
                <p className="mt-6 border-t border-line pt-5 text-sm leading-7 text-muted"><span className="font-medium text-ink">Example:</span> {aiProduct.example}</p>
              </div>
              <div className="rounded-3xl border border-line p-6 md:p-8">
                <h3 className="font-serif text-2xl">The first release</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{aiProduct.approach}</p>
                <BulletList items={aiProduct.mvp} />
              </div>
              <div className="rounded-3xl bg-ink p-6 text-paper md:p-8">
                <h3 className="font-serif text-2xl">Trust and boundaries</h3>
                <BulletList items={aiProduct.boundaries} inverse />
                <p className="mt-6 border-t border-paper/20 pt-5 text-sm leading-7 text-paper/70">{aiProduct.safeguards}</p>
              </div>
            </div>
          </div>
          <p className="mt-5 text-xs text-muted">{wordCount(aiProduct)} words</p>
        </section>

        <section className="mt-14 border-t border-line pt-8">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-14">
            <div>
              <p className="text-xs uppercase tracking-[.18em] text-clay">03 / Analytics & improvement</p>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">Measure the next step.</h2>
              <p className="mt-5 leading-8 text-muted">{analyticsNote.principle}</p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl">What to measure</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {analyticsNote.metrics.map((item, index) => (
                    <div key={item.title} className={`rounded-2xl border border-line p-5 ${index === analyticsNote.metrics.length - 1 ? "sm:col-span-2" : ""}`}>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl">Tools to consider</h3>
                <div className="mt-4 divide-y divide-line border-y border-line">
                  {analyticsNote.tools.map((item) => <div key={item.title} className="grid gap-1 py-4 sm:grid-cols-[.65fr_1fr] sm:gap-6"><h4 className="font-medium">{item.title}</h4><p className="text-sm leading-6 text-muted">{item.detail}</p></div>)}
                </div>
              </div>
              <div className="rounded-3xl bg-paper-2/50 p-6 md:p-8">
                <h3 className="font-serif text-2xl">Diagnose before redesigning</h3>
                <p className="mt-4 text-sm leading-7 text-ink-soft">{analyticsNote.diagnosis}</p>
                <BulletList items={analyticsNote.checks} />
                <ol className="mt-6 grid gap-4 border-t border-line pt-5 sm:grid-cols-3">
                  {analyticsNote.review.map((item, index) => <li key={item} className="text-sm leading-6 text-muted"><span className="mb-2 block font-serif text-2xl text-clay">0{index + 1}</span>{item}</li>)}
                </ol>
              </div>
            </div>
          </div>
          <p className="mt-5 text-xs text-muted">{wordCount(analyticsNote)} words</p>
        </section>
      </article>
    </main>
  );
}
