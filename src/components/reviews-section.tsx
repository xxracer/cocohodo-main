import { Star, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const reviews = [
  {
    name: "Alexandra M.",
    rating: 5,
    review: "An absolute gem in Katy! The Hodo Gwaja is a must-try, and the minimalist vibe is so refreshing. It's my new favorite study spot.",
    date: "2 weeks ago"
  },
  {
    name: "David L.",
    rating: 5,
    review: "The coffee is top-notch, smooth and flavorful. What really sets this place apart is the bright, clean atmosphere. Perfect for getting work done.",
    date: "1 month ago"
  },
  {
    name: "Samantha P.",
    rating: 4,
    review: "Lovely staff and a beautiful, airy interior. The Matcha Latte was delicious. It can get a little busy, but that just speaks to how great it is.",
    date: "3 weeks ago"
  },
  {
    name: "Brian C.",
    rating: 5,
    review: "Finally, a coffee shop with real character! The attention to detail in the decor and the menu is incredible. The walnut pastries are dangerously good.",
    date: "1 week ago"
  },
  {
    name: "Jennifer K.",
    rating: 5,
    review: "Best Korean desserts in Katy! The Dubai chocolate crepes are amazing. Great place to relax or catch up with friends.",
    date: "4 days ago"
  },
];

const reviewStats = {
  average: 4.8,
  total: 127,
  distribution: [
    { stars: 5, count: 98, percentage: 77 },
    { stars: 4, count: 22, percentage: 17 },
    { stars: 3, count: 5, percentage: 4 },
    { stars: 2, count: 1, percentage: 1 },
    { stars: 1, count: 1, percentage: 1 },
  ]
};

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-gradient-to-b from-secondary/20 to-background walnut-pattern py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 gradient-text">
            What Katy Is Saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real reviews from our amazing community of coffee lovers and dessert enthusiasts.
          </p>
          <div className="greek-divider max-w-md mx-auto mt-6" />
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Average Rating Card */}
          <Card className="lg:col-span-1 elegant-shadow border-0 bg-gradient-to-br from-primary to-primary/80 text-white">
            <CardContent className="p-8 flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-6xl font-bold">{reviewStats.average}</span>
                <div className="flex flex-col items-start">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(reviewStats.average) ? "fill-accent text-accent" : "text-white/30"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-white/80">out of 5</span>
                </div>
              </div>
              <p className="text-white/90">{reviewStats.total} Google reviews</p>
              <Button asChild variant="outline" className="mt-4 rounded-full border-white/40 bg-transparent text-white hover:bg-white hover:text-primary transition-colors">
                <Link
                  href="https://maps.google.com/?cid=3059696044019827179"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Write a Review
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Rating Distribution */}
          <Card className="lg:col-span-2 elegant-shadow border-0 bg-background">
            <CardContent className="p-8">
              <h3 className="text-lg font-semibold text-primary mb-6">Rating Breakdown</h3>
              <div className="space-y-3">
                {reviewStats.distribution.map((item) => (
                  <div key={item.stars} className="flex items-center gap-4">
                    <div className="flex items-center gap-1 w-20">
                      <span className="text-sm font-medium text-foreground w-3">{item.stars}</span>
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </div>
                    <div className="flex-1 h-3 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-12 text-right">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reviews Carousel */}
        <div className="mb-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              autoplay: true,
              autoplayInterval: 4000,
            }}
            className="w-full"
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4 h-full">
                    <Card className="h-full flex flex-col elegant-shadow border-border hover:border-accent/30 transition-colors">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <CardTitle className="text-lg font-serif text-primary">{review.name}</CardTitle>
                            <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
                          </div>
                          <div className="flex items-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${i < review.rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
                              />
                            ))}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground italic leading-relaxed">
                          &ldquo;{review.review}&rdquo;
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 hidden md:flex" />
            <CarouselNext className="-right-4 hidden md:flex" />
          </Carousel>
        </div>

        {/* Google Maps & Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden elegant-shadow border-4 border-white shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4108.732279609942!2d-95.75242842395261!3d29.754990332226136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864120b56c655df1%3A0x2a820cc99df5b1eb!2sCocohodo!5e1!3m2!1ses!2sve!4v1771438336934!5m2!1ses!2sve"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px]"
              title="Cocohodo Location"
            />
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <MapPin className="w-7 h-7" />
                Visit Us
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p>1645 Winding Hollow Dr #201, Katy, TX 77450</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <p className="font-medium text-foreground">Hours</p>
                    <p>Mon-Thu: 8AM-8PM | Fri-Sat: 8AM-9PM | Sun: 9AM-8PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <p className="font-medium text-foreground">Contact</p>
                    <p>(832) 321-5849 | contact@cocohodokaty.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden elegant-shadow">
              <Image
                src="https://static.wixstatic.com/media/c5947c_edd0d476732c440f859177b133acdec8~mv2.jpg"
                alt="Cocohodo atmosphere"
                width={800}
                height={500}
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-medium">Come experience the warmth</p>
                <p className="text-sm text-white/80">Free parking available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
