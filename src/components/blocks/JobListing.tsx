"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  slug: string;
};

type JobListingProps = {
  jobs?: Job[];
};

// Mock data if not provided (or default empty)
const MOCK_JOBS: Job[] = [
  { id: "1", title: "Senior Frontend Engineer", department: "Engineering", location: "Remote", type: "Full-time", slug: "senior-frontend-engineer" },
  { id: "2", title: "Product Designer", department: "Design", location: "Bangkok", type: "Full-time", slug: "product-designer" },
  { id: "3", title: "Backend Developer", department: "Engineering", location: "Bangkok", type: "Full-time", slug: "backend-developer" },
  { id: "4", title: "Product Manager", department: "Product", location: "Remote", type: "Contract", slug: "product-manager" },
];

export function JobListing({ jobs = MOCK_JOBS }: JobListingProps) {
  const [filter, setFilter] = useState("All");
  
  const departments = ["All", ...Array.from(new Set(jobs.map((j) => j.department)))];
  
  const filteredJobs = filter === "All" 
    ? jobs 
    : jobs.filter((job) => job.department === filter);

  return (
    <section className="py-20 bg-bg-light min-h-[60vh]">
      <Container>
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setFilter(dept)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === dept
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-text-secondary hover:bg-gray-100"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                    <motion.div
                        key={job.id}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4"
                    >
                        <div>
                        <h3 className="font-display text-xl font-bold text-foreground">{job.title}</h3>
                        <div className="flex gap-4 mt-2 text-sm text-text-secondary">
                            <span className="bg-gray-100 px-3 py-1 rounded-full">{job.department}</span>
                            <span className="flex items-center gap-1">• {job.location}</span>
                            <span className="flex items-center gap-1">• {job.type}</span>
                        </div>
                        </div>
                        <Button variant="secondary" size="sm" href={`/careers/${job.slug}`}>
                        View Details
                        </Button>
                    </motion.div>
                ))
            ) : (
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="text-center py-20 text-text-secondary"
                >
                    <p>No open positions in this department yet.</p>
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
