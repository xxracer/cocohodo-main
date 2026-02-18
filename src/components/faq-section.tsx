import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Script from "next/script";

const faqs = [
  {
    question: "What makes Cocohodo the best coffee shop in Katy, TX?",
    answer:
      "Cocohodo Katy offers a unique blend of premium specialty coffee and traditional Korean walnut pastries (Hodo Gwaja), setting us apart from standard cafes. Our beans are ethically sourced and roasted to perfection, providing a rich, smooth flavor that coffee aficionados love. Combined with our modern, minimalist aesthetic and distinct Asian desserts, we provide an elevated coffee experience right here in Katy.",
  },
  {
    question: "What is Hodo Gwaja (Walnut Pastry)?",
    answer:
      "Hodo Gwaja is a beloved Korean street food—a walnut-shaped pastry filled with sweet red bean paste and a chunky piece of walnut. At Cocohodo, we bake ours fresh daily using a traditional family recipe, creating a crispy outer shell with a warm, soft filling. It's the perfect pairing for our lattes and Americanos.",
  },
  {
    question: "Is Cocohodo a good place to study or work in Katy?",
    answer:
      "Absolutely. We are widely recognized as one of Katy's best study spots due to our ample seating, quiet atmosphere, and complimentary high-speed Wi-Fi. We've designed our space with students and professionals in mind, offering plenty of power outlets and bright, natural lighting to keep you productive.",
  },
  {
    question: "Do you offer vegan or dairy-free options?",
    answer:
      "Yes! We offer a variety of alternative milks including oat, almond, and soy for all our espresso-based drinks. While our traditional walnut pastries contain egg and wheat, we frequently introduce seasonal specials. Please ask our friendly baristas for the latest vegan-friendly recommendations.",
  },
  {
    question: "Where is Cocohodo located in Katy?",
    answer:
      "We are conveniently located in the heart of Katy, serving the communities of Cinco Ranch, Fulshear, and West Houston. Our shop is easily accessible with ample parking, making it the perfect destination for a quick coffee run or a relaxing afternoon hang-out.",
  },
  {
    question: "Can I order Cocohodo catering for events?",
    answer:
      "Yes, we offer premium catering services for weddings, corporate events, and parties in the Houston and Katy area. Our Hodo Gwaja boxes make for unique and delicious party favors. Contact us through our website or visit in-store to customize your catering order.",
  },
];

// JSON-LD Schema for SEO and AI Discovery
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

export default function FaqSection() {
  return (
    <section id="faq" className="bg-gradient-to-b from-background to-secondary/20 py-24">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Inject Schema Markup */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
            Everything you need to know about Katy's premier coffee and dessert destination.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-secondary/20 p-6 md:p-10">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-secondary/20 last:border-0 px-2"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-medium font-serif py-6 hover:text-primary transition-colors hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed pb-6 pl-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
