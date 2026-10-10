export const intents = [
  { id: "studio", label: "A project with Studio COKA" },
  { id: "elevated", label: "ELEvated - furniture and objects" },
  { id: "tea", label: "The Effective Architect" },
  { id: "speaking", label: "A speaking invitation" },
  { id: "ako", label: "AKO Alliance" },
  { id: "alive", label: "Alive and Free" },
  { id: "writing", label: "Research, writing and media" },
  { id: "other", label: "Something else" },
] as const;

export type IntentId = (typeof intents)[number]["id"];

export function isIntent(value: string): value is IntentId {
  return intents.some((item) => item.id === value);
}

/** Public destinations only. Everything else stays on this site until a URL exists. */
export const external = {
  studio: "https://www.studiocoka.com/",
  teaList: "https://the-effective-architect.kit.com/c2ddfe98fc",
  tedx: "https://www.youtube.com/watch?v=d44LY7rv_4k",
  instagram: "https://www.instagram.com/crystalkizor/",
  x: "https://x.com/crystal_kizor",
  linkedin: "https://www.linkedin.com/in/crystal-kizor",
} as const;

export const nav = [
  { label: "Studio", hash: "practice" },
  { label: "ELEvated", hash: "making" },
  { label: "TEA", hash: "teaching" },
  { label: "Pathways", hash: "pathways" },
] as const;

export const services = [
  {
    index: "01",
    title: "Architecture",
    text: "Buildings shaped around climate, use and place, thoughtfully designed to perform without leaning on constant cooling.",
  },
  {
    index: "02",
    title: "Interior design",
    text: "Rooms people can actually stay in: light, air, materials and the way a day is lived.",
  },
  {
    index: "03",
    title: "Construction",
    text: "The studio builds as well as draws, so the idea and the finished space stay in one conversation.",
  },
] as const;

export type Pathway = {
  who: string;
  detail: string;
  action: string;
  event: string;
} & (
  | { kind: "external"; href: string }
  | { kind: "enquire"; intent: IntentId }
  | { kind: "hash"; hash: string }
);

export const pathways: Pathway[] = [
  {
    kind: "external",
    href: external.studio,
    who: "You need a building, an interior, or a build",
    detail: "Clients and collaborators for architecture, interiors and construction.",
    action: "Visit Studio COKA",
    event: "pathway_studio",
  },
  {
    kind: "enquire",
    intent: "elevated",
    who: "You are looking for furniture and objects",
    detail: "Functional pieces rooted in African context, materials and ideas.",
    action: "Ask about ELEvated",
    event: "pathway_elevated",
  },
  {
    kind: "external",
    href: external.teaList,
    who: "You practise in the built environment",
    detail: "Architects and professionals who want to learn, grow and build better careers.",
    action: "Join the TEA list",
    event: "pathway_tea",
  },
  {
    kind: "enquire",
    intent: "speaking",
    who: "You are planning a talk or a room full of people",
    detail: "Architecture, climate-responsive design, African cities, entrepreneurship.",
    action: "Invite Crystal to speak",
    event: "pathway_speaking",
  },
  {
    kind: "enquire",
    intent: "ako",
    who: "You care about education for children and young people",
    detail: "AKO Alliance works on access and opportunity.",
    action: "Learn about AKO",
    event: "pathway_ako",
  },
  {
    kind: "enquire",
    intent: "alive",
    who: "You are walking with young people in faith",
    detail: "Alive and Free is a Christian youth movement.",
    action: "Discover Alive and Free",
    event: "pathway_alive",
  },
  {
    kind: "hash",
    hash: "writing",
    who: "You came for her thinking",
    detail: "Research, writing, media and ideas under her own name.",
    action: "Read and watch",
    event: "pathway_writing",
  },
];
