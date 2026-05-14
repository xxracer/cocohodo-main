import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Coffee, BookOpen, Heart, Users } from "lucide-react";

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-image');

  const features = [
    {
      icon: Coffee,
      title: "Artisanal Coffee",
      description: "Ethically sourced beans, roasted to perfection"
    },
    {
      icon: Heart,
      title: "Korean Heritage",
      description: "Authentic recipes passed down through generations"
    }
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-background to-secondary/30 walnut-pattern relative overflow-hidden py-20">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Section header with Greek-inspired styling */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-xs">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-primary">
            A Blend of Cultures
          </h2>
          <div className="greek-divider max-w-md mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image side with elegant frame */}
          <div className="relative order-first lg:order-last">
            {/* Greek revival frame effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl blur-xl" />
            <div className="relative greek-border rounded-2xl overflow-hidden elegant-shadow">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={700}
                  height={500}
                  className="w-full h-auto hover:scale-105 transition-transform duration-700"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-xl p-4 elegant-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-primary">Established</p>
                    <p className="text-xl font-bold text-primary">2024</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-medium text-primary">Location</p>
                    <p className="text-base font-bold text-primary">Katy, TX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                More Than a Coffee Shop
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Cocohodo is more than a place for coffee. We’re a café built around variety, comfort, and community,
                from sweet desserts and savory crepes to sandwiches, ice cream, and specialty coffee drinks.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Whether you’re here for a business meeting, a study session, a family outing, or a quick bite with the kids,
                Cocohodo is a welcoming place for every kind of customer and every kind of craving.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                With sweet, savory, and specialty café favorites all in one place, Cocohodo brings people together
                over good food, good drinks, and a relaxed community vibe.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative p-5 rounded-2xl bg-background/60 backdrop-blur-sm border border-border hover:border-accent/40 transition-all duration-300 elegant-shadow hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-transparent to-accent/0 group-hover:from-accent/10 transition-all duration-500" />
                  <div className="relative z-10">
                    <feature.icon className="w-6 h-6 text-accent mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-bold text-primary text-base mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Rewards Program */}
            <div className="pt-6">
              <div className="relative group p-4 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-accent/30">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary border-2 border-background flex items-center justify-center shadow-sm hover:scale-110 transition-transform cursor-default">
                      <span className="text-sm text-white">☕</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background flex items-center justify-center shadow-sm hover:scale-110 transition-transform cursor-default">
                      <span className="text-sm text-white">🥐</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-primary border-2 border-background flex items-center justify-center shadow-sm hover:scale-110 transition-transform cursor-default">
                      <span className="text-sm text-white">🎁</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background flex items-center justify-center shadow-sm hover:scale-110 transition-transform cursor-default">
                      <span className="text-sm text-white">❤️</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold text-primary text-base">Rewards for Our Regulars</p>
                    <p className="text-sm text-muted-foreground">Ask about our rewards program and membership perks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
