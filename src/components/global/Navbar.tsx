"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/constants";

type NavbarProps = {
  links?: {
    id: number | string;
    text: string;
    url: string;
    isExternal: boolean;
  }[];
};

export function Navbar({ links = [] }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Combine static NAV_LINKS with dynamic links from Strapi
  const staticItems = NAV_LINKS.map((link, index) => ({
    id: `static-${index}`,
    text: link.label,
    url: link.href,
    isExternal: false,
  }));

  const navItems = [...staticItems, ...links];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/" className="relative z-50 group">
             <span className={cn(
               "font-display text-2xl font-bold tracking-tight transition-colors duration-300",
               isScrolled ? "text-primary" : "text-white"
             )}>
                Novasou
                <span className="text-secondary ml-1">.</span>
             </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-secondary",
                  isScrolled ? "text-slate-600" : "text-white/90"
                )}
                target={link.isExternal ? "_blank" : undefined}
              >
                {link.text}
              </Link>
            ))}
            <Button
              variant={isScrolled ? "primary" : "secondary"}
              size="sm"
              className={cn(
                 !isScrolled && "border-white/50 text-white hover:bg-white hover:text-primary rounded-full"
              )}
              href="/contact"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={cn(
                  "w-full h-0.5 transition-all duration-300",
                  isScrolled ? "bg-slate-900" : "bg-white",
                   isMobileMenuOpen && "rotate-45 translate-y-2 bg-slate-900"
                )}
              />
              <span
                className={cn(
                  "w-full h-0.5 transition-all duration-300",
                   isScrolled ? "bg-slate-900" : "bg-white",
                   isMobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "w-full h-0.5 transition-all duration-300",
                   isScrolled ? "bg-slate-900" : "bg-white",
                   isMobileMenuOpen && "-rotate-45 -translate-y-2.5 bg-slate-900"
                )}
              />
            </div>
          </button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-0 left-0 right-0 bg-white shadow-xl p-4 pt-24 pb-8 md:hidden rounded-b-3xl"
              >
                <div className="flex flex-col gap-4">
                  {navItems.map((link) => (
                    <Link
                      key={link.id}
                      href={link.url}
                      className="text-lg font-medium text-slate-900 py-2 border-b border-slate-100"
                      target={link.isExternal ? "_blank" : undefined}
                    >
                      {link.text}
                    </Link>
                  ))}
                  <Button href="/contact" className="w-full justify-center rounded-full">
                     Get Started
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </Container>
    </header>
  );
}
