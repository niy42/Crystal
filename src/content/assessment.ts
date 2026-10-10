export function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export const designNote = `Crystal is the centre. The initiatives are different doors out of one idea: work that makes ordinary life more possible where heat, materials and daily use all matter. Studio COKA leads, because a first visit has to explain the practice. ELEvated and The Effective Architect sit beside it as making and teaching. Speaking is the public door. AKO Alliance and Alive and Free are grouped as work with young people, and kept apart from fees and products so education and faith are not sold as services. A final directory sends each visitor on by intent, not by a grid of equal logos.

The page is an editorial, not a startup template: warm paper, ink, a single clay accent, Fraunces for headlines and Outfit for the interface. An airflow diagram, low inlet, high outlet, is the signature drawing, because that is the idea behind the practice. Photographs are temporary studies of light, shade and material. They are not a record of completed work. Built with React on Vite and Tailwind CSS v4. Two routes: the landing page, and these notes.`;

export const aiProduct = `Studio Notes is a study companion for The Effective Architect.

It serves architects and built-environment professionals who learn with TEA. They ask a practice question in plain language. The tool answers only from TEA’s own lessons and notes, shows the passage it used, and suggests one exercise for the next project. It does not draw, calculate structure, or claim that a design meets code.

Teaching about hot-climate design and careers is scattered. General chat tools invent precedents and sound more certain than the source. A locked companion makes TEA useful between published lessons.

Someone asks, for example, how to explain high-level openings to a client who wants air-conditioning everywhere. Studio Notes returns a short explanation, two or three citations, and a prompt to test the idea on a room they are drawing.

The first version is retrieval-augmented generation. A hosted model with reliable instruction-following, Claude or GPT, via API, answers from embeddings of a curated TEA corpus the team has the right to use. If retrieval finds nothing, the tool says so. The MVP is one chat screen, citation chips, a way for an editor to flag a bad answer, and a simple access code. Client drawings are never uploaded. Questions are logged only to see gaps in the teaching.

The model can still misread a passage, so sources stay visible and a person can retract an answer. It refuses structural design, stamped advice, and questions about children or faith. Those sit with other initiatives and need different safeguards. Studio Notes is a tutor for published teaching, not an architect of record.`;

export const analyticsNote = `Judge the site by whether the right visitor reaches a next step, not by traffic alone.

Track sessions, source and device; scroll depth through the practice, the pathway list and the enquiry; clicks on each pathway and outbound link; enquiry starts, field errors and completions; and Core Web Vitals, LCP, INP and CLS.

Use Plausible or Fathom for privacy-light traffic, Google Analytics 4 if funnels are required, and a few Clarity recordings for friction. Name each event once, so a pathway click is not counted as a page view. Each month, change one thing: move a path visitors never reach, shorten a form that dies on mobile, or cut a section nobody sees. Compare that same event before and after.

Five thousand visits and five enquiries is a 0.1 percent completion. I would not redesign first. I would separate poor traffic from a broken page: source, place, and whether people match a client, student, organiser or casual reader. Then the funnel, who reached the enquiry, who started it, and where they stopped, split by phone and desktop. I would check that submit actually fires, that no field fails in silence, and that the page matches the link that brought people in. I would watch five recordings, fix the worst break, rewrite the main call to action so it names the outcome, and hold that change for two weeks before touching the rest.`;
