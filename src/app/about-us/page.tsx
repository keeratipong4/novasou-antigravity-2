import { BlockRenderer, type Block } from "@/components/blocks/BlockRenderer";
// In real app, we fetchPageData(slug) from Strapi

const MOCK_ABOUT_BLOCKS: Block[] = [
  {
    __component: "blocks.hero",
    id: 1,
    headline: "Our Mission",
    subheadline: "We are on a mission to redefine the digital landscape through innovation, integrity, and impact.",
    ctaText: "Join Our Team",
    ctaLink: "/careers",
  },
  {
    __component: "blocks.rich-text-section", // Need to add to BlockRenderer
    // I missed adding rich-text-section to BlockRenderer too. 
    id: 2,
    content: `
      <h2>Who We Are</h2>
      <p>Novasou is a forward-thinking technology company...</p>
      <h3>Our Story</h3>
      <p>Founded in 2024...</p>
    `
  },
  {
    __component: "blocks.media-text-split",
    id: 3,
    title: "Life at Novasou",
    content: "We foster a culture of continuous learning and growth...",
    mediaUrl: "", 
    alignment: "left",
  },
  {
     // Team Grid - Need to register this too? Or just use manual component here if not in blocks
     // I'll stick to BlockRenderer pattern but I need to register it.
     // For now, I'll put it directly in page or add to renderer.
     // I will add to renderer.
    __component: "blocks.team-grid",
    id: 4,
    members: [
        { name: "Alex Doe", role: "CEO" },
        { name: "Sarah Smith", role: "CTO" },
        { name: "Mike Johnson", role: "Lead Designer" },
        { name: "Emily Davis", role: "Product Manager" }
    ]
  }
];

export default function AboutPage() {
  return (
    <main>
      <BlockRenderer blocks={MOCK_ABOUT_BLOCKS} />
    </main>
  );
}
