import React from "react";
import { Hero } from "@/components/blocks/Hero";
import { FeatureGrid } from "@/components/blocks/FeatureGrid";
import { MediaTextSplit } from "@/components/blocks/MediaTextSplit";
import { StatsRow } from "@/components/blocks/StatsRow";
import { RichTextSection } from "@/components/blocks/RichTextSection";
import { TeamGrid } from "@/components/blocks/TeamGrid";
import { Testimonials } from "@/components/blocks/Testimonials";
import { JobListing } from "@/components/blocks/JobListing";
import { ContactForm } from "@/components/blocks/ContactForm";
import { GalleryGrid } from "@/components/blocks/GalleryGrid";

// Define a union type for all possible blocks
export type Block = 
  | { __component: "blocks.hero"; id: number; headline?: string; subheadline?: string; ctaText?: string; ctaLink?: string; backgroundImage?: string; layout?: "center" | "split"; image?: string }
  | { __component: "blocks.feature-grid"; id: number; title?: string; subtitle?: string; items: any[]; variant?: "icon-card" | "image-card" | "icon-minimal"; columns?: 2 | 3 | 4 | 5 }
  | { __component: "blocks.media-text-split"; id: number; title: string; content: string; mediaUrl: string; alignment?: "left" | "right" }
  | { __component: "blocks.stats-row"; id: number; stats: any[] }
  | { __component: "blocks.rich-text-section"; id: number; content: string }
  | { __component: "blocks.team-grid"; id: number; title?: string; members: any[] }
  | { __component: "blocks.testimonials"; id: number; title?: string; items: any[]; layout?: "slider" | "grid" }
  | { __component: "blocks.job-listing"; id: number; jobs?: any[] }
  | { __component: "blocks.contact-form"; id: number; emailRecipient?: string }
  | { __component: "blocks.gallery-grid"; id: number; title?: string; items: any[] };

type BlockRendererProps = {
  blocks: Block[];
};

export function BlockRenderer({ blocks }: BlockRendererProps) {
  if (!blocks) return null;

  return (
    <div className="flex flex-col w-full">
      {blocks.map((block, index) => {
        switch (block.__component) {
          case "blocks.hero":
            return <Hero key={`${block.__component}-${index}`} {...block} />;
          case "blocks.feature-grid":
             return <FeatureGrid key={`${block.__component}-${index}`} {...block} />;
          case "blocks.media-text-split":
             return <MediaTextSplit key={`${block.__component}-${index}`} {...block} />;
          case "blocks.stats-row":
             return <StatsRow key={`${block.__component}-${index}`} {...block} />;
          case "blocks.rich-text-section":
             return <RichTextSection key={`${block.__component}-${index}`} {...block} />;
          case "blocks.team-grid":
             return <TeamGrid key={`${block.__component}-${index}`} {...block} />;
          case "blocks.testimonials":
             return <Testimonials key={`${block.__component}-${index}`} {...block} />;
          case "blocks.job-listing":
             return <JobListing key={`${block.__component}-${index}`} {...block} />;
          case "blocks.contact-form":
             return <ContactForm key={`${block.__component}-${index}`} {...block} />;
          case "blocks.gallery-grid":
             return <GalleryGrid key={`${block.__component}-${index}`} {...block} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
