import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

function DoorDashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.071 8.409a6.09 6.09 0 00-5.396-3.228H9.803l-.443 2.252h5.341c.915 0 1.742.461 2.222 1.167l.078.128 1.013 3.167.046.13a2.632 2.632 0 01-2.48 3.458H9.455l-.443 2.252h7.29a6.1 6.1 0 005.77-4.064l.783-2.447.216-.87zM8.359 5.181H4.658l-.443 2.252h3.246l-1.703 8.665H2.971l-.443 2.252h7.289l.443-2.252H6.903l1.703-8.665h.442l1.311-2.252z"/>
    </svg>
  );
}

function UberEatsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 14.36c-.36.54-.96.86-1.6.86H9.5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h5.54c.64 0 1.24.32 1.6.86l2.18 3.27c.32.48.32 1.12 0 1.6l-2.18 3.23z"/>
    </svg>
  );
}

function CloverIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2V7zm0 4h2v6h-2v-6zm-4 0h2v2H7v-2zm0 4h2v2H7v-2zm8-4h2v2h-2v-2zm0 4h2v2h-2v-2z"/>
    </svg>
  );
}

export default function HeroSection() {
  const heroImageUrl = "https://static.wixstatic.com/media/c5947c_edd0d476732c440f859177b133acdec8~mv2.jpg";

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center">
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
      <div className="relative z-5 container mx-auto max-w-7xl px-2 flex flex-col items-center text-center mt-24">
        <div className="max-w-4xl mx-auto">
          {/* Heading — Cocohodo wordmark styled to match the logo */}
          <h1
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-none mb-8 text-center drop-shadow-2xl"
            style={{
              fontFamily: '"Great Vibes", cursive',
              color: '#E8C26B',
              textShadow:
                '0 0 30px rgba(232, 194, 107, 0.4), 0 4px 20px rgba(0, 0, 0, 0.5)',
              letterSpacing: '0.01em',
              fontWeight: 400,
            }}
          >
            Cocohodo
          </h1>

          {/* Description */}
          <div className="relative group mb-10 mx-auto max-w-2xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 via-primary/30 to-accent/30 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <p className="relative text-lg sm:text-2xl text-white/90 leading-relaxed font-medium backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20 shadow-2xl">
              From sweet desserts and savory crepes to sandwiches and specialty coffee drinks,
              everything you&rsquo;re craving, all in one place.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent text-primary font-bold px-8 hover:bg-accent/90 shadow-[0_0_20px_rgba(255,182,193,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <a href="#menu">View Menu</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/40 bg-transparent text-white hover:bg-white hover:text-primary px-8 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <a href="tel:+18323215849" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Call to Order</span>
              </a>
            </Button>
          </div>

          {/* Delivery Apps */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            <span className="text-xs text-white/70 uppercase tracking-wide">Order online:</span>
            <a
              href="https://www.clover.com/online-ordering/cocohodo-katy-3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition-colors"
            >
              <CloverIcon className="w-4 h-4" />
              Clover
            </a>
            <a
              href="https://www.doordash.com/store/cocohodo-katy-788983/53002750/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJjb2NvaG9kbyBjb2ZmZWUgc2hvcCIsIml0ZW1faWRzIjpbXSwic2VhcmNoX3Rlcm0iOiJjb2NvIGhvZG8gY29mZmVlIHNob3AiLCJ2ZXJ0aWNhbF9pZCI6LTk5OSwidmVydGljYWxfbmFtZSI6ImFsbCJ9LCJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzEsNCwxMDAzMzMsMTc1LDE5MywxOTVdfQ==&pickup=false"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition-colors"
            >
              <DoorDashIcon className="w-4 h-4" />
              DoorDash
            </a>
            <a
              href="https://www.order.store/store/cocohodo-katy/tKj58KewQVC4v4YqlPogHg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition-colors"
            >
              <UberEatsIcon className="w-4 h-4" />
              Uber Eats
            </a>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t border-white/20">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white uppercase tracking-wide">Location</p>
                <p className="text-xs text-white/80 leading-snug">1645 Winding Hollow Dr #201<br />Katy, TX 77450</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                <Clock className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white uppercase tracking-wide">Hours</p>
                <p className="text-xs text-white/80 leading-snug">Mon-Thu: 8AM-8PM<br />Fri-Sat: 8AM-9PM<br />Sun: 8AM-9PM</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="p-1.5 rounded-md bg-white/10 backdrop-blur-sm">
                <Phone className="w-4 h-4 text-accent" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white uppercase tracking-wide">Contact</p>
                <p className="text-xs text-white/80 leading-snug">(832) 321-5849<br />Walk-Ins Welcome</p>
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
