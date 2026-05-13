import { Wifi, Coffee, Clock } from 'lucide-react';

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
    icon: Wifi,
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

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 gradient-text">
            Amenities & Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than just a coffee shop – we are a complete experience designed for your comfort.
          </p>
          <div className="greek-divider max-w-md mx-auto mt-6" />
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className="group relative p-6 rounded-2xl bg-background border border-border hover:border-accent/40 transition-all duration-300 elegant-shadow hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon with gradient background */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-xl blur-sm group-hover:blur-md transition-all" />
                <div className="relative p-3 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl inline-flex">
                  <amenity.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {amenity.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {amenity.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent/0 group-hover:bg-accent/50 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/5 border border-primary/10">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Open 7 days a week • Perfect for any time of day
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}