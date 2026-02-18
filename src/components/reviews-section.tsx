import { Star } from "lucide-react";
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

const reviews = [
  {
    name: "Alexandra M.",
    rating: 5,
    review: "An absolute gem in Katy! The Hodo Gwaja is a must-try, and the minimalist vibe is so refreshing. It's my new favorite study spot.",
  },
  {
    name: "David L.",
    rating: 5,
    review: "The coffee is top-notch, smooth and flavorful. What really sets this place apart is the bright, clean atmosphere. Perfect for getting work done.",
  },
  {
    name: "Samantha P.",
    rating: 4,
    review: "Lovely staff and a beautiful, airy interior. The Matcha Latte was delicious. It can get a little busy, but that just speaks to how great it is.",
  },
  {
    name: "Brian C.",
    rating: 5,
    review: "Finally, a coffee shop with real character! The attention to detail in the decor and the menu is incredible. The walnut pastries are dangerously good.",
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-serif">What Our Katy Community is Saying</h2>
              <p className="mt-2 text-lg text-muted-foreground font-serif">From Google Reviews</p>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {reviews.map((review, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col border-2 shadow-lg">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg font-serif">{review.name}</CardTitle>
                            <div className="flex items-center gap-0.5">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < review.rating ? "text-primary fill-primary" : "text-muted-foreground/50"}`}
                                />
                              ))}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground italic font-serif">&ldquo;{review.review}&rdquo;</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4" />
              <CarouselNext className="-right-4" />
            </Carousel>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://static.wixstatic.com/media/c5947c_edd0d476732c440f859177b133acdec8~mv2.jpg"
              alt="Cocohodo atmosphere"
              width={800}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-16 w-full rounded-xl overflow-hidden shadow-lg border-4 border-white/50">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4108.732279609942!2d-95.75242842395261!3d29.754990332226136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864120b56c655df1%3A0x2a820cc99df5b1eb!2sCocohodo!5e1!3m2!1ses!2sve!4v1771438336934!5m2!1ses!2sve"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px] md:h-[500px]"
            title="Cocohodo Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
