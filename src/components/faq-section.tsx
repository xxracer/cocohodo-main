import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Script from "next/script";
import { HelpCircle, Coffee, GraduationCap, Leaf, MapPin, Gift } from "lucide-react";

const faqs = [
  {
    question: "What makes Cocohodo the best coffee shop in Katy, TX?",
    answer:
      "Cocohodo Katy offers a unique blend of premium specialty coffee and traditional Korean walnut pastries (Hodo Gwaja), setting us apart from standard cafes. Our beans are ethically sourced and roasted to perfection, providing a rich, smooth flavor that coffee aficionados love. Combined with our modern, minimalist aesthetic and distinct Asian desserts, we provide an elevated coffee experience right here in Katy.",
    icon: Coffee,
  },
  {
    question: "What is Hodo Gwaja (Walnut Pastry)?",
    answer:
      "Hodo Gwaja is a beloved Korean street food—a walnut-shaped pastry filled with sweet red bean paste and a chunky piece of walnut. At Cocohodo, we bake ours fresh daily using a traditional family recipe, creating a crispy outer shell with a warm, soft filling. It's the perfect pairing for our lattes and Americanos.",
    icon: Gift,
  },
  {
    question: "Is Cocohodo a good place to study or work in Katy?",
    answer:
      "Absolutely. We are widely recognized as one of Katy's best study spots due to our ample seating, quiet atmosphere, and complimentary high-speed Wi-Fi. We've designed our space with students and professionals in mind, offering plenty of power outlets and bright, natural lighting to keep you productive.",
    icon: GraduationCap,
  },
  {
    question: "Do you offer vegan or dairy-free options?",
    answer:
      "Yes! We offer a variety of alternative milks including oat, almond, and soy for all our espresso-based drinks. While our traditional walnut pastries contain egg and wheat, we frequently introduce seasonal specials. Please ask our friendly baristas for the latest vegan-friendly recommendations.",
    icon: Leaf,
  },
  {
    question: "Where is Cocohodo located in Katy?",
    answer:
      "We are conveniently located in the heart of Katy, serving the communities of Cinco Ranch, Fulshear, and West Houston. Our shop is easily accessible with ample parking, making it the perfect destination for a quick coffee run or a relaxing afternoon hang-out.",
    icon: MapPin,
  },
  {
    question: "Can I order Cocohodo catering for events?",
    answer:
      "Yes, we offer premium catering services for weddings, corporate events, and parties in the Houston and Katy area. Our Hodo Gwaja boxes make for unique and delicious party favors. Contact us through our website or visit in-store to customize your catering order.",
    icon: Gift,
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
    <section id="faq" className="bg-gradient-to-b from-secondary/20 to-background walnut-pattern py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        {/* Inject Schema Markup */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">Support</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 gradient-text inline-flex items-center gap-3">
            <HelpCircle className="w-12 h-12" />
            FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Katy's premier coffee and dessert destination.
          </p>
          <div className="greek-divider max-w-md mx-auto mt-6" />
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-3xl shadow-xl border border-border/50 p-6 md:p-10 elegant-shadow">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group border border-border/50 rounded-2xl px-4 md:px-6 transition-all duration-300 hover:border-accent/30 hover:bg-secondary/30"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium py-5 px-2 hover:no-underline">
                  <div className="flex items-center gap-4">
                    {/* Icon with background */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <faq.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed pb-5 px-2 pl-16">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Still have questions?{' '}
            <a href="#footer-contact" className="text-primary font-medium hover:underline">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
