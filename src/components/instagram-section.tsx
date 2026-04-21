import Link from 'next/link';
import { Instagram as InstagramIcon, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Instagram Post IDs extracted from user provided URLs
const instagramPostIds = [
  'DTa-lhVku_j',
  'DS0JHw5kl37',
  'DSlFpYJkuGQ',
  'DUygxi6gQHV',
  'DUjiYJ8DaRq',
  'DUVrV8BDboJ',
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="bg-gradient-to-b from-background to-secondary/30 walnut-pattern py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium tracking-widest uppercase text-sm block">Connect</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 gradient-text inline-flex items-center gap-3">
            <InstagramIcon className="w-10 h-10" />
            Follow Our Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Stay updated with our latest creations, events, and community moments.
          </p>
          <div className="greek-divider max-w-md mx-auto mb-8" />
          <Button asChild variant="outline" className="rounded-full border-primary/30 hover:bg-primary hover:text-white transition-colors">
            <Link
              href="https://www.instagram.com/cocohodokaty/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              @cocohodokaty
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPostIds.map((id, index) => (
            <Link
              key={id}
              href={`https://www.instagram.com/p/${id}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden elegant-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Instagram embed as background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all" />
              <iframe
                src={`https://www.instagram.com/p/${id}/embed`}
                className="w-full h-full scale-110 group-hover:scale-100 transition-transform duration-500"
                style={{ border: 'none', overflow: 'hidden' }}
                allowTransparency={true}
                allow="encrypted-media"
                title={`Instagram Post ${id}`}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <InstagramIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground text-sm">
            Tag us in your photos with{' '}
            <span className="font-semibold text-primary">#CocohodoKaty</span>
          </p>
        </div>
      </div>
    </section>
  );
}
