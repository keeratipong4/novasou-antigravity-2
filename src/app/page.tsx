import { BlockRenderer, type Block } from "@/components/blocks/BlockRenderer";
import { fetchAPI, getStrapiMedia } from "@/api/strapi";

const MOCK_HOME_BLOCKS: Block[] = [
  {
    __component: "blocks.hero",
    id: 1,
    headline: "BUILD GLOBAL PRODUCTS - WORK FROM THAILAND",
    subheadline: "We empower global products with our exceptional teams based in Thailand. Join us to build world-class software.",
    ctaText: "Discover More",
    ctaLink: "/growth",
    layout: "split",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop", // Placeholder
  },
  {
    __component: "blocks.feature-grid",
    id: 2,
    title: "WHY JOIN NOVASOU?",
    subtitle: "We build tailored teams that integrate seamlessly with your organization.",
    items: [
      { icon: "globe", title: "Culture & Community", description: "Join a vibrant community of tech enthusiasts and innovators." },
      { icon: "users", title: "Growth & Learning", description: "Access to world-class mentorship and continuous learning resources." },
      { icon: "zap", title: "Global Impact", description: "Work on products that reach millions of users worldwide." },
      { icon: "shield", title: "Salary & Benefits", description: "Competitive compensation packages and comprehensive health benefits." },
    ],
    variant: "icon-card",
    columns: 4,
  },
  {
    __component: "blocks.feature-grid",
    id: 3,
    title: "IS NOVASOU FOR ME?",
    items: [
      { 
          title: "Experienced Professionals", 
          description: "Take your career to the next level with challenging projects.",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
      },
      { 
          title: "Aspiring Technologists", 
          description: "Start your journey with strong mentorship and guidance.",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
      },
    ],
    variant: "image-card",
    columns: 2,
  },
  {
    __component: "blocks.feature-grid",
    id: 4,
    title: "ROLES YOU'LL FIND AT NOVASOU",
    items: [
        { icon: "laptop", title: "Engineering", description: "Frontend, Backend, Fullstack, Mobile" },
        { icon: "briefcase", title: "Product & Design", description: "PM, PO, UI/UX Designer" },
        { icon: "layers", title: "QA & Testing", description: "Manual, Automation, SDET" },
        { icon: "shield", title: "DevOps & Cloud", description: "AWS, Azure, GCP, CI/CD" },
        { icon: "users", title: "HR & People", description: "Recruitment, People Ops" },
    ],
    variant: "icon-minimal",
    columns: 5,
  },
  {
    __component: "blocks.media-text-split",
    id: 5,
    title: "LIFE AT NOVASOU",
    content: "Beyond code and screens, we are a community. We believe in work-life balance, fostering creativity through fun activities, and building lasting relationships. From weekly knowledge sharing sessions to annual company retreats, life at Novasou is never dull.",
    mediaUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop",
    alignment: "right",
  },
  {
      __component: "blocks.testimonials",
      id: 6,
      title: "HEAR FROM OUR TEAM",
      layout: "grid",
      items: [
          { quote: "Working at Novasou has been a game changer for my career. The exposure to global projects is unmatched.", author: "Mike T.", role: "Senior Developer", company: "Novasou" },
          { quote: "The culture here is truly supportive. Everyone is willing to help and share their knowledge.", author: "Sarah L.", role: "UX Designer", company: "Novasou" },
      ]
  },
  {
    __component: "blocks.hero",
    id: 8,
    headline: "READY TO MAKE YOUR MARK?",
    subheadline: "Join our team and be part of the global tech scene.",
    ctaText: "See Open Roles",
    ctaLink: "/careers",
    layout: "center", // Bottom CTA is centered
  },
];

async function getStrapiData() {
  try {
    const path = "/home";
    const urlParamsObject = {
      populate: {
        blocks: {
          on: {
            "blocks.hero": {
              populate: {
                image: true,
                links: true,
              },
            },
            "blocks.media-text-split": {
              populate: {
                media: true,
              },
            },
            "blocks.feature-grid": {
              populate: {
                items: {
                  populate: {
                    image: true,
                  },
                },
              },
            },
            "blocks.testimonials": {
              populate: {
                items: {
                  populate: {
                    avatar: true,
                  },
                },
              },
            },
          },
        },
      },
    };
    const response = await fetchAPI(path, urlParamsObject);
    return response?.data?.blocks;
  } catch (error) {
    console.warn("Strapi is not running or unreachable. Falling back to mock data.");
    return null;
  }
}

function transformBlock(block: any): Block {
  // Deep clone to avoid mutating original if needed, or just spread
  const transformed = { ...block };

  // Transform Images in Hero
  if (block.__component === "blocks.hero" && block.image) {
    transformed.image = getStrapiMedia(block.image);
  }

  // Transform Media in MediaTextSplit
  if (block.__component === "blocks.media-text-split" && block.media) {
    transformed.mediaUrl = getStrapiMedia(block.media);
  }

  // Transform Items in Feature Grid
  if (block.__component === "blocks.feature-grid" && Array.isArray(block.items)) {
    transformed.items = block.items.map((item: any) => ({
      ...item,
      image: getStrapiMedia(item.image) || item.image,
    }));
  }

  // Transform Items in Testimonials
  if (block.__component === "blocks.testimonials" && Array.isArray(block.items)) {
      transformed.items = block.items.map((item: any) => ({
          ...item,
          avatar: getStrapiMedia(item.avatar) || undefined
      }));
  }

  return transformed as Block;
}

export default async function Home() {
  const strapiBlocks = await getStrapiData();
  console.log(strapiBlocks);
  const blocks = strapiBlocks 
    ? strapiBlocks.map(transformBlock) 
    : MOCK_HOME_BLOCKS;

  return (
    <main>
      <BlockRenderer blocks={MOCK_HOME_BLOCKS} />
    </main>
  );
}
