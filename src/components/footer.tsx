import Image from 'next/image';
import Link from 'next/link';
import BusinessHours from './business-hours';
import FooterContactForm from './footer-contact-form';
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/cocohodokaty' },
    { name: 'Facebook', icon: Facebook, href: '#' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Contact', href: '#footer-contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-secondary/80 border-t border-border relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 walnut-pattern opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl px-6 py-16 relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center group">
              <Image
                src="https://static.wixstatic.com/media/c5947c_8cfb0ad6973445e3aea4f437c94e314f~mv2.png"
                alt="Cocohodo Katy Logo"
                width={160}
                height={45}
                className="object-contain transition-opacity group-hover:opacity-80"
              />
            </a>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Where Stories & Coffee Blend. A Korean-inspired cafe bringing warmth and community to Katy, Texas.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-background border border-border hover:border-accent hover:bg-accent/10 transition-all group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/0 group-hover:bg-accent transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>1645 Winding Hollow Dr #201<br />Katy, TX 77450</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+18323215849" className="hover:text-primary transition-colors">(832) 321-5849</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:contact@cocohodokaty.com" className="hover:text-primary transition-colors">contact@cocohodokaty.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Hours</h3>
            </div>
            <BusinessHours className="text-sm" />
          </div>
        </div>

        {/* Bottom section with form */}
        <div className="border-t border-border pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Newsletter / Events */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Catering & Events</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Bring Cocohodo to your next event! We offer catering for weddings, corporate events, and parties.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full bg-accent/10 text-primary text-xs font-medium">
                  🥐 Walnut Pastry Boxes
                </span>
                <span className="px-3 py-1.5 rounded-full bg-accent/10 text-primary text-xs font-medium">
                  ☕ Coffee Bar
                </span>
                <span className="px-3 py-1.5 rounded-full bg-accent/10 text-primary text-xs font-medium">
                  🎉 Private Events
                </span>
              </div>
            </div>

            {/* Contact Form */}
            <FooterContactForm />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground/80">
              &copy; {currentYear} Cocohodo Katy. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground/80">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
