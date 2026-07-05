import Image from "next/image";

const collageImages = [
  { src: "/Pictures/Picture Collage/IMG_6218.JPG", alt: "Cocohodo tea selection" },
  { src: "/Pictures/Picture Collage/IMG_6236.JPG", alt: "Latte art at Cocohodo" },
  { src: "/Pictures/Picture Collage/IMG_6322.JPG", alt: "Cocohodo coffee and books" },
  { src: "/Pictures/Picture Collage/IMG_6341.JPG", alt: "Cocohodo ice cream selection" },
  { src: "/Pictures/Picture Collage/IMG_6355.JPG", alt: "Warm tea at Cocohodo" },
  { src: "/Pictures/Picture Collage/IMG_7676.jpeg", alt: "Matcha treats at Cocohodo" },
  { src: "/Pictures/Picture Collage/74aaca47-2688-41e6-bfe0-a35c4ab0b4a0.jpg", alt: "Dubai chocolate crepe at Cocohodo" },
];

export default function PictureCollageSection() {
  return (
    <section id="collage" className="bg-background py-12 sm:py-16">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Mobile layout: simple 2-col grid */}
        <div className="grid grid-cols-2 gap-2 sm:hidden">
          {collageImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden elegant-shadow group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Tablet + Desktop layout: bento-style collage */}
        <div className="hidden sm:grid grid-cols-4 gap-3 grid-auto-rows-[minmax(0,1fr)]">
          {/* Row 1: 2 images side by side, then 1 tall, then 1 */}
          <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden elegant-shadow group">
            <Image src={collageImages[0].src} alt={collageImages[0].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 25vw, 20vw" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          </div>
          <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden elegant-shadow group">
            <Image src={collageImages[1].src} alt={collageImages[1].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 25vw, 20vw" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          </div>
          <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden elegant-shadow group">
            <Image src={collageImages[2].src} alt={collageImages[2].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 25vw, 20vw" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          </div>
          <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden elegant-shadow group">
            <Image src={collageImages[3].src} alt={collageImages[3].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 25vw, 20vw" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          </div>

          {/* Row 2: continues from above (col 1 already filled) */}
          <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden elegant-shadow group">
            <Image src={collageImages[4].src} alt={collageImages[4].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 25vw, 20vw" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          </div>
          <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden elegant-shadow group">
            <Image src={collageImages[5].src} alt={collageImages[5].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 25vw, 20vw" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          </div>

          {/* Big feature image */}
          <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden elegant-shadow group">
            <Image src={collageImages[6].src} alt={collageImages[6].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 40vw" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
