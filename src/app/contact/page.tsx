import { BlockRenderer, type Block } from "@/components/blocks/BlockRenderer";

const MOCK_CONTACT_BLOCKS: Block[] = [
  {
    __component: "blocks.hero",
    id: 1,
    headline: "CONTACT US",
    subheadline: "", // Image shows just "CONTACT US", no subheadline visible in header part, or maybe it's cleaner.
    // However, the standard Hero component has padding. I might need to adjust Hero to allow minimal text/height if needed.
    // For now I'll stick to standard Hero but maybe empty subheadline.
    ctaText: "", // No CTA in hero
  },
  {
    __component: "blocks.contact-form",
    id: 2,
    emailRecipient: "info@novasou.com",
  },
];

export default function ContactPage() {
  return (
    <main>
      <BlockRenderer blocks={MOCK_CONTACT_BLOCKS} />
    </main>
  );
}
