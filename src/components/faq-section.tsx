import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Script from "next/script";
import {
  HelpCircle,
  Coffee,
  GraduationCap,
  Leaf,
  MapPin,
  Gift,
  Heart,
  Clock,
  Utensils,
  Users,
  Sparkles,
  Car,
  Mail,
  Phone,
} from "lucide-react";

const faqs = [
  {
    question: "Why is Cocohodo's Dubai Chocolate considered the best in Katy and Houston?",
    answer:
      "Our Dubai Chocolate is crafted with a secret-recipe organic pistachio paste that we make in-house. The deep, nutty richness of this pistachio paste is what gives our Dubai Chocolate Strawberry Cups, Pistachio Crepes, and Dubai Chocolate Lattes their signature depth — a flavor profile that has made Cocohodo the go-to destination for Dubai Chocolate across the Houston area.",
    icon: Sparkles,
  },
  {
    question: "What kind of food does Cocohodo serve besides coffee?",
    answer:
      "Cocohodo is a full eatery, not just a coffee shop. We serve breakfast crepes, morning omelettes, avocado toast, savory crepes (chicken, vegetarian, feta and spinach), gourmet sandwiches and wraps, sweet crepes, Belgian waffles, shaved ice (bingsu), handcrafted cheesecakes, affogato, and our famous viral Dubai Chocolate creations. Whether you want a quick bite, a full meal, or a dessert, we have it all under one roof.",
    icon: Utensils,
  },
  {
    question: "What makes Cocohodo the best cafe for coffee and desserts in Katy, TX?",
    answer:
      "Cocohodo stands out by combining premium specialty coffee, handcrafted sweet desserts, savory crepes, gourmet sandwiches, and viral Dubai Chocolate all in one welcoming space. Unlike standard cafes that focus on drinks only, we focus on variety and quality — from ethically sourced beans to our in-house pistachio paste, every item is crafted with care. This commitment to variety and community makes us Katy's favorite elevated café experience.",
    icon: Coffee,
  },
  {
    question: "Is Cocohodo a good place to study or work remotely in Katy?",
    answer:
      "Yes, Cocohodo is one of the best study and remote-work spots in Katy. We offer complimentary high-speed Wi-Fi, ample power outlets at nearly every table, and a bright, clean atmosphere that balances quiet focus with an energizing vibe. Whether you're a student, freelancer, or remote professional, our cafe is designed to help you be productive.",
    icon: GraduationCap,
  },
  {
    question: "What are the must-try items at Cocohodo?",
    answer:
      "If it's your first visit, we recommend starting with our viral Dubai Chocolate Strawberry Cup or Dubai Chocolate Pistachio Crepe (the pistachio paste is what makes them legendary). Pair that with one of our Signature Lattes (try the Honey Lavender or Coco Latte), and finish with a Bingsu (shaved ice) if you're sharing or want something light. Our Chicken n' Cheese Crepe is also a customer favorite for something savory.",
    icon: Heart,
  },
  {
    question: "Do you have dairy-free or vegan options for coffee and food?",
    answer:
      "Absolutely. We offer premium alternative milks — oat, almond, and soy — for all our espresso-based drinks at no extra charge. We also rotate vegan-friendly seasonal specials throughout the year. Just ask our baristas for the best current recommendation based on your dietary preferences.",
    icon: Leaf,
  },
  {
    question: "Where exactly is Cocohodo located and is there parking?",
    answer:
      "We are conveniently located at 1645 Winding Hollow Dr #201, Katy, TX 77450, in the heart of Katy. We serve the Cinco Ranch, Fulshear, Richmond, and West Houston communities. Yes, we have ample free parking available on-site, making it stress-free to stop by for a quick coffee run or a long, relaxing afternoon.",
    icon: MapPin,
  },
  {
    question: "Does Cocohodo have a rewards program for regulars?",
    answer:
      "Yes! We love our regulars. Cocohodo has a dedicated rewards program and membership perks to thank the community that supports us. Earn points on every coffee, crepe, sandwich, and dessert, and unlock birthday rewards, early access to seasonal specials, and exclusive member-only promotions. Ask any team member during your next visit to enroll — no app download required.",
    icon: Gift,
  },
  {
    question: "What are the business hours for Cocohodo Katy?",
    answer:
      "We are open 7 days a week. Monday through Thursday we are open from 8:00 AM to 8:00 PM. Friday through Sunday we are open from 8:00 AM to 9:00 PM (Saturdays open at 9:00 AM). For holiday hours, please call (832) 321-5849 or check our Instagram @cocohodokatytx for the latest updates.",
    icon: Clock,
  },
  {
    question: "How can I order Cocohodo for delivery or pickup?",
    answer:
      "You can order Cocohodo for delivery or pickup through our website, in-house ordering on Clover, or through our delivery partners Uber Eats and DoorDash. The fastest way to order is directly through Clover (in-house) for the best pricing and to support us directly. Visit our website to start your order.",
    icon: Car,
  },
  {
    question: "Is Cocohodo kid-friendly?",
    answer:
      "Absolutely. Cocohodo is a family-friendly cafe, and we love hosting families. Our menu has plenty of options kids enjoy — waffles with ice cream, smoothies, sweet crepes, ice cream-topped desserts, and more. We have comfortable seating for groups, and our staff is always happy to accommodate little ones.",
    icon: Users,
  },
  {
    question: "What is Bingsu (shaved ice) and why is it popular at Cocohodo?",
    answer:
      "Bingsu is a traditional shaved ice dessert made with ultra-fine, snow-like ice flakes topped with sweet milk, condensed milk, fresh fruit, cookies, coffee, or matcha. Cocohodo's bingsu has become legendary in Katy because of the generous portions and creative flavor combinations — Mango, Berry, Coffee, Green Tea, Cookies & Cream, and the original. It's perfect for sharing and for the Texas heat.",
    icon: Sparkles,
  },
  {
    question: "Does Cocohodo offer gift cards?",
    answer:
      "Yes, Cocohodo gift cards are available in-store and make a great gift for the coffee lover, dessert enthusiast, or foodie in your life. Stop by during business hours to pick one up in any amount. It's also a thoughtful gift for coworkers, teachers, and friends who love discovering new local spots.",
    icon: Gift,
  },
  {
    question: "How can I contact Cocohodo for partnerships, press, or general inquiries?",
    answer:
      "For partnerships, press, or general inquiries, email us at sallyaguib@gmail.com or call (832) 321-5849 during business hours. You can also DM us on Instagram @cocohodokatytx, Facebook @cocohodokatytx, or TikTok @cocohodokaty — we are very active on social media and usually respond within a few hours.",
    icon: Mail,
  },
  {
    question: "Is Cocohodo wheelchair accessible?",
    answer:
      "Yes. Cocohodo is wheelchair accessible, with a step-free entrance and accessible seating. Our team is happy to assist with any accommodations to make your visit comfortable. If you have specific needs, please call ahead at (832) 321-5849 and we will be ready to welcome you.",
    icon: Users,
  },
  {
    question: "Can I make a reservation or book a table in advance?",
    answer:
      "Cocohodo operates primarily on a walk-in basis, so reservations are not required for regular visits. However, for groups of 8 or more, or for special occasions, we recommend calling (832) 321-5849 in advance so we can prepare a great spot for you. We also accept walk-ins anytime during business hours.",
    icon: Phone,
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
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-primary inline-flex items-center gap-3">
            <HelpCircle className="w-12 h-12" />
            FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Katy&rsquo;s premier coffee, dessert, and eatery destination.
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
        <div className="text-center mt-12 space-y-2">
          <p className="text-muted-foreground">
            Still have questions? Visit us in person, call (832) 321-5849, or email{" "}
            <a
              href="mailto:sallyaguib@gmail.com"
              className="font-semibold text-primary hover:underline"
            >
              sallyaguib@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
