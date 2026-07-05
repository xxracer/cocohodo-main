'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Coffee, Utensils, Croissant, CupSoda } from "lucide-react";

const menuCategories = [
  {
    title: "Breakfast",
    icon: Croissant,
    images: [
      { src: "/Pictures/Breakfast/avocado toast.png", name: "Avocado Toast" },
      { src: "/Pictures/Breakfast/breakfast platter.png", name: "Breakfast Platter" },
      { src: "/Pictures/Breakfast/chicken and waffle.png", name: "Chicken & Waffle" },
      { src: "/Pictures/Breakfast/french toast.png", name: "French Toast" },
      { src: "/Pictures/Breakfast/morning veggie crepe.png", name: "Morning Veggie Crepe" },
    ],
  },
  {
    title: "Drinks",
    icon: CupSoda,
    images: [
      { src: "/Pictures/Drinks/dubai chocolate shake.png", name: "Dubai Chocolate Shake" },
      { src: "/Pictures/Drinks/sunrift.png", name: "Sunrift" },
    ],
  },
  {
    title: "Lunch & More",
    icon: Utensils,
    images: [
      { src: "/Pictures/Lunch & More/chicken enchillada crepe.png", name: "Chicken Enchilada Crepe" },
      { src: "/Pictures/Lunch & More/chicken parm sandwich.png", name: "Chicken Parm Sandwich" },
      { src: "/Pictures/Lunch & More/chicken tender special.png", name: "Chicken Tender Special" },
      { src: "/Pictures/Lunch & More/italiano crepe.png", name: "Italiano Crepe" },
      { src: "/Pictures/Lunch & More/turkey cheese sandwich.png", name: "Turkey Cheese Sandwich" },
    ],
  },
  {
    title: "Dessert",
    icon: Coffee,
    images: [
      { src: "/Pictures/Dessert/dubai cheesecake.png", name: "Dubai Cheesecake" },
      { src: "/Pictures/Dessert/nutella crepe.png", name: "Nutella Crepe" },
      { src: "/Pictures/Dessert/strawberry cream waffle.png", name: "Strawberry Cream Waffle" },
    ],
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="bg-secondary/30 walnut-pattern py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-sm">Discover</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-3 mb-6 text-primary">
            Our Menu
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 font-medium leading-relaxed px-2">
            One café. Every craving. From morning breakfast and refreshing drinks to savory lunch favorites and indulgent desserts.
          </p>
          <div className="greek-divider max-w-md mx-auto mb-8" />
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-accent/50 text-primary hover:bg-accent hover:text-primary font-bold px-6 sm:px-8 shadow-lg transition-all duration-300 hover:scale-105"
            asChild
          >
            <a
              href="https://shorturl.at/JQiu4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span>View Full Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </Button>
        </div>

        {/* Category Carousels */}
        <div className="space-y-20">
          {menuCategories.map((category) => (
            <div key={category.title} className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-xl bg-accent text-primary">
                  <category.icon className="w-7 h-7" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary">{category.title}</h3>
              </div>

              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {category.images.map((image, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                      <div className="group relative aspect-square rounded-2xl overflow-hidden elegant-shadow border border-border hover:border-accent/40 transition-all duration-500 hover:-translate-y-1"
                      >
                        <Image
                          src={image.src}
                          alt={image.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                          <p className="text-white font-semibold text-lg drop-shadow-lg">{image.name}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4 hidden md:flex" />
                <CarouselNext className="-right-4 hidden md:flex" />
              </Carousel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
