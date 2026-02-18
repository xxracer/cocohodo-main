import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image');

  return (
    <section id="hero" className="relative h-[75vh] min-h-[500px] w-full p-0">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white" style={{ textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000' }}>
        <h1 className="text-4xl font-bold md:text-6xl">
          Where Stories & Coffee Blend in Katy
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/90">
          The Best Specialty Coffee & Authentic Korean Walnut Pastries in Katy, TX.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" variant="outline" className="rounded-full bg-white text-primary border-black border-2 font-bold hover:bg-gray-200" style={{ textShadow: 'none' }}>
            <a href="#">Order Now</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
