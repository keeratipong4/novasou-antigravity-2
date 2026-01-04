import { BlockRenderer, type Block } from "@/components/blocks/BlockRenderer";

const MOCK_CAREERS_BLOCKS: Block[] = [
  {
    __component: "blocks.hero",
    id: 1,
    headline: "Join the Revolution",
    subheadline: "Help us build the next generation of digital products. We're hiring dreamers, doers, and creators.",
    ctaText: "View Positions",
    ctaLink: "#positions",
  },
  {
    __component: "blocks.job-listing",
    id: 2,
    // in real app, we might pass pre-fetched jobs here or let component fetch
  },
];

export default function CareersPage() {
  return (
    <main>
      <BlockRenderer blocks={MOCK_CAREERS_BLOCKS} />
    </main>
  );
}
