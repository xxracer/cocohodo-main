import Image from "next/image";
import { Users, Heart, Calendar } from "lucide-react";

const communityHighlights = [
  {
    icon: Users,
    title: "A Gathering Place",
    description: "Networking mixers, Bible study circles, and casual catch-ups over pastries.",
  },
  {
    icon: Heart,
    title: "Local Love",
    description: "Cheering at local swim meets and showing up for the events that bring Katy together.",
  },
  {
    icon: Calendar,
    title: "Always Welcoming",
    description: "A space where neighbors become friends and every visit feels like coming home.",
  },
];

export default function CommunitySection() {
  return (
    <section id="community" className="bg-background py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-sm">Our Community</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mt-4 mb-6">
            Blending Culture, Coffee, & Delicious Food
          </h2>
          <div className="greek-divider max-w-md mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              At Cocohodo, we believe great coffee tastes even better when it&rsquo;s shared. Our space comes alive as a gathering place for the Katy community  from networking mixers and Bible study circles to casual catch-ups over pastries.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              You&rsquo;ll also find us out in the neighborhood, cheering at local swim meets and showing up for the events that bring our community together. Being part of the fabric of Katy isn&rsquo;t just something we do it&rsquo;s something we&rsquo;re genuinely proud of.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {communityHighlights.map((item) => (
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
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/15 to-accent/15 rounded-3xl blur-xl" />
            <div className="relative rounded-3xl overflow-hidden elegant-shadow">
              <Image
                src="/Pictures/Community section/Community picture.jpeg"
                alt="Cocohodo team serving the Katy community"
                width={700}
                height={500}
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
