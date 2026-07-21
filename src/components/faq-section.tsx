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
    answer: "Our Dubai Chocolate is crafted with our premium house-made pistachio paste. The deep, nutty richness of this pistachio paste is what gives our Dubai Chocolate Strawberry Cups, Pistachio Crepes, and Dubai Chocolate Brownies their signature depth — a flavor profile that has made Cocohodo the go-to destination for Dubai Chocolate across the Katy area.",
    icon: Sparkles,
  },
  {
    question: "What kind of food does Cocohodo serve besides coffee?",
    answer: "Cocohodo is a full eatery, not just a coffee shop. We serve breakfast crepes, morning omelettes, avocado toast, savory crepes (chicken, vegetarian, feta and spinach), gourmet sandwiches and wraps, sweet crepes, Belgian waffles, ice creams and affogatos, a variety of cheesecakes, and of course our famous viral Dubai Chocolate creations. We also serve premium Matcha Lattes and Harney & Sons Tea. Whether you want a quick bite, a full meal, or a dessert, we have it all under one roof.",
    icon: Utensils,
  },
  {
    question: "Do you have ice blended drinks?",
    answer: "Yes, Cocohodo has ice blended drinks and they're perfect for beating that Texas heat! Our ice blended lineup includes frozen matcha for a smooth, earthy pick-me-up, along with frozen coffee drinks in rich caramel and chocolate flavor profiles. They're a great way to cool off while still getting your caffeine fix. We also have fruit smoothies and kid-approved milkshakes.",
    icon: Coffee,
  },
  {
    question: "What makes Cocohodo the best cafe for coffee and desserts in Katy, TX?",
    answer: "Cocohodo stands out by combining premium specialty coffee, handcrafted sweet desserts, savory crepes, gourmet sandwiches, and viral Dubai Chocolate all in one welcoming space. Unlike standard cafes that focus on drinks only, we focus on variety and quality — from organic coffee beans & premium matcha, to our in-house pistachio paste, every item is crafted with care. This commitment to variety and community makes us Katy's favorite café experience.",
    icon: Coffee,
  },
  {
    question: "Is Cocohodo a good place to study or work remotely in Katy?",
    answer: "Yes, Cocohodo is one of the best study and remote-work spots in Katy. We offer complimentary high-speed Wi-Fi, ample power outlets, and a bright, clean atmosphere that balances quiet focus with an energizing vibe. Whether you're a student, freelancer, or remote professional, our cafe is designed to help you be productive.",
    icon: GraduationCap,
  },
  {
    question: "What are the must-try items at Cocohodo?",
    answer: "If it's your first visit, we recommend starting with our house favorite Chicken-cutlet sandwich. The fresh chicken takes this sandwich to a different level! If you’re here for breakfast then the Bacon Breakfast Crepe should be your number one choice. Our viral Dubai Chocolate Strawberry Cups or Dubai Chocolate Pistachio Crepe (the pistachio paste is what makes them legendary) are also a must-try! Pair that with one of our Signature Lattes (try the Honey Lavender or Nutella Latte), and a blueberry scone to finish off!",
    icon: Heart,
  },
  {
    question: "Do you have dairy-free or vegan options for coffee and food?",
    answer: "Absolutely. We offer premium alternative milks — oat, almond, coconut, and soy — for all our espresso-based drinks. We also rotate vegan-friendly seasonal specials throughout the year. Just ask our baristas for the best current recommendation based on your dietary preferences.",
    icon: Leaf,
  },
  {
    question: "Do you have gluten-free or vegetarian options?",
    answer: "Yes! We're happy to accommodate gluten-free and vegetarian guests — all of our savory and sweet crepes can be made gluten-free to order. We have 14 gluten-free ice cream flavors, as well as a selection of gluten-free cookies and brownies. We also serve vegetarian and vegan platters.",
    icon: Leaf,
  },
  {
    question: "Do you accommodate nut allergies?",
    answer: "We want you to feel safe and cared for when you visit! Please know that Cocohodo is not a nut-free facility, since nuts (like our house-made pistachio paste) are used throughout our kitchen. That said, we do offer several nut-free menu options, so if you or someone in your group has a nut allergy, just let your barista know and we'll help you find something safe and delicious to enjoy.",
    icon: Heart,
  },
  {
    question: "What kind of tea does Cocohodo serve?",
    answer: "We're proud to serve Harney & Sons tea, and we've got a whole world of flavors for you to explore! Come by and try a variety by the cup, or if you find one you love, you can take home a tea tin of your own. We're also a Harney & Sons wholesaler, so if there's a specific flavor you're after that's not on our menu, just ask and we can special-order it for you. This tea isn't just for sipping, either — it's the secret behind some of our most popular treats, like our Matcha ice cream and Earl Grey ice cream!",
    icon: Coffee,
  },
  {
    question: "Where exactly is Cocohodo located and is there parking?",
    answer: "We are conveniently located just off of S. Mason road, at 1645 Winding Hollow Dr #201, Katy, TX 77450. We serve the Katy, Cinco Ranch, Fulshear, Richmond, and West Houston communities. Yes, we have ample free parking available on-site, making it stress-free to stop by for a quick coffee run or a long, relaxing afternoon.",
    icon: MapPin,
  },
  {
    question: "Does Cocohodo have a rewards program for regulars?",
    answer: "Yes! We love our regulars. Cocohodo has a dedicated rewards program and membership perks to thank the community that supports us. You can earn points on every coffee, crepe, sandwich, and dessert, and unlock birthday rewards, early access to seasonal specials, and exclusive member-only promotions. Ask any team member during your next visit to enroll — no app download required. We also have a Club subscription that gets your FREE drinks all month long!",
    icon: Gift,
  },
  {
    question: "What are the business hours for Cocohodo Katy?",
    answer: "Cocohodo is open 7 days a week. Monday through Thursday we are open from 8:00 AM to 8:00 PM. Friday through Sunday we are open from 8:00 AM to 9:00 PM (Saturdays open at 9:00 AM). For holiday hours, please call (832) 321-5849, check our hours on Google Maps, or check our Instagram @cocohodokatytx for the latest updates.",
    icon: Clock,
  },
  {
    question: "How can I order Cocohodo for delivery or pickup?",
    answer: "You can order Cocohodo for delivery or pickup through our website, or through the Clover app, or through our delivery partners Uber Eats and DoorDash. The fastest way to order is directly through Clover (in-house) for the best pricing and to support us directly. Visit our website to start your order.",
    icon: Car,
  },
  {
    question: "Is Cocohodo kid-friendly?",
    answer: "Absolutely. Cocohodo is a family-friendly cafe, and we love hosting families. We have a special Kids menu with kid-favorites like nutella crepes, chicken tenders and of course, ice cream! We also have puzzles, toys, and plenty of books to keep your little ones entertained, as well as high chairs and comfortable seating for groups. Our staff is always happy to accommodate little ones.",
    icon: Users,
  },
  {
    question: "Does Cocohodo offer gift cards?",
    answer: "Yes, Cocohodo gift cards are available in-store and make a great gift for the coffee lover, dessert enthusiast, or foodie in your life. Stop by during business hours to pick one up in any amount. These also make sweet thoughtful gifts for coworkers, teachers, and friends who love discovering new local spots.",
    icon: Gift,
  },
  {
    question: "How can I contact Cocohodo for partnerships, press, or general inquiries?",
    answer: "We’d love to hear from you! For partnerships, press, or general inquiries, email us at info@cocohodokaty.com or call (832) 321-5849 during business hours. You can also DM us on Instagram @cocohodokatytx, or Facebook @cocohodokatytx — we are very active on social media and usually respond within a few hours.",
    icon: Mail,
  },
  {
    question: "Is Cocohodo wheelchair accessible?",
    answer: "Yes, Cocohodo is wheelchair accessible! We have a step-free entrance and accessible seating, and our team is always happy to help make your visit comfortable. If you have specific needs, just give us a call ahead at (832) 321-5849 and we'll be ready for you.",
    icon: Users,
  },
  {
    question: "Can I make a reservation or book a table in advance?",
    answer: "Cocohodo operates primarily on a walk-in basis, so reservations are not required for regular visits. That said, if you've got a group of 8 or more, or you're planning something special, give us a call at (832) 321-5849 ahead of time so we can set you up right. Otherwise, come on in anytime!",
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

      <div className="container mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
        {/* Inject Schema Markup */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4 text-primary inline-flex items-center gap-3">
            <HelpCircle className="w-10 h-10 sm:w-12 sm:h-12" />
            FAQ
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
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
                  <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-medium py-4 sm:py-6 px-2 hover:no-underline">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Icon with background */}
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-accent/30 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform border border-accent/20">
                        <faq.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <span className="text-foreground group-hover:text-primary transition-colors font-semibold">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed pb-4 sm:pb-6 px-2 pl-14 sm:pl-16 border-t border-border/30 pt-4">
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
              href="mailto:info@cocohodokaty.com"
              className="font-semibold text-primary hover:underline"
            >
              info@cocohodokaty.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
