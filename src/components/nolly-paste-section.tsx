import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Leaf, WheatOff, Heart } from "lucide-react";

const nollyHighlights = [
  {
    icon: Leaf,
    title: "House-Made",
    description: "Made in small batches right here at Cocohodo.",
  },
  {
    icon: WheatOff,
    title: "Gluten-Free",
    description: "Naturally gluten-free and preservative-free.",
  },
  {
    icon: Heart,
    title: "Vegan",
    description: "100% plant-based and vegan-friendly.",
  },
];

export default function NollyPasteSection() {
  return (
    <section id="nolly" className="bg-background py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/10 rounded-3xl blur-xl" />
            <div className="relative rounded-3xl overflow-hidden elegant-shadow">
              <Image
                src="/Pictures/Nolly Section/Nolly open jar.jpeg"
                alt="Nolly premium pistachio paste open jar"
                width={700}
                height={500}
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent font-bold tracking-widest uppercase text-sm">House-Made Favorite</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Meet Nolly, Our House-Made Pistachio Paste
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Made in small batches right here at Cocohodo, Nolly is the rich, luxurious pistachio paste behind your favorite treats. Moreover, it&rsquo;s gluten-free, preservative-free, and vegan!
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Love it so much you want a jar of your own? Grab one in-store, or order online through Amazon and have it delivered straight to your door.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {nollyHighlights.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-secondary/50 border border-border hover:border-accent/40 transition-all duration-300 elegant-shadow text-center"
                >
                  <item.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent text-primary font-bold px-8 hover:bg-accent/90 shadow-lg transition-all duration-300 hover:scale-105"
            >
              <a
                href="https://a.co/d/duKWMUr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Shop Nolly on Amazon
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
