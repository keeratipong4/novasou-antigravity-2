import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-dark-blue text-white relative overflow-hidden">
       {/* Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
      
      <Container className="relative z-10 text-center">
        <h1 className="font-display text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-primary">
          404
        </h1>
        <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-white/60 text-lg max-w-md mx-auto mb-10">
          The page you are looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        <div className="flex justify-center gap-4">
          <Button href="/" size="lg">Return Home</Button>
          <Button variant="secondary" href="/contact" size="lg" className="border-white/20 text-white hover:bg-white/10">
             Contact Support
          </Button>
        </div>
      </Container>
    </div>
  );
}
