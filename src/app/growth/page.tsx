import { BlockRenderer, type Block } from "@/components/blocks/BlockRenderer";

const MOCK_GROWTH_BLOCKS: Block[] = [
  {
    __component: "blocks.hero",
    id: 1,
    headline: "GROW YOUR CAREER WITH US",
    subheadline: "We are building a culture of continuous learning and growth. Join us.",
    ctaText: "View Open Roles",
    ctaLink: "/careers",
    layout: "center", 
  },
  {
      __component: "blocks.media-text-split",
      id: 2,
      title: "INVESTING IN YOUR FUTURE",
      content: "We don't just offer jobs, we offer careers. We are committed to helping you develop your skills and achieve your career goals. Whether you are just starting out or look for the next challenge, we provide the resources and support you need to succeed.",
      mediaUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
      alignment: "left", // Text left, Image right (MediaTextSplit default behavior puts media depending on align, need to verify)
      // Actually MediaTextSplit alignment prop usually dictates text position. alignment="left" means text on left.
  },
  {
    __component: "blocks.feature-grid",
    id: 3,
    title: "LEARNING & DEVELOPMENT",
    subtitle: "Expand your potential with our comprehensive learning programs.",
    items: [
      { icon: "briefcase", title: "Continuous Learning", description: "Access to courses and workshops to enhance your skills." },
      { icon: "briefcase", title: "Mentoring & Feedback", description: "Regular 1:1s and feedback sessions to help you grow." }, // using briefcase as placeholder for custom icons
      { icon: "briefcase", title: "Career Growth Paths", description: "Clear pathways for advancement within the company." },
      { icon: "briefcase", title: "Knowledge Sharing", description: "Weekly sessions to share insights and learnings." },
    ],
    variant: "icon-minimal",
    columns: 4,
  },
  {
    __component: "blocks.feature-grid",
    id: 4,
    title: "COMPREHENSIVE BENEFITS",
    subtitle: "Your health, wealth, and well-being are important to us.",
    items: [
        { icon: "shield", title: "Health & Wellness", description: "Comprehensive health insurance for you and your family." },
        { icon: "briefcase", title: "Work-Life Support", description: "Flexible working hours and remote work options." },
        { icon: "briefcase", title: "Financial Support", description: "Competitive salary and performance bonuses." },
        { icon: "users", title: "Team & Community", description: "Regular team outings and social events." },
        { icon: "briefcase", title: "Career Resources", description: "Budget for books, courses, and conferences." },
        { icon: "briefcase", title: "Relocation Assistance", description: "Support for those moving to join our team." },
    ],
    variant: "icon-card",
    columns: 3,
  },
  {
    __component: "blocks.hero",
    id: 5,
    headline: "READY TO GROW WITH US?",
    subheadline: "Start your journey today.",
    ctaText: "View Open Roles",
    ctaLink: "/careers",
    layout: "center", // Lower CTA
  },
];

export default function GrowthPage() {
  return (
    <main>
      <BlockRenderer blocks={MOCK_GROWTH_BLOCKS} />
    </main>
  );
}
