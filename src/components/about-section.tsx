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
      icon: BookOpen,
      title: "Library Atmosphere",
      description: "A quiet haven for study and conversation"
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />

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
                More Than Just a Coffee Shop
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Cocohodo Katy is a revival of the classic library cafe, infused with a touch of Korean heritage.
                We began with a simple vision: to create a space where the aroma of freshly brewed coffee and
                baked pastries mingles with the quiet rustle of turning pages.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Our name, <span className="font-semibold text-primary">Cocohodo</span>, pays homage to the
                beloved Korean walnut pastry (<span className="font-medium italic">Hodo Gwaja</span>), a treat
                that embodies warmth and delightful surprise. We bring that same spirit to every cup we pour
                and every event we host, creating a haven for our community in Katy.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group p-4 rounded-xl bg-background border border-border hover:border-accent/50 transition-all duration-300 elegant-shadow hover:shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <feature.icon className="w-6 h-6 text-accent mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-primary text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Community section with avatars */}
            <div className="pt-4 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary border-2 border-background flex items-center justify-center">
                    <span className="text-[8px] text-white">☕</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background flex items-center justify-center">
                    <span className="text-[8px] text-white">🥐</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary border-2 border-background flex items-center justify-center">
                    <span className="text-[8px] text-white">📚</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background flex items-center justify-center">
                    <span className="text-[8px] text-white">❤️</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-primary text-sm">Join Our Community</p>
                  <p className="text-xs text-muted-foreground">Coffee lovers, students, and friends</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
