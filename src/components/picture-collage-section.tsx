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
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {collageImages.map((image, index) => {
            const spans = [
              "col-span-1 row-span-1",
              "col-span-1 row-span-2",
              "col-span-1 row-span-1",
              "col-span-1 row-span-1",
              "col-span-1 row-span-2",
              "col-span-1 row-span-1",
              "col-span-2 md:col-span-2 row-span-2",
            ];
            return (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden elegant-shadow group ${spans[index]} ${index === 6 ? 'col-start-1 md:col-start-2' : ''}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
