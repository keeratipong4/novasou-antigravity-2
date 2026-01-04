import { BlockRenderer, type Block } from "@/components/blocks/BlockRenderer";

const MOCK_LIFE_BLOCKS: Block[] = [
  {
    __component: "blocks.hero",
    id: 1,
    headline: "Life at Novasou",
    subheadline: "More than just a workplace. It's a community of creators, thinkers, and explorers.",
    ctaText: "Join Us",
    ctaLink: "/careers",
  },
  {
    __component: "blocks.gallery-grid",
    id: 2,
    title: "Our Moments",
    items: [
        { src: "", alt: "Team Retreat 2024", span: "wide" },
        { src: "", alt: "Hackathon" },
        { src: "", alt: "Office Dog" },
        { src: "", alt: "Design Workshop", span: "tall" },
        { src: "", alt: "Friday Networking" },
        { src: "", alt: "Coffee Break" }
    ]
  },
  {
    __component: "blocks.testimonials",
    id: 3,
    title: "Employee Voices",
    items: [
        { quote: "I've never felt more supported in my career growth.", author: "David Kim", role: "Software Engineer" },
        { quote: "The flexibility and trust here allow me to do my best work.", author: "Sarah Jenkins", role: "Marketing Specialist" }
    ]
  },
   {
    __component: "blocks.feature-grid",
    id: 4,
    title: "Core Values",
    subtitle: "What guides us every day.",
    items: [
      { icon: "users", title: "Empathy First", description: "We design for people, not just users." },
      { icon: "layers", title: "Transparency", description: "Open communication builds trust." },
      { icon: "zap", title: "Bias for Action", description: "We move fast and learn from doing." },
    ],
  },
];

export default function LifeAtPage() {
  return (
    <main>
      <BlockRenderer blocks={MOCK_LIFE_BLOCKS} />
    </main>
  );
}
