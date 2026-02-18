import Link from 'next/link';

// Instagram Post IDs extracted from user provided URLs
const instagramPostIds = [
  'DTa-lhVku_j', // https://www.instagram.com/p/DTa-lhVku_j/?hl=es
  'DS0JHw5kl37', // https://www.instagram.com/p/DS0JHw5kl37/?hl=es
  'DSlFpYJkuGQ', // https://www.instagram.com/p/DSlFpYJkuGQ/?hl=es
  'DUygxi6gQHV', // https://www.instagram.com/p/DUygxi6gQHV/?hl=es
  'DUjiYJ8DaRq', // https://www.instagram.com/p/DUjiYJ8DaRq/?hl=es
  'DUVrV8BDboJ', // https://www.instagram.com/p/DUVrV8BDboJ/?hl=es
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="bg-secondary/50 py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-serif text-foreground mb-2">
            Follow Us On Instagram
          </h2>
          <Link
            href="https://www.instagram.com/cocohodokaty/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-primary font-serif hover:underline"
          >
            @cocohodokaty
          </Link>
        </div>

        <div
          className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory px-4 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {instagramPostIds.map((id) => (
            <div key={id} className="flex-none w-[300px] snap-center bg-white rounded-lg overflow-hidden shadow-sm flex justify-center">
              <iframe
                src={`https://www.instagram.com/p/${id}/embed`}
                className="w-full aspect-[4/5] object-cover"
                style={{ border: 'none', overflow: 'hidden' }}
                allowTransparency={true}
                allow="encrypted-media"
                title={`Instagram Post ${id}`}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
