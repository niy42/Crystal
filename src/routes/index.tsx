import { ArrowUpRight, ExternalLink, Menu, X } from "lucide-react";
import { useMemo, useState } from "react";
import { aiProduct, analyticsNote, wordCount } from "../content/assessment";
import { external, intents, pathways, services } from "../content/site";


const initiatives = [
  { id: "practice", eyebrow: "Practice / 01", title: "Studio COKA", body: "Architecture, interior design and construction shaped around climate, use and place.", image: `${import.meta.env.BASE_URL}media/court.jpg`, href: external.studio, external: true },
  { id: "making", eyebrow: "Making / 02", title: "ELEvated", body: "Furniture and objects rooted in African context, materials and ideas.", image: `${import.meta.env.BASE_URL}media/object.jpg`, href: "#pathways", external: false },
  { id: "teaching", eyebrow: "Teaching / 03", title: "The Effective Architect", body: "A learning and media platform helping built-environment professionals grow better careers.", image: `${import.meta.env.BASE_URL}media/study.jpg`, href: external.teaList, external: true },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState("studio");
  const selected = useMemo(() => intents.find((item) => item.id === selectedIntent), [selectedIntent]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <header className="top-0 z-50 sticky bg-paper/90 backdrop-blur-md border-line/80 border-b">
        <div className="flex justify-between items-center mx-auto px-5 lg:px-8 py-4 max-w-7xl">
          <a href="#top" className="font-serif text-xl tracking-tight" aria-label="Crystal Kizor home">CK<span className="text-clay">.</span></a>
          <nav className="hidden md:flex items-center gap-7 text-ink-soft text-sm" aria-label="Primary navigation">
            <button onClick={() => scrollTo("practice")}>Studio</button>
            <button onClick={() => scrollTo("making")}>ELEvated</button>
            <button onClick={() => scrollTo("teaching")}>TEA</button>
            <button onClick={() => scrollTo("pathways")}>Pathways</button>
            <a href="#contact" className="bg-ink px-4 py-2 rounded-full text-paper">Start a conversation</a>
          </nav>
          <button className="md:hidden p-2 rounded-full" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <nav id="mobile-menu" className="md:hidden bg-paper px-5 py-5 border-line border-t" aria-label="Mobile navigation">
            {[['practice', 'Studio'], ['making', 'ELEvated'], ['teaching', 'TEA'], ['pathways', 'Pathways'], ['contact', 'Contact']].map(([id, label]) => <button key={id} onClick={() => scrollTo(id)} className="block py-3 w-full text-lg text-left">{label}</button>)}
          </nav>
        )}
      </header>

      <section id="top" className="relative px-5 lg:px-8 pt-16 lg:pt-24 pb-20 lg:pb-28 overflow-hidden">
        <div className="lg:items-end gap-12 grid lg:grid-cols-[1.15fr_.85fr] mx-auto max-w-7xl">
          <div className="rise">
            <p className="mb-7 font-medium text-clay text-xs uppercase tracking-[0.22em]">Architect · Designer · Entrepreneur · Speaker · Researcher</p>
            <h1 className="max-w-5xl font-serif text-[clamp(3.5rem,9vw,8.4rem)] leading-[.86] tracking-[-.055em]">Making room for <em className="font-normal text-clay">better</em> ways to live.</h1>
            <p className="mt-9 max-w-2xl text-muted text-lg md:text-xl leading-8">Crystal Kizor builds at the intersection of architecture, climate-responsive design, education, ideas and faith, with Studio COKA at the centre.</p>
            <div className="flex flex-wrap gap-3 mt-9">
              <button onClick={() => scrollTo("practice")} className="bg-ink px-6 py-3 rounded-full font-medium text-paper text-sm press">Explore the work <ArrowUpRight className="inline ml-1" size={16} /></button>
              <button onClick={() => scrollTo("pathways")} className="px-6 py-3 border border-ink/20 rounded-full font-medium text-sm press">Find your path</button>
            </div>
          </div>
          <div className="relative lg:pl-8">
            <div className="relative bg-paper-2 lg:ml-auto p-5 border border-ink/10 max-w-md aspect-4/5 overflow-hidden airpath">
              <img src={`${import.meta.env.BASE_URL}media/court.jpg`} alt="Light and shade study representing climate-responsive architecture" className="opacity-75 w-full h-full object-cover mix-blend-multiply" />
              <div className="absolute inset-0 bg-linear-to-t from-ink/55 via-transparent to-transparent" />
              <div className="right-6 bottom-6 left-6 absolute text-paper"><p className="font-serif text-2xl">Air, light, material, use.</p><p className="mt-2 text-paper/80 text-sm">A practice attentive to the ordinary conditions that shape a life.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-2/45 px-5 lg:px-8 py-14 lg:py-20 border-line border-y">
        <div className="gap-8 grid lg:grid-cols-[.7fr_1.3fr] mx-auto max-w-7xl">
          <p className="text-muted text-xs uppercase tracking-[.2em]">One ecosystem, many doors</p>
          <div><h2 className="max-w-4xl font-serif text-4xl md:text-6xl leading-tight tracking-tight">Different work. One question: <em className="font-normal text-clay">how can better ideas become lived experience?</em></h2><p className="mt-7 max-w-2xl text-muted">From buildings and objects to teaching, speaking, research, education and faith, the work connects around people, place and possibility.</p></div>
        </div>
      </section>

      <section id="practice" className="px-5 lg:px-8 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-between items-end gap-6 mb-12"><div><p className="text-clay text-xs uppercase tracking-[.2em]">The centre</p><h2 className="mt-3 font-serif text-5xl md:text-7xl tracking-tight">Studio COKA</h2></div><a href={external.studio} target="_blank" rel="noreferrer" className="hidden md:block text-sm underline underline-offset-4">Visit studio <ExternalLink className="inline ml-1" size={14} /></a></div>
          <div className="gap-10 grid lg:grid-cols-[1.1fr_.9fr]">
            <div className="bg-paper-2 aspect-16/10 media-frame"><img src={`${import.meta.env.BASE_URL}media/court.jpg`} alt="Architecture and climate-responsive design study" className="w-full h-full object-cover" loading="lazy" /></div>
            <div className="flex flex-col justify-between"><p className="max-w-xl text-2xl md:text-3xl leading-relaxed">A design and construction studio focused on thoughtful, climate-responsive spaces, with architecture that responds to heat, light, air, material and daily use.</p><div className="gap-5 grid sm:grid-cols-3 mt-10 pt-6 border-line border-t">{services.map((service) => <div key={service.index}><span className="text-clay text-xs">{service.index}</span><h3 className="mt-2 font-medium">{service.title}</h3><p className="mt-2 text-muted text-sm leading-6">{service.text}</p></div>)}</div></div>
          </div>
        </div>
      </section>

      <section className="px-5 lg:px-8 pb-20 lg:pb-28">
        <div className="gap-6 grid lg:grid-cols-3 mx-auto max-w-7xl">
          {initiatives.map((item) => <article id={item.id} key={item.id} className="group pt-5 border-ink border-t">
            <div className="bg-paper-2 aspect-4/3 media-frame"><img src={item.image} alt="" className="w-full h-full object-cover" loading="lazy" /></div>
            <p className="mt-6 text-clay text-xs uppercase tracking-[.18em]">{item.eyebrow}</p><h2 className="mt-2 font-serif text-3xl">{item.title}</h2><p className="mt-3 text-muted">{item.body}</p>
            <a href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} className="inline-flex items-center gap-2 mt-6 font-medium text-sm underline underline-offset-4">Explore <ArrowUpRight size={15} /></a>
          </article>)}
        </div>
      </section>

      <section className="bg-olive px-5 lg:px-8 py-20 lg:py-28 text-paper">
        <div className="mx-auto max-w-7xl"><div className="gap-12 grid lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-paper/60 text-xs uppercase tracking-[.2em]">Beyond the studio</p><h2 className="mt-4 font-serif text-5xl md:text-7xl">The public work.</h2></div><div className="gap-8 grid sm:grid-cols-2">
          <div className="pt-5 border-paper/20 border-t"><p className="font-serif text-3xl">Speaking</p><p className="mt-3 text-paper/70">Conversations around architecture, climate-responsive design, African cities, design, entrepreneurship and the built environment.</p><button onClick={() => { setSelectedIntent("speaking"); scrollTo("pathways") }} className="mt-5 underline underline-offset-4">Invite Crystal to speak</button></div>
          <div className="pt-5 border-paper/20 border-t"><p className="font-serif text-3xl">AKO Alliance</p><p className="mt-3 text-paper/70">Expanding access to education and opportunity for children and young people.</p><button onClick={() => { setSelectedIntent("ako"); scrollTo("pathways") }} className="mt-5 underline underline-offset-4">Learn about AKO</button></div>
          <div className="pt-5 border-paper/20 border-t"><p className="font-serif text-3xl">Alive and Free</p><p className="mt-3 text-paper/70">A Christian youth movement helping young people walk in truth, healing, freedom, identity, purpose and life in Christ.</p><button onClick={() => { setSelectedIntent("alive"); scrollTo("pathways") }} className="mt-5 underline underline-offset-4">Discover the movement</button></div>
          <div id="writing" className="pt-5 border-paper/20 border-t"><p className="font-serif text-3xl">Research & writing</p><p className="mt-3 text-paper/70">Research, authorship, media and ideas that sit directly under Crystal's name.</p><a href={external.instagram} target="_blank" rel="noreferrer" className="inline-block mt-5 underline underline-offset-4">Follow the thinking</a></div>
        </div></div></div>
      </section>

      <section id="pathways" className="px-5 lg:px-8 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-clay text-xs uppercase tracking-[.2em]">Choose your door</p><h2 className="mt-4 font-serif text-5xl md:text-7xl tracking-tight">Where should you go next?</h2><p className="mt-5 text-muted">The right next step depends on why you are here. Choose a path and keep moving.</p></div>
          <div className="gap-3 grid mt-12">{pathways.map((path) => {
            const isActive = selectedIntent === ("intent" in path ? path.intent : ""); return <div key={path.event} className={`grid gap-5 border-t border-line py-6 md:grid-cols-[.9fr_1.3fr_auto] md:items-center ${isActive ? "bg-paper-2/50 px-4" : ""}`}>
              <h3 className="font-serif text-2xl">{path.who}</h3><p className="text-muted">{path.detail}</p>
              {path.kind === "external" ? <a href={path.href} target="_blank" rel="noreferrer" className="font-medium text-sm underline underline-offset-4 whitespace-nowrap">{path.action} <ExternalLink className="inline ml-1" size={14} /></a> : path.kind === "hash" ? <button onClick={() => scrollTo(path.hash)} className="font-medium text-sm text-left underline underline-offset-4">{path.action}</button> : <button onClick={() => setSelectedIntent(path.intent)} className="font-medium text-sm text-left underline underline-offset-4">{path.action}</button>}
            </div>
          })}</div>
          <div className="bg-paper-2 mt-10 p-7 md:p-10 rounded-3xl"><p className="text-muted text-xs uppercase tracking-[.18em]">Selected pathway</p><p className="mt-3 font-serif text-3xl">{selected?.label}</p><p className="mt-3 max-w-2xl text-muted">Tell Crystal what you are looking to build, learn, explore or discuss. The destination can become a dedicated enquiry flow as the ecosystem grows.</p><a href="#contact" className="inline-flex bg-ink mt-6 px-6 py-3 rounded-full font-medium text-paper text-sm">Start a conversation <ArrowUpRight className="ml-1" size={16} /></a></div>
        </div>
      </section>

      <section className="bg-paper-2/40 px-5 lg:px-8 py-20 lg:py-24 border-line border-t">
        <div className="gap-10 lg:gap-16 grid lg:grid-cols-[.78fr_1.22fr] mx-auto max-w-7xl">
          <div className="lg:top-28 lg:sticky lg:self-start">
            <p className="text-clay text-xs uppercase tracking-[.2em]">AI product thinking</p>
            <h2 className="mt-4 font-serif text-5xl md:text-6xl tracking-tight">Studio Notes</h2>
            <p className="mt-6 max-w-xl text-muted text-lg leading-8">{aiProduct.intro}</p>
            <p className="mt-4 max-w-xl text-muted leading-7">{aiProduct.audience}</p>
            <p className="mt-6 text-muted text-xs uppercase tracking-[.16em]">A focused learning tool, grounded in TEA's own material</p>
          </div>
          <div className="space-y-5">
            <div className="bg-paper p-7 md:p-9 border border-line/80 rounded-3xl">
              <p className="text-clay text-xs uppercase tracking-[.18em]">01 / Learner experience</p>
              <h3 className="mt-3 font-serif text-2xl">From question to practice</h3>
              <ul className="space-y-3 mt-5 text-ink-soft text-sm leading-7">{aiProduct.experience.map((item) => <li key={item} className="flex gap-3"><span className="bg-clay mt-[0.7rem] rounded-full w-1.5 h-1.5 shrink-0" /><span>{item}</span></li>)}</ul>
              <p className="mt-6 pt-5 border-line border-t text-muted text-sm leading-7"><span className="font-medium text-ink">Example:</span> {aiProduct.example}</p>
            </div>
            <div className="gap-5 grid md:grid-cols-2">
              <div className="bg-paper p-7 rounded-3xl">
                <p className="text-clay text-xs uppercase tracking-[.18em]">02 / First release</p>
                <h3 className="mt-3 font-serif text-2xl">A deliberately small MVP</h3>
                <p className="mt-3 text-muted text-sm leading-7">{aiProduct.approach}</p>
                <ul className="space-y-2 mt-4 text-ink-soft text-sm leading-6">{aiProduct.mvp.map((item) => <li key={item} className="flex gap-3"><span className="text-clay">•</span><span>{item}</span></li>)}</ul>
              </div>
              <div className="bg-ink p-7 rounded-3xl text-paper">
                <p className="text-paper/60 text-xs uppercase tracking-[.18em]">03 / Trust and boundaries</p>
                <h3 className="mt-3 font-serif text-2xl">Helpful, not overconfident</h3>
                <ul className="space-y-3 mt-4 text-paper/80 text-sm leading-6">{aiProduct.boundaries.map((item) => <li key={item} className="flex gap-3"><span className="text-paper/60">•</span><span>{item}</span></li>)}</ul>
                <p className="mt-5 pt-4 border-paper/20 border-t text-paper/70 text-sm leading-6">{aiProduct.safeguards}</p>
              </div>
            </div>
            <p className="text-muted text-xs text-right uppercase tracking-[.14em]">{wordCount(aiProduct)} words · MVP concept</p>
          </div>
        </div>
      </section>

      <section className="px-5 lg:px-8 py-20 lg:py-24">
        <div className="gap-10 lg:gap-16 grid lg:grid-cols-[.78fr_1.22fr] mx-auto max-w-7xl">
          <div className="lg:top-28 lg:sticky lg:self-start">
            <p className="text-clay text-xs uppercase tracking-[.2em]">Analytics & improvement</p>
            <h2 className="mt-4 font-serif text-5xl md:text-6xl tracking-tight">Measure the next step.</h2>
            <p className="mt-6 max-w-md text-muted text-lg leading-8">{analyticsNote.principle}</p>
            <p className="mt-6 text-muted text-xs uppercase tracking-[.16em]">A practical measurement plan</p>
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-clay text-xs uppercase tracking-[.18em]">01 / What to measure</p>
              <div className="gap-3 grid sm:grid-cols-2 mt-4">{analyticsNote.metrics.map((item, index) => <div key={item.title} className={`rounded-2xl border border-line bg-paper p-5 ${index === analyticsNote.metrics.length - 1 ? "sm:col-span-2" : ""}`}><h3 className="font-medium">{item.title}</h3><p className="mt-2 text-muted text-sm leading-6">{item.detail}</p></div>)}</div>
            </div>
            <div>
              <p className="text-clay text-xs uppercase tracking-[.18em]">02 / A lightweight toolset</p>
              <div className="mt-4 border-line border-y divide-y divide-line">{analyticsNote.tools.map((item) => <div key={item.title} className="gap-1 sm:gap-6 grid sm:grid-cols-[.65fr_1fr] py-4"><h3 className="font-medium">{item.title}</h3><p className="text-muted text-sm leading-6">{item.detail}</p></div>)}</div>
            </div>
            <div className="bg-paper-2/70 p-6 md:p-8 rounded-3xl">
              <p className="text-clay text-xs uppercase tracking-[.18em]">03 / How to improve</p>
              <h3 className="mt-3 font-serif text-2xl">Find the friction before redesigning</h3>
              <p className="mt-3 text-ink-soft text-sm leading-7">{analyticsNote.diagnosis}</p>
              <ul className="space-y-3 mt-5 text-ink-soft text-sm leading-7">{analyticsNote.checks.map((item) => <li key={item} className="flex gap-3"><span className="bg-clay mt-[0.7rem] rounded-full w-1.5 h-1.5 shrink-0" /><span>{item}</span></li>)}</ul>
              <ol className="gap-3 grid sm:grid-cols-3 mt-6 pt-5 border-line border-t">{analyticsNote.review.map((item, index) => <li key={item} className="text-muted text-sm leading-6"><span className="block mb-2 font-serif text-clay text-2xl">0{index + 1}</span>{item}</li>)}</ol>
            </div>
            <p className="text-muted text-xs text-right uppercase tracking-[.14em]">{wordCount(analyticsNote)} words · measurement plan</p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-ink px-5 lg:px-8 py-20 lg:py-28 text-paper"><div className="lg:items-end gap-10 grid lg:grid-cols-[1.3fr_.7fr] mx-auto max-w-7xl"><div><p className="text-paper/50 text-xs uppercase tracking-[.2em]">Start somewhere</p><h2 className="mt-4 max-w-4xl font-serif text-5xl md:text-7xl leading-tight">Bring a question, a project, a room, or simply an idea.</h2></div><div><a href="#pathways" className="inline-flex bg-paper px-6 py-3 rounded-full font-medium text-ink">Get in touch <ArrowUpRight className="ml-1" size={17} /></a><div className="flex gap-5 mt-8 text-paper/60 text-sm"><a href={external.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={external.instagram} target="_blank" rel="noreferrer">Instagram</a><a href={external.x} target="_blank" rel="noreferrer">X</a></div></div></div></section>

      <footer className="bg-ink px-5 lg:px-8 pb-10 text-paper/45"><div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-3 mx-auto pt-6 border-paper/10 border-t max-w-7xl text-xs"><span>© {new Date().getFullYear()} Crystal Kizor</span><span>Architecture · Ideas · People · Possibility</span></div></footer>
    </main>
  );
}
