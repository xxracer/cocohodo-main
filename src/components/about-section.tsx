import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-image');

  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground">
              Cocohodo Katy is more than just a coffee shop; it's a revival of the classic library cafe, infused with a touch of Korean heritage. We began with a simple vision: to create a space where the aroma of freshly brewed coffee and baked pastries mingles with the quiet rustle of turning pages.
            </p>
            <p className="text-lg text-muted-foreground">
              Our name, Cocohodo, pays homage to the beloved Korean walnut pastry, a treat that embodies warmth and delightful surprise. We bring that same spirit to every cup we pour and every event we host, creating a haven for our community in Katy.
            </p>
          </div>
          <div className="flex justify-center">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
