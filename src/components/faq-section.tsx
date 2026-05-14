import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Script from "next/script";
import { HelpCircle, Coffee, GraduationCap, Leaf, MapPin, Gift, Heart, Clock } from "lucide-react";

const faqs = [
  {
    question: "Where can I find the best Dubai Chocolate in Katy or Houston?",
    answer:
      "Cocohodo is widely recognized as the premier destination for authentic Dubai Chocolate in the Katy and Houston area. Our viral Dubai Chocolate Strawberry Cups and Pistachio Crepes are crafted with our organic secret-recipe pistachio paste, creating that rich, nutty depth that has made us a top-rated spot for this trending dessert. If you're looking for the most authentic Dubai chocolate experience in Texas, Cocohodo is the place to be.",
    icon: Gift,
  },
  {
    question: "What makes Cocohodo the best cafe for coffee and desserts in Katy, TX?",
    answer:
      "Cocohodo stands out by offering a curated blend of premium specialty coffee, artisanal sweet desserts, savory crepes, and gourmet sandwiches—all in one welcoming space. Unlike standard cafes, we focus on variety and quality, using ethically sourced beans roasted to perfection and a diverse menu that caters to every craving, from breakfast to late-night treats. This commitment to variety and community makes us Katy's favorite elevated café experience.",
    icon: Coffee,
  },
  {
    question: "Is Cocohodo a good place to study or work remotely in Katy?",
    answer:
      "Yes, Cocohodo is one of the best study spots in Katy. We've intentionally designed our space for productivity and comfort, offering complimentary high-speed Wi-Fi, ample power outlets at every table, and a bright, welcoming atmosphere. Whether you're a student from a nearby college or a professional working remotely, our cafe provides the perfect balance of quiet focus and energizing coffee.",
    icon: GraduationCap,
  },
  {
    question: "What are the must-try items at Cocohodo?",
    answer:
      "If it's your first visit, we highly recommend our viral Dubai Chocolate Strawberry Cups, our savory Chicken n' Cheese Crepes, and any of our signature Lattes. For dessert lovers, our Bingsu (shaved ice) and artisanal cheesecakes are legendary in the Katy community. Every item is crafted to be a visual and culinary treat.",
    icon: Heart,
  },
  {
    question: "Do you have dairy-free or vegan options for coffee and food?",
    answer:
      "Absolutely! We believe everyone should enjoy our treats. We offer a variety of premium alternative milks, including oat, almond, and soy, for all our espresso-based drinks. We also frequently introduce vegan-friendly seasonal specials. Just ask our friendly baristas for the best current recommendation based on your dietary preferences.",
    icon: Leaf,
  },
  {
    question: "Where exactly is Cocohodo located and is there parking?",
    answer:
      "We are conveniently located in the heart of Katy at 1645 Winding Hollow Dr #201, serving the Cinco Ranch, Fulshear, and West Houston communities. Yes, we have ample free parking available, making it a stress-free destination for a quick coffee run or a long, relaxing afternoon with friends.",
    icon: MapPin,
  },
  {
    question: "Can I book Cocohodo for catering or private events?",
    answer:
      "Yes, Cocohodo offers premium catering services perfect for weddings, corporate events, and private parties throughout the Houston and Katy area. From full coffee bars and dessert spreads to interactive crepe stations, we can customize a package that fits your event's vibe. Contact us via our website or visit us in-store to start planning your custom catering experience.",
    icon: Gift,
  },
  {
    question: "What are the business hours for Cocohodo Katy?",
    answer:
      "We are open 7 days a week to satisfy your cravings! Our typical hours are Monday-Thursday from 8:00 AM to 8:00 PM, and Friday-Sunday from 8:00 AM to 9:00 PM. We recommend checking our website or calling us for any holiday-specific hours.",
    icon: Clock,
  },
  {
    question: "Does Cocohodo have a rewards program for regulars?",
    answer:
      "Yes, we love our regulars! Cocohodo has a dedicated rewards program and membership perks to thank the community that supports us. Ask our staff during your next visit about how to join and start earning rewards on every single drink and dessert you enjoy.",
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
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/40 to-primary/40 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl border border-border/50 p-6 md:p-10 elegant-shadow">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group border border-border/50 rounded-2xl px-4 md:px-6 transition-all duration-300 hover:border-accent/40 hover:bg-secondary/40"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-medium py-6 px-2 hover:no-underline">
                    <div className="flex items-center gap-4">
                      {/* Icon with background */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-accent/30 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform border border-accent/20">
                        <faq.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-foreground group-hover:text-primary transition-colors font-semibold">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed pb-6 px-2 pl-16 border-t border-border/30 pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Still have questions?{' '}
            <a href="mailto:sallyaguib@gmail.com" className="text-primary font-medium hover:underline">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
