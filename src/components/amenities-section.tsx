import { Wifi, Coffee, Clock, Gift } from 'lucide-react';

const amenities = [
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    description: "Fast and reliable internet for remote work, study sessions, or browsing. We have got you covered with ample power outlets at every table.",
  },
  {
    icon: Coffee,
    title: "Artisanal Coffee",
    description: "Ethically sourced beans, expertly roasted and brewed. Every cup tells a story of craftsmanship and care.",
  },
  {
    icon: Clock,
    title: "All-Day Dining",
    description: "From breakfast crepes to evening desserts, our menu evolves throughout the day to satisfy every craving.",
  },
  {
    icon: Gift,
    title: "Catering & Events",
    description: "Bring Cocohodo to your next gathering. We offer catering for weddings, corporate events, parties, and private functions.",
  },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="bg-gradient-to-b from-background via-secondary/20 to-background walnut-pattern py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          <span className="text-accent font-bold tracking-widest uppercase text-sm relative z-10">Experience</span>
          <h2 className="text-5xl md:text-7xl font-black mt-3 mb-6 gradient-text relative z-10">
            Amenities & Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 relative z-10 font-medium leading-relaxed">
            More than just a coffee shop – we are a complete experience designed for your comfort and creativity.
          </p>
          <div className="greek-divider max-w-md mx-auto mt-6 relative z-10" />
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className="group relative p-6 rounded-2xl bg-background/60 backdrop-blur-sm border border-border hover:border-accent/40 transition-all duration-500 elegant-shadow hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-transparent to-accent/0 group-hover:from-accent/10 transition-all duration-500" />
              {/* Icon with gradient background */}
              <div className="relative z-10 mb-4">
                <div className="relative p-3 bg-gradient-to-br from-accent/20 to-primary/10 rounded-xl inline-flex shadow-sm group-hover:shadow-md transition-all">
                  <amenity.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {amenity.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {amenity.description}
                </p>
              </div>
              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent/0 group-hover:bg-accent/50 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Clock className="w-6 h-6 text-primary" />
            <span className="text-base font-bold text-primary">
              Open 7 days a week • Your perfect escape at any time of day
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
