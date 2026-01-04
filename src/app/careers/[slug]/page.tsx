import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, MapPin, Briefcase } from "lucide-react";
import Link from "next/link";

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Await the params
  const { slug } = await params;
  
  // Mock data access matching slug (simplistic)
  const job = {
    title: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: `
      <h2>About the Role</h2>
      <p>We are looking for a talented individual to join our growing team...</p>
      <h3>Responsibilities</h3>
      <ul>
        <li>Build pixel-perfect UIs</li>
        <li>Collaborate with design team</li>
      </ul>
    `
  };

  return (
    <main className="pt-24 pb-20 bg-bg-light">
      <Container>
        <Link href="/careers" className="inline-flex items-center text-text-secondary hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Careers
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="font-display text-4xl font-bold mb-6 text-foreground">{job.title}</h1>
            
            <div className="flex flex-wrap gap-6 mb-8 text-text-secondary border-b border-gray-200 pb-8">
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-primary" />
                {job.department}
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary" />
                {job.location}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                {job.type}
              </div>
            </div>

            <div 
              className="prose prose-lg max-w-none text-text-secondary"
              dangerouslySetInnerHTML={{ __html: job.description }}
            />
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
             <div className="sticky top-24 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
               <h3 className="font-display text-xl font-bold mb-4">Interested?</h3>
               <p className="text-text-secondary mb-6 text-sm">
                 Apply now to join our team of innovators.
               </p>
               <Button className="w-full mb-4">Apply for this Job</Button>
               <p className="text-xs text-center text-gray-400">
                 Please attach your Resume and Cover Letter.
               </p>
             </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
