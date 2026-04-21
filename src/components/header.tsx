'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'Contact', href: '#footer-contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="https://static.wixstatic.com/media/c5947c_8cfb0ad6973445e3aea4f437c94e314f~mv2.png"
            alt="Cocohodo Katy Logo"
            width={200}
            height={60}
            className="object-contain brightness-0 invert max-h-12 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Buttons - Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-full border-white/40 bg-transparent text-white hover:bg-white hover:text-primary"
          >
            <a
              href="https://www.canva.com/design/DAGWYpV8wDk/34ZOzNepQmP3hHEYQxELfw/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
            >
              <span>Full Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="rounded-full bg-accent text-primary font-semibold hover:bg-accent/90"
          >
            <a href="tel:+18323215849" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-primary">
          <nav className="flex flex-col p-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-base text-white hover:text-accent rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/40 bg-transparent text-white hover:bg-white hover:text-primary"
            >
              <a
                href="https://www.canva.com/design/DAGWYpV8wDk/34ZOzNepQmP3hHEYQxELfw/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center py-6"
              >
                <span>View Full Menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </Button>
            <Button asChild className="rounded-full bg-accent text-primary font-semibold py-6">
              <a href="tel:+18323215849" className="flex items-center gap-2 justify-center">
                <Phone className="w-4 h-4" />
                <span>Call (832) 321-5849</span>
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
