"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  // Determine navbar styles based on scroll state
  const navbarClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "py-5 bg-transparent"
  );

  const logoClasses = cn(
    "font-display text-2xl font-bold tracking-wider transition-colors",
    isScrolled ? "text-primary" : "text-white"
  );

  // Link colors: White when transparent (top), Dark when scrolled
  const linkClasses = (isActive: boolean) =>
    cn(
      "text-sm font-semibold transition-colors hover:text-primary-light",
      isScrolled
        ? (isActive ? "text-primary font-bold" : "text-foreground hover:text-primary")
        : (isActive ? "text-white font-bold underline decoration-2 underline-offset-4" : "text-white/90 hover:text-white")
    );

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={navbarClasses}>
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={logoClasses}>
          NOVASOU
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClasses(pathname === link.href)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant={isScrolled ? "primary" : "secondary"}
            size="sm"
            className={cn(
               !isScrolled && "border-white/50 text-white hover:bg-white/10"
            )}
            href="/contact"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden p-2 transition-colors",
            isScrolled ? "text-foreground" : "text-white"
          )}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-x-0 top-[60px] p-4 bg-white shadow-xl md:hidden transition-all duration-300 ease-in-out origin-top",
          isMobileMenuOpen
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-lg font-medium p-2 rounded-md hover:bg-gray-50",
                pathname === link.href ? "text-primary" : "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" className="w-full justify-center">
             Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
