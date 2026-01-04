import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { NAV_LINKS } from "@/constants";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gradient-start to-gradient-end text-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="font-display text-3xl font-bold tracking-wider">
              NOVASOU
            </Link>
            <p className="text-white/80 max-w-sm">
              Empowering the future of work through innovative technology and human-centric design.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Explore</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                   className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social / Contact Column */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={20} />
              </a>
               <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
            <p className="text-white/60 text-sm">
              Bangkok, Thailand
              <br />
              contact@novasou.com
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
          &copy; {currentYear} Novasou. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
