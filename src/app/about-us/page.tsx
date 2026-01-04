import { BlockRenderer, type Block } from "@/components/blocks/BlockRenderer";

const MOCK_ABOUT_BLOCKS: Block[] = [
  {
    __component: "blocks.hero",
    id: 1,
    headline: "WHERE NORDIC CLARITY MEETS THAI WARMTH",
    subheadline: "Bridging the gap between global expertise and local talent. That is who we are.",
    ctaText: "Join Our Team", // Button visible in header? maybe small 'Explore' button.
    ctaLink: "/careers", 
    layout: "center",
  },
  {
    __component: "blocks.about-intro",
    id: 2,
    leftTitle: "WHO WE ARE",
    leftContent: "<p>Novasou is a boutique tech consultancy based in Bangkok, Thailand. We connect international businesses with exceptional tech talent in Thailand. We focus on transparent, reliable and scalable tech staffing solutions.</p><p>We help people in being their own authentic selves. We create a place where they can grow and thrive.</p>",
    rightTitle: "OUR APPROACH",
    rightContent: "<p>We blend Nordic ways of working — clear expectations, flat hierarchy, and open communication — with Thai hospitality, creativity and 'sanuk' (fun). The result is a unique culture that empowers our teams.</p>",
    imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2574&auto=format&fit=crop",
  },
  {
    __component: "blocks.feature-grid",
    id: 3,
    title: "VALUES THAT GUIDE US",
    subtitle: "Our core values shape every aspect of what we do and how we work together.",
    items: [
        { icon: "briefcase", title: "Innovation & Pragmatism", description: "We solving problems creatively while staying grounded in practical realities." }, // Placeholder icons
        { icon: "users", title: "Trust & Transparency", description: "We believe in being open and honest in all our dealings." },
        { icon: "globe", title: "People & Community", description: "We put people first and foster a strong sense of community." },
    ],
    variant: "icon-card",
    columns: 3,
  },
  {
    __component: "blocks.media-text-split",
    id: 4,
    title: "BRIDGING WORLDS, BUILDING FUTURES",
    content: "We serve as a bridge, connecting the best of Western working culture (structure, clarity) with the best of Thai culture (warmth, adaptability). This unique blend allows us to create specific advantages for our clients and a great workplace for our team.",
    mediaUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop",
    alignment: "right", // Image Left, Text Right -> alignment="right" usually puts TEXT on right.
  },
  {
    __component: "blocks.hero",
    id: 5,
    headline: "SEE YOURSELF AT NOVASOU?",
    subheadline: "Explore roles and find your place in our team.",
    ctaText: "View Open Roles",
    ctaLink: "/careers",
    layout: "center",
  },
];

export default function AboutPage() {
  return (
    <main>
      <BlockRenderer blocks={MOCK_ABOUT_BLOCKS} />
    </main>
  );
}
