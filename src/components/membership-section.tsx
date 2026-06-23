import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sparkles, Gift, Heart } from "lucide-react";

const perks = [
  {
    icon: Sparkles,
    title: "Unlimited Free Drinks",
    description: "Enjoy free coffee, matcha, smoothies and more with your membership.*",
  },
  {
    icon: Gift,
    title: "$20 Store Credit",
    description: "Get $20 in store credit when you join by 6/30.",
  },
  {
    icon: Heart,
    title: "Monthly Perks + Birthday Gift",
    description: "Celebrate with us and enjoy exclusive monthly member-only perks.",
  },
];

export default function MembershipSection() {
  return (
    <section id="membership" className="bg-secondary/50 walnut-pattern py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/10 rounded-3xl blur-xl" />
            <div className="relative rounded-3xl overflow-hidden elegant-shadow">
              <Image
                src="/Pictures/Membership section/nolly informational.png"
                alt="Nolly Club membership at Cocohodo"
                width={600}
                height={700}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <span className="text-accent font-bold tracking-widest uppercase text-sm">Membership</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Join Houston&rsquo;s First Coffee Club
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                The Nolly Club is our way of saying thank you to the regulars who make Cocohodo feel like home. As Houston&rsquo;s first coffee club, membership means more than just a punch card it&rsquo;s perks made for the people who show up again and again.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Whether you&rsquo;re stopping in for your morning latte or settling in for an afternoon study session, the Nolly Club makes every visit a little sweeter. Become a founding member today and be part of something Houston hasn&rsquo;t seen before.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="p-5 rounded-2xl bg-background/70 backdrop-blur-sm border border-border hover:border-accent/40 transition-all duration-300 elegant-shadow"
                >
                  <perk.icon className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-bold text-primary mb-1">{perk.title}</h3>
                  <p className="text-sm text-muted-foreground">{perk.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accent text-primary font-bold px-8 hover:bg-accent/90 shadow-lg transition-all duration-300 hover:scale-105"
              >
                <a href="https://www.clover.com/online-ordering/cocohodo-katy-3" target="_blank" rel="noopener noreferrer">
                  Join the Nolly Club
                </a>
              </Button>
              <p className="text-xs text-muted-foreground w-full">
                *With the purchase of a $10 menu item. Terms apply. Ask in-store for details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
