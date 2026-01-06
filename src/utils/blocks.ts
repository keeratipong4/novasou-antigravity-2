import { type Block } from "@/components/blocks/BlockRenderer";
import { getStrapiMedia } from "@/api/strapi";

export function transformBlock(block: any): Block {
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
