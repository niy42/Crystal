export function wordCount(content: string | object): number {
  const collect = (value: unknown): string[] => {
    if (typeof value === "string") return [value];
    if (Array.isArray(value)) return value.flatMap(collect);
    if (value && typeof value === "object") return Object.values(value).flatMap(collect);
    return [];
  };

  return collect(content).join(" ").trim().split(/\s+/).filter(Boolean).length;
}

export const designNote = `Crystal is the centre. The initiatives are different doors out of one idea: work that makes ordinary life more possible where heat, materials and daily use all matter. Studio COKA leads, because a first visit has to explain the practice. ELEvated and The Effective Architect sit beside it as making and teaching. Speaking is the public door. AKO Alliance and Alive and Free are grouped as work with young people, and kept apart from fees and products so education and faith are not sold as services. A final directory sends each visitor on by intent, not by a grid of equal logos.

The page is an editorial, not a startup template: warm paper, ink, a single clay accent, Fraunces for headlines and Outfit for the interface. An airflow diagram, with a low inlet and high outlet, is the signature drawing, because that is the idea behind the practice. Photographs are temporary studies of light, shade and material. They are not a record of completed work. Built with React on Vite and Tailwind CSS v4. Two routes: the landing page, and these notes.`;

export const aiProduct = {
  intro: "Studio Notes is a focused study companion for The Effective Architect (TEA). It helps architects and built-environment professionals put TEA's published lessons into practice between courses and episodes.",
  audience: "Learners ask practical questions in plain language and receive concise, source-grounded explanations they can apply to a current project.",
  experience: [
    "Answer from TEA's own lessons and approved notes, rather than general web knowledge.",
    "Show the source passage or citation behind each answer.",
    "Suggest one exercise or reflection to try on the learner's next project."
  ],
  example: "A learner asks how to explain high-level openings to a client who wants air-conditioning everywhere. Studio Notes gives a short explanation, two or three relevant citations, and a prompt to test the idea against a room they are drawing.",
  approach: "The first version uses retrieval-augmented generation. A hosted model with reliable instruction-following, such as Claude or GPT through an API, answers from a curated TEA corpus that the team has permission to use. If retrieval finds no useful source, the tool says so instead of guessing.",
  mvp: [
    "One focused chat screen",
    "Visible citation chips linked to source material",
    "A way for an editor to flag an inaccurate answer",
    "Simple access-code entry"
  ],
  boundaries: [
    "It does not produce drawings, calculate structures, or claim that a design meets building code.",
    "It does not provide stamped advice or replace an architect of record.",
    "It does not accept client drawings for upload.",
    "It redirects questions about children or faith to the appropriate initiative and safeguards."
  ],
  safeguards: "Questions are logged only to identify gaps in the teaching. Because a model can misread a passage, sources remain visible and a person can retract an answer. The goal is a dependable tutor for published teaching, not an authority that makes professional decisions."
};

export const analyticsNote = {
  principle: "Judge the site by whether the right visitor reaches a useful next step, not by traffic alone.",
  metrics: [
    { title: "Visitor context", detail: "Sessions by source, campaign, device, and audience intent." },
    { title: "Content engagement", detail: "Scroll depth through the practice introduction, pathway list, and enquiry section." },
    { title: "Pathway interest", detail: "Clicks on each initiative, pathway, and outbound link." },
    { title: "Enquiry conversion", detail: "Form starts, field errors, submission attempts, and completed enquiries." },
    { title: "Site performance", detail: "Core Web Vitals: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS)." }
  ],
  tools: [
    { title: "Plausible or Fathom", detail: "Privacy-conscious traffic and referral reporting." },
    { title: "Google Analytics 4", detail: "Use when more detailed conversion funnels are needed." },
    { title: "Microsoft Clarity", detail: "Review a small number of session recordings to spot friction, with privacy settings configured carefully." }
  ],
  review: [
    "Give each meaningful interaction one clearly defined event. Do not count a pathway click as a page view.",
    "Review the same measures monthly and change one thing at a time.",
    "Compare results before and after the change, then keep, revise, or reverse it based on evidence."
  ],
  diagnosis: "If 5,000 visits produce only five enquiries, the completion rate is 0.1%. I would investigate before redesigning the whole site.",
  checks: [
    "Check whether traffic sources and visitor locations match the intended audiences: clients, students, event organisers, or casual readers.",
    "Map the enquiry funnel: who reaches the form, who starts it, and where visitors stop. Compare phone and desktop behaviour.",
    "Confirm that form submission tracking works and that validation errors are visible rather than silent.",
    "Check that the landing page fulfils the promise made by the link or campaign that brought the visitor in.",
    "Review five session recordings, fix the clearest point of friction, and make the main call to action state the outcome.",
    "Hold that single change for two weeks before making another, so the impact can be assessed."
  ]
};
