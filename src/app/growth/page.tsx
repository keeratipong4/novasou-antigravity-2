import { BlockRenderer, type Block } from "@/components/blocks/BlockRenderer";

const MOCK_GROWTH_BLOCKS: Block[] = [
  {
    __component: "blocks.hero",
    id: 1,
    headline: "Grow With Us",
    subheadline: "Unlock your potential through our comprehensive Learning & Development programs.",
    ctaText: "See Open Roles",
    ctaLink: "/careers",
  },
  {
    __component: "blocks.rich-text-section",
    id: 2,
    content: `
      <h2>Invest in Your Future</h2>
      <p>We provide a clear path for career progression, mentorship from industry veterans, and resources to help you master new skills.</p>
    `
  },
  {
    __component: "blocks.media-text-split",
    id: 3,
    title: "Continuous Learning",
    content: "Access to premium courses, conferences, and internal workshops.",
    mediaUrl: "", 
    alignment: "right",
  },
  {
    __component: "blocks.testimonials",
    id: 4,
    title: "Employee Success Stories",
    items: [
        { quote: "Novasou gave me the platform to transition from Junior Dev to Team Lead in record time.", author: "James Chen", role: "Engineering Lead" },
        { quote: "The mentorship program here is unlike any other.", author: "Lisa Wang", role: "Product Designer" }
    ]
  }
];

export default function GrowthPage() {
  return (
    <main>
      <BlockRenderer blocks={MOCK_GROWTH_BLOCKS} />
    </main>
  );
}
