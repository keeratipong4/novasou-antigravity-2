import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlockRenderer, type Block } from "@/components/blocks/BlockRenderer";
import { fetchAPI } from "@/api/strapi";
import { transformBlock } from "@/utils/blocks";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getPageData(slug: string) {
  try {
    const path = "/pages";
    const urlParamsObject = {
      filters: { slug },
      populate: {
        seo: {
          populate: '*'
        },
        blocks: {
          on: {
            "blocks.hero": { populate: { image: true, links: true } },
            "blocks.media-text-split": { populate: { media: true } },
            "blocks.feature-grid": { populate: { items: { populate: { image: true } } } },
            "blocks.testimonials": { populate: { items: { populate: { avatar: true } } } },
          },
        },
      },
    };
    const response = await fetchAPI(path, urlParamsObject, { cache: "no-store" });
    console.log(`Fetching page for slug: ${slug}`, response?.data?.[0] ? "Found" : "Not Found");
    return response?.data?.[0];
  } catch (error) {
    console.error("Error fetching page data:", error);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pageData = await getPageData(slug);
  if (!pageData) return {};

  const seo = pageData.seo;
  return {
    title: seo?.metaTitle || pageData.title,
    description: seo?.metaDescription,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const pageData = await getPageData(slug);

  if (!pageData) {
    notFound();
  }

  const blocks = pageData.blocks 
    ? pageData.blocks.map(transformBlock) 
    : [];

  return (
    <main>
      <BlockRenderer blocks={blocks} />
    </main>
  );
}
