import { Wifi, PersonStanding, Coffee, Moon } from 'lucide-react';

const amenities = [
  {
    icon: Wifi,
    title: 'Wi-Fi',
    description: 'Experience completeness in our space with fast and reliable Wi-Fi. We offer internet to our customers looking to get some work done, or simply browse the web.',
  },
  {
    icon: PersonStanding,
    title: 'Walk-ins',
    description: 'Our doors are always open to embrace the spontaneous joy of life. We embody a lifestyle that celebrates the beauty of unplanned moments.',
  },
  {
    icon: Coffee,
    title: 'Lifestyle',
    description: 'We champion the idea that not everything requires a specific purpose. Sometimes you just need an environment to relax and take in the world.',
  },
  {
    icon: Moon,
    title: 'Open Late',
    description: 'We aren\'t just a space; we\'re an experience. Join us for extended hours, because life doesn\'t have a curfew.',
  },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Amenities</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
          {amenities.map((amenity) => (
            <div key={amenity.title} className="flex items-start gap-6">
              <amenity.icon className="h-10 w-10 text-foreground mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold">{amenity.title}</h3>
                <p className="mt-2 text-muted-foreground">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}