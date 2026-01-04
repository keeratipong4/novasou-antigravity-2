"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Mail, MapPin, ChevronDown } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  role: z.string().optional(),
  message: z.string().optional(), // Made optional to match image focus, but usually required.
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    alert("Message sent!");
    reset();
  };

  return (
    <section className="py-20 bg-[#F4F4F4] relative">
       {/* Background pattern dots could go here if needed */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Info Side */}
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="pt-4"
          >
            <p className="text-text-secondary text-lg mb-12 leading-relaxed">
              Have a question, an idea or a hiring need? Whether you're a company or a candidate, we'd love to hear from you. Fill out the form and we'll get back to you as soon as we can.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#04184C] rounded-lg flex items-center justify-center text-white shrink-0 mr-6 shadow-md">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#04184C]">Email</h3>
                  <a href="mailto:info@novasou.com" className="text-text-secondary hover:text-primary transition-colors block">
                    info@novasou.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                 <div className="w-12 h-12 bg-[#04184C] rounded-lg flex items-center justify-center text-white shrink-0 mr-6 shadow-md">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#04184C]">Address</h3>
                  <p className="text-text-secondary max-w-xs leading-relaxed">
                    SamYan Mitrtown Office 944 Rama IV Road, Wang Mai, Pathum Wan Bangkok 10330, Thailand
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full aspect-[16/9] bg-gray-200 rounded-xl overflow-hidden relative shadow-inner">
               <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=13.732,100.53&zoom=14&size=600x300&sensor=false')] bg-cover bg-center grayscale opacity-60 mix-blend-multiply" />
               {/* Fallback visual if no API key/internet */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400 font-medium">Map View</span>
               </div>
               {/* Pin */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary">
                  <MapPin size={32} fill="currentColor" />
               </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
          >
            <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-[#04184C] mb-2">Connect With Us</h3>
                <p className="text-text-secondary text-sm">We'd love to hear from you!</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                    id="name"
                    {...register("name")}
                    className="w-full px-0 py-3 border-b border-gray-200 focus:border-primary focus:outline-none transition-colors bg-transparent placeholder:text-gray-400 text-sm"
                    placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full px-0 py-3 border-b border-gray-200 focus:border-primary focus:outline-none transition-colors bg-transparent placeholder:text-gray-400 text-sm"
                    placeholder="Email address"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

               <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                 <input
                  id="subject"
                  {...register("subject")}
                   className="w-full px-0 py-3 border-b border-gray-200 focus:border-primary focus:outline-none transition-colors bg-transparent placeholder:text-gray-400 text-sm"
                  placeholder="Subject"
                />
                 {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
              </div>

              <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Role</label>
                  <div className="relative">
                      <select 
                        {...register("role")}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-primary/10 text-sm text-foreground"
                      >
                          <option value="">Select an option</option>
                          <option value="company">I'm a company</option>
                          <option value="candidate">I'm a candidate</option>
                          <option value="other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                  </div>
              </div>

               {/* Message field implicit in standard contact forms, though not clearly detailed in crop. keeping minimal. */}
               <div>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/10 text-sm resize-none mt-2"
                    placeholder="Write your message here..."
                  />
               </div>

              <Button type="submit" className="w-full md:w-auto rounded-full bg-[#284BE3] hover:bg-blue-700 px-8 py-3 h-auto text-sm font-medium" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
