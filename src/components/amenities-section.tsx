import { Wifi, Coffee, Clock, Gift, Users, PartyPopper } from 'lucide-react';

const amenities = [
  {
    icon: Wifi,
    title: "High-Speed Wi-Fi",
    description: "Fast and reliable internet for remote work, study sessions, or browsing. We have got you covered with ample power outlets at every table.",
  },
  {
    icon: Coffee,
    title: "Specialty Coffee Drinks",
    description: "From classic espresso favorites to signature lattes, our baristas craft every cup with care and quality ingredients.",
  },
  {
    icon: Clock,
    title: "All-Day Dining",
    description: "From breakfast crepes to evening desserts, our menu evolves throughout the day to satisfy every craving.",
  },
  {
    icon: Gift,
    title: "Catering & Events",
    description: "Bring Cocohodo to your next gathering. We offer catering for corporate events, parties, and private functions. We will also host your event for you.",
  },
];

const cateringDetails = [
  {
    icon: Users,
    title: "Weddings & Celebrations",
    description: "Make your big day unforgettable with custom dessert tables, crepe stations, and coffee bars tailored to your theme.",
  },
  {
    icon: PartyPopper,
    title: "Corporate & Private Events",
    description: "From team meetings to birthday parties, we bring the Cocohodo experience to your office, venue, or home.",
  },
  {
    icon: Gift,
    title: "Custom Packages",
    description: "Build your own package: dessert and crepe boxes, full coffee bar service, or interactive stations for any size group.",
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
          <h2 className="text-5xl md:text-7xl font-black mt-3 mb-6 text-primary relative z-10">
            Amenities & Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 relative z-10 font-medium leading-relaxed">
            More than just a coffee shop – we are a complete experience designed for your comfort and creativity.
          </p>
          <div className="greek-divider max-w-md mx-auto mt-6 relative z-10" />
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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

        {/* Catering & Events Sub-Section */}
        <div className="relative">
          <div className="text-center mb-12">
            <span className="text-accent font-bold tracking-widest uppercase text-sm">Catering & Events</span>
            <h3 className="text-3xl md:text-4xl font-black mt-3 mb-4 text-primary">
              Bring Cocohodo to You
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From intimate gatherings to large-scale celebrations, we offer full-service catering across Katy and Greater Houston.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cateringDetails.map((item) => (
              <div
                key={item.title}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-primary/20 backdrop-blur-sm elegant-shadow hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="relative z-10">
                  <div className="p-3 bg-gradient-to-br from-accent/30 to-primary/20 rounded-xl inline-flex mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Catering CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Ready to plan your event? Get in touch for a custom quote.
            </p>
            <a
              href="mailto:sallyaguib@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-primary font-semibold hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Request Catering Info
            </a>
          </div>
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
