'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Coffee, Croissant, IceCream, Cake, Sparkles, CupSoda, FlaskConical } from "lucide-react";

const beverageCategories = [
  {
    title: "Hot Coffee",
    icon: Coffee,
    items: [
      { name: "Americano", price: "$3.99" },
      { name: "Cafe Latte", price: "$5.25" },
      { name: "Cappuccino", price: "$4.95" },
      { name: "Cortado", price: "$4.95" },
      { name: "Vanilla Latte", price: "$5.95" },
      { name: "Caramel Latte", price: "$5.95" },
      { name: "Mocha Latte", price: "$5.95" },
      { name: "Caramel Macchiato", price: "$5.95" },
      { name: "Hazelnut Latte", price: "$5.95" },
    ]
  },
  {
    title: "Signature Lattes",
    icon: Sparkles,
    items: [
      { name: "Coco Latte (Vietnamese)", price: "$5.95" },
      { name: "Nutella Latte", price: "$6.50" },
      { name: "Honey Lavender Latte", price: "$6.50" },
      { name: "Honey Nut Latte", price: "$5.95" },
      { name: "Dubai Chocolate Latte", price: "$6.50" },
      { name: "Bullet Proof Coffee", price: "$6.25" },
      { name: "Green Tea Latte", price: "$5.10" },
    ]
  },
  {
    title: "Iced Coffee",
    icon: CupSoda,
    items: [
      { name: "Iced Americano", price: "$3.99" },
      { name: "Iced Latte", price: "$5.45" },
      { name: "Iced Caramel Latte", price: "$6.25" },
      { name: "Iced Vanilla Latte", price: "$7.19" },
      { name: "Iced Mocha Latte", price: "$7.19" },
      { name: "Iced Coco Latte", price: "$6.25" },
      { name: "Iced Sea Salt Latte", price: "$6.35" },
    ]
  },
  {
    title: "Tea & Matcha",
    icon: FlaskConical,
    items: [
      { name: "Harney & Sons Tea", price: "$3.50" },
      { name: "Thai Iced Tea", price: "$5.00" },
      { name: "Citrus Tea (Yuja-cha)", price: "$4.85" },
      { name: "Plum Tea (Decaf)", price: "$4.50" },
      { name: "Ginger Honey Tea", price: "$4.50" },
      { name: "Matcha Latte", price: "$5.50" },
      { name: "Iced Strawberry Cream Matcha", price: "$8.00" },
    ]
  },
  {
    title: "Ice Blended (Cocochino)",
    icon: IceCream,
    items: [
      { name: "Caramel Cocochino", price: "$8.35" },
      { name: "Mocha Chip Cocochino", price: "$8.35" },
      { name: "Vanilla Cocochino", price: "$8.35" },
      { name: "Cookies & Cream Cocochino", price: "$8.35" },
      { name: "Green Tea Cocochino", price: "$8.35" },
      { name: "Frozen Hot Chocolate", price: "$8.35" },
    ]
  },
  {
    title: "Smoothies",
    icon: Sparkles,
    items: [
      { name: "Mango Smoothie", price: "$8.35" },
      { name: "Strawberry Smoothie", price: "$8.35" },
      { name: "Blueberry Yogurt Smoothie", price: "$8.35" },
      { name: "Banana Yogurt Smoothie", price: "$8.35" },
      { name: "Grain Smoothie", price: "$8.35" },
    ]
  },
];

const foodCategories = [
  {
    title: "Signature Walnut Pastries (Hodo Gwaja)",
    icon: Croissant,
    description: "Our famous Korean walnut-shaped pastries - Freshly baked daily!",
    featured: true,
    items: [
      { name: "Small Bag (9 pcs)", price: "$8.55" },
      { name: "Medium Bag (15 pcs)", price: "$14.15" },
      { name: "Large Bag (21 pcs)", price: "$18.95" },
      { name: "X-Large Bag (30 pcs)", price: "$25.75" },
      { name: "Small Box (36 pcs)", price: "$38.35" },
      { name: "Medium Box (56 pcs)", price: "$56.45" },
      { name: "Large Box (84 pcs)", price: "$76.95" },
    ]
  },
  {
    title: "Dubai Chocolate Creations",
    icon: Sparkles,
    description: "Trending now! Viral Dubai chocolate flavors",
    featured: true,
    items: [
      { name: "Dubai Chocolate Strawberry Cup (16oz)", price: "$15.95" },
      { name: "Dubai Chocolate Pistachio Crepe", price: "$14.95" },
      { name: "Dubai Chocolate Latte", price: "$6.50" },
      { name: "Dubai Chocolate Chip", price: "$5.00" },
    ]
  },
  {
    title: "Breakfast",
    icon: Coffee,
    items: [
      { name: "Breakfast Crepe", price: "$11.50" },
      { name: "Morning Omelette", price: "$11.50" },
      { name: "Avocado Toast", price: "$10.50" },
    ]
  },
  {
    title: "Savory Crepes",
    icon: Croissant,
    items: [
      { name: "Chicken n' Cheese Crepe", price: "$13.95" },
      { name: "Italiano Crepe", price: "$13.95" },
      { name: "Chicken Enchilada Crepe", price: "$13.95" },
      { name: "Vegetarian Crepe", price: "$12.95" },
      { name: "Feta and Spinach Crepe", price: "$13.95" },
    ]
  },
  {
    title: "Sandwiches & Wraps",
    icon: Croissant,
    items: [
      { name: "Chicken Parmesan Sandwich", price: "$11.50" },
      { name: "Chicken Cutlet Sandwich", price: "$11.50" },
      { name: "Falafel Wrap", price: "$10.50" },
      { name: "Grilled Cheese", price: "$10.50" },
    ]
  },
  {
    title: "Sweet Crepes",
    icon: Cake,
    items: [
      { name: "Nutella Crepe", price: "$11.50" },
      { name: "Strawberry & Cream Crepe", price: "$12.95" },
      { name: "Banana Foster Crepe", price: "$12.95" },
      { name: "Dulce De Leche Crepe", price: "$12.95" },
    ]
  },
  {
    title: "Waffles",
    icon: Cake,
    items: [
      { name: "Maple Waffle", price: "$9.95" },
      { name: "Green Tea Waffle", price: "$14.35" },
      { name: "Cookies & Cream Waffle", price: "$14.35" },
      { name: "Nutella Waffle", price: "$18.25" },
      { name: "Ice Cream Waffle", price: "$18.25" },
    ]
  },
  {
    title: "Shaved Ice (Bingsu)",
    icon: IceCream,
    items: [
      { name: "Original Shaved Ice", price: "$15.55" },
      { name: "Coffee Shaved Ice", price: "$16.25" },
      { name: "Green Tea Shaved Ice", price: "$16.25" },
      { name: "Cookies & Cream Shaved Ice", price: "$16.50" },
      { name: "Mango Shaved Ice", price: "$17.45" },
      { name: "Berry Shaved Ice", price: "$17.45" },
    ]
  },
  {
    title: "Desserts",
    icon: Cake,
    items: [
      { name: "Cheesecake", price: "$6.95" },
      { name: "Affogato", price: "$7.95" },
    ]
  },
];

const MenuItem = ({ name, price }: { name: string; price: string }) => (
  <div className="flex justify-between items-center py-2.5 px-2 rounded-lg hover:bg-secondary/30 transition-colors">
    <span className="text-foreground/90">{name}</span>
    <span className="font-semibold text-primary whitespace-nowrap ml-4">{price}</span>
  </div>
);

const CategoryCard = ({
  title,
  items,
  icon: Icon,
  description,
  featured
}: {
  title: string;
  items: typeof foodCategories[0]['items'];
  icon: React.ElementType;
  description?: string;
  featured?: boolean;
}) => (
  <div className={cn(
    "rounded-2xl p-6 transition-all duration-300 elegant-shadow hover:shadow-xl",
    featured
      ? "bg-gradient-to-br from-accent/20 to-primary/10 border-2 border-accent/40"
      : "bg-background border border-border hover:border-accent/30"
  )}>
    <div className="flex items-center gap-3 mb-2">
      <div className={cn(
        "p-2 rounded-lg",
        featured ? "bg-accent text-primary" : "bg-primary/10 text-primary"
      )}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-xl font-bold text-primary">{title}</h4>
        {description && (
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        )}
      </div>
    </div>
    <div className="space-y-1 mt-4">
      {items.map((item) => (
        <MenuItem
          key={item.name}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  </div>
);

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<'beverages' | 'food'>('beverages');

  return (
    <section id="menu" className="bg-gradient-to-b from-secondary/30 to-background walnut-pattern py-24">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">Discover</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 gradient-text">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Crafted with care, inspired by tradition. From authentic Korean walnut pastries to artisanal coffee.
          </p>
          <div className="greek-divider max-w-md mx-auto mb-6" />
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-accent/50 text-primary hover:bg-accent hover:text-primary"
            asChild
          >
            <a
              href="https://www.canva.com/design/DAGWYpV8wDk/34ZOzNepQmP3hHEYQxELfw/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span>View Full Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </Button>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-secondary/50 p-1.5 shadow-inner" role="group">
            <button
              type="button"
              onClick={() => setActiveTab('beverages')}
              className={cn(
                "px-8 py-3 text-sm font-semibold rounded-full transition-all duration-300",
                activeTab === 'beverages'
                  ? "bg-primary text-white shadow-md"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              <span className="flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                Beverages
              </span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('food')}
              className={cn(
                "px-8 py-3 text-sm font-semibold rounded-full transition-all duration-300",
                activeTab === 'food'
                  ? "bg-primary text-white shadow-md"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              <span className="flex items-center gap-2">
                <Croissant className="w-4 h-4" />
                Food & Pastries
              </span>
            </button>
          </div>
        </div>

        {/* Beverages Tab */}
        {activeTab === 'beverages' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beverageCategories.map((category) => (
                <CategoryCard
                  key={category.title}
                  title={category.title}
                  items={category.items}
                  icon={category.icon}
                />
              ))}
            </div>
          </div>
        )}

        {/* Food Tab */}
        {activeTab === 'food' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodCategories.map((category) => (
                <CategoryCard
                  key={category.title}
                  title={category.title}
                  items={category.items}
                  icon={category.icon}
                  description={category.description}
                  featured={category.featured}
                />
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-block rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Order?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Visit us in store or order online for pickup. Catering available for events!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-full bg-accent text-primary font-semibold px-8 hover:bg-accent/90"
                asChild
              >
                <a href="#menu">Order Now</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-primary/50 text-primary hover:bg-primary hover:text-white px-8"
                asChild
              >
                <a
                  href="https://www.canva.com/design/DAGWYpV8wDk/34ZOzNepQmP3hHEYQxELfw/view?utm_content=DAGWYpV8wDk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h76530eb114"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full Menu
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
