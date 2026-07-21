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
    <section id="collage" className="bg-background py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">Discover</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4 text-primary">
            Our Creations
          </h2>
          <div className="greek-divider max-w-xs mx-auto mt-4" />
        </div>

        {/* Mobile layout */}
        <div className="grid grid-cols-2 gap-3 sm:hidden">
          {collageImages.map((image, index) => {
            let roundedClass = "rounded-3xl";
            if (index % 3 === 0) roundedClass = "rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-xl rounded-br-xl";
            if (index % 3 === 1) roundedClass = "rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-xl rounded-bl-xl";
            if (index % 3 === 2) roundedClass = "rounded-full";

            return (
              <div
                key={index}
                className={`relative aspect-square overflow-hidden elegant-shadow group ${roundedClass} ${
                  index === 6 ? 'col-span-2 !aspect-[2/1] !rounded-[3rem]' : ''
                }`}
              >
                <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 640px) 50vw, 100vw" />
              </div>
            );
          })}
        </div>

        {/* Tablet + Desktop layout: Organic abstract grid */}
        <div className="hidden sm:grid grid-cols-12 gap-4 md:gap-5 lg:gap-6 auto-rows-[120px] md:auto-rows-[160px] lg:auto-rows-[200px]">
          
          {/* Image 0: Big */}
          <div className="col-span-6 row-span-2 relative overflow-hidden elegant-shadow group rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-500">
            <Image src={collageImages[0].src} alt={collageImages[0].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="50vw" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          </div>
          
          {/* Image 1: Tall */}
          <div className="col-span-3 row-span-2 relative overflow-hidden elegant-shadow group rounded-[4rem] hover:-translate-y-1 hover:shadow-2xl transition-all duration-500">
            <Image src={collageImages[1].src} alt={collageImages[1].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="25vw" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          </div>

          {/* Image 2: Small */}
          <div className="col-span-3 row-span-1 relative overflow-hidden elegant-shadow group rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl mt-3 hover:-translate-y-1 hover:shadow-2xl transition-all duration-500">
            <Image src={collageImages[2].src} alt={collageImages[2].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="25vw" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          </div>

          {/* Image 3: Small */}
          <div className="col-span-3 row-span-1 relative overflow-hidden elegant-shadow group rounded-2xl mb-3 hover:-translate-y-1 hover:shadow-2xl transition-all duration-500">
            <Image src={collageImages[3].src} alt={collageImages[3].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="25vw" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          </div>

          {/* Image 4: Wide */}
          <div className="col-span-5 row-span-1 relative overflow-hidden elegant-shadow group rounded-l-full rounded-r-2xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-500">
            <Image src={collageImages[4].src} alt={collageImages[4].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="40vw" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          </div>

          {/* Image 5: Wide */}
          <div className="col-span-4 row-span-1 relative overflow-hidden elegant-shadow group rounded-r-[4rem] rounded-l-2xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-500">
            <Image src={collageImages[5].src} alt={collageImages[5].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="33vw" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          </div>

          {/* Image 6: Circle-ish */}
          <div className="col-span-3 row-span-1 relative overflow-hidden elegant-shadow group rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-500">
            <Image src={collageImages[6].src} alt={collageImages[6].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="25vw" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
          </div>

        </div>
      </div>
    </section>
  );
}
