import Link from 'next/link';
import { Instagram as InstagramIcon, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium tracking-widest uppercase text-sm block">Connect</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4 text-primary inline-flex items-center gap-3">
            <InstagramIcon className="w-8 h-8 sm:w-10 sm:h-10" />
            Follow Our Journey
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 px-2">
            Stay updated with our latest creations, community moments, and behind-the-scenes vibes.
          </p>
          <div className="greek-divider max-w-md mx-auto mb-8" />
          <Button asChild variant="outline" className="rounded-full border-primary/30 hover:bg-primary hover:text-white transition-colors">
            <Link
              href="https://www.instagram.com/cocohodokatytx/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              @cocohodokatytx
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Instagram Carousel */}
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {instagramPostIds.map((id, index) => (
              <CarouselItem
                key={id}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div
                  className="group relative rounded-2xl overflow-hidden elegant-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Embedded iframe with cropped header to hide the ugly Follow button */}
                  <div className="relative w-full aspect-square bg-background">
                    <iframe
                      src={`https://www.instagram.com/p/${id}/embed`}
                      className="absolute w-full h-[140%] -top-[40%] left-0 border-0"
                      style={{ border: 'none', overflow: 'hidden' }}
                      allow="encrypted-media"
                      title={`Instagram Post ${id}`}
                    />
                  </div>
                  {/* Click overlay to open the real post */}
                  <Link
                    href={`https://www.instagram.com/p/${id}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center"
                    aria-label={`Open Instagram post ${id}`}
                  >
                    <InstagramIcon className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-xl" />
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 -left-0 top-0 mx-0 h-10 w-10 rounded-full border-primary/30 hover:bg-primary hover:text-white" />
            <CarouselNext className="static translate-y-0 -right-0 top-0 mx-0 h-10 w-10 rounded-full border-primary/30 hover:bg-primary hover:text-white" />
          </div>
        </Carousel>

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
