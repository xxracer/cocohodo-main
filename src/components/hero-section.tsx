import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

export default function HeroSection() {
  // Recommended hero images from Unsplash (coffee shop aesthetic)
  // Option 1: Warm cozy cafe interior - https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80
  // Option 2: Coffee and pastries - https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&q=80
  // Option 3: Modern minimalist cafe - https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1920&q=80

  const heroImageUrl = "https://static.wixstatic.com/media/c5947c_edd0d476732c440f859177b133acdec8~mv2.jpg";

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImageUrl}
          alt="Cocohodo Katy cafe interior"
          fill
          className="object-cover"
          priority
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-accent uppercase tracking-wide">Katy's Premier Coffee & Dessert Cafe</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Where Stories
            <br />
            <span className="text-accent">&</span> Coffee Blend
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed">
            Experience the perfect blend of Korean hospitality and cozy cafe culture.
            Fresh walnut pastries, artisanal coffee, and a space that feels like home.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent text-primary font-semibold px-6 hover:bg-accent/90 shadow-lg"
            >
              <a href="#menu">View Menu</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/40 bg-transparent text-white hover:bg-white hover:text-primary px-6"
            >
              <a href="tel:+18323215849" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Call to Order</span>
              </a>
            </Button>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/20">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm flex-shrink-0">
                <MapPin className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white uppercase tracking-wide">Location</p>
                <p className="text-xs text-white/80 leading-snug">1645 Winding Hollow Dr #201<br />Katy, TX 77450</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm flex-shrink-0">
                <Clock className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white uppercase tracking-wide">Hours</p>
                <p className="text-xs text-white/80 leading-snug">Mon-Thu: 8AM-8PM<br />Fri-Sat: 8AM-9PM</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm flex-shrink-0">
                <Phone className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white uppercase tracking-wide">Contact</p>
                <p className="text-xs text-white/80 leading-snug">(832) 321-5849<br />Walk-ins welcome</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" className="flex flex-col items-center text-white/70 hover:text-white transition-colors">
          <span className="text-[10px] uppercase tracking-widest mb-2">Discover More</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-2.5 bg-white/60 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
