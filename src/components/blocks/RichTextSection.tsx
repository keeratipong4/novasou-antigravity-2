import React from "react";
import { Container } from "@/components/ui/container";

type RichTextSectionProps = {
  content: string; // Markdown or HTML string
};

export function RichTextSection({ content }: RichTextSectionProps) {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="prose prose-lg max-w-4xl mx-auto text-foreground">
          {/* In real app, use react-markdown or similar */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </Container>
    </section>
  );
}
