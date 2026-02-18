'use client';

import React, { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const beverageCategories = [
  {
    title: "Organic Coffee",
    items: [
      { name: "House Espresso" },
      { name: "Americano" },
      { name: "Cortado" },
      { name: "Capuccino" },
      { name: "Latte" },
      { name: "Flavored Latte (Vanilla, Caramel, Mocha, Honeynut)" },
      { name: "Coco Latte" },
      { name: "Nutella Latte" },
      { name: "Honey Lavender Latte" },
      { name: "Iced Sea Salt Latte" },
    ]
  },
  {
    title: "Specialty",
    items: [
      { name: "Lavender Latte" },
      { name: "Chai Latte" },
      { name: "Hot Chocolate" },
      { name: "Grain Latte" },
    ]
  },
  {
    title: "Tea",
    items: [
      { name: "Harney & Sons Tea" },
      { name: "Thai Iced Tea" },
      { name: "Charlie's Tea" },
      { name: "Plum Tea (Decaf)" },
    ]
  },
  {
    title: "Ice Blended",
    items: [
      { name: "Caramel Machiatto" },
      { name: "Mocha Chip" },
      { name: "Vanilla Bean" },
      { name: "Cookies & Cream" },
      { name: "Frozen Hot Chocolate" },
      { name: "Fruit Smoothie" },
    ]
  },
  {
    title: "Matcha",
    items: [
      { name: "Matcha Latte" },
      { name: "Frozen Matcha" },
      { name: "Iced Strawberry Cream Matcha" },
      { name: "Iced White Chocolate & Peppermint Matcha" },
    ]
  },
];

const foodCategories = [
  {
    title: "Breakfast",
    items: [
      { name: "Breakfast Crepe" },
      { name: "Morning Veggie Crepe" },
      { name: "Morning Omelette" },
      { name: "Breakfast Platter" },
      { name: "Avocado Toast" },
    ]
  },
  {
    title: "Chef Specials",
    items: [
      { name: "Apple Cranberry Salad" },
      { name: "Soup of the Day" },
    ]
  },
  {
    title: "Crepes & Chicken",
    items: [
      { name: "Italiano Crepe" },
      { name: "Chicken N' Cheese Crepe" },
      { name: "Chicken Enchilada Crepe" },
      { name: "Vegeterian Crepe" },
      { name: "Feta and Spinach Crepe" },
      { name: "Chicken Tender Special" },
      { name: "Chicken & Waffles" },
    ]
  },
  {
    title: "Sandwiches",
    items: [
      { name: "Chicken Cutlet" },
      { name: "Chicken Parmesean" },
      { name: "Chicken Salad" },
      { name: "Egg Salad" },
      { name: "Turkey & Cheese" },
      { name: "Grilled Cheese" },
      { name: "Falafel Wrap" },
    ]
  },
  {
    title: "Sweet Crepes & Waffles",
    items: [
      { name: "Banana Foster" },
      { name: "Strawberry & Cream" },
      { name: "Nutella Cheesecake" },
      { name: "Nutella" },
      { name: "Dulce De Leche" },
    ]
  },
  {
    title: "Dubai Chocolate Creations",
    items: [
      { name: "Dubai Chocolate Pistachio Crepe" },
      { name: "Dubai Strawberry Cup" },
      { name: "Dubai Cheesecake" },
      { name: "Dubai Chocolate Shake" },
    ]
  },
  {
    title: "Ice Cream",
    items: [
      { name: "1 Scoop" },
      { name: "2 Scoops" },
      { name: "Affogato" },
    ]
  },
  {
    title: "Kids Menu",
    items: [
      { name: "Kids Pepperoni Crepe" },
      { name: "Kids Breakfast Platter" },
      { name: "Kids Chicken & Fries" },
    ]
  },
];

const MenuItem = ({ name }: { name: string; price?: string }) => (
  <div className="flex justify-between py-2">
    <span className="text-foreground/90">{name}</span>
  </div>
);

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<'beverages' | 'food'>('beverages');

  return (
    <section id="menu" className="container mx-auto max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Our Menu</h2>
        <p className="mt-2 text-lg text-muted-foreground">Crafted with care, inspired by tradition.</p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setActiveTab('beverages')}
            className={cn(
              "px-6 py-2 text-sm font-medium border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2 focus:ring-primary focus:text-primary transition-colors",
              activeTab === 'beverages' ? "bg-primary text-white border-primary" : "bg-white text-gray-900"
            )}
          >
            Drinks
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('food')}
            className={cn(
              "px-6 py-2 text-sm font-medium border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2 focus:ring-primary focus:text-primary transition-colors",
              activeTab === 'food' ? "bg-primary text-white border-primary" : "bg-white text-gray-900"
            )}
          >
            Pastries
          </button>
        </div>
      </div>

      {activeTab === 'beverages' && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h3 className="text-3xl font-bold text-center mb-8 uppercase tracking-wider text-primary">Beverages</h3>
          <div className="columns-1 lg:columns-2 gap-12 space-y-12">
            {beverageCategories.map((category) => (
              <div key={category.title} className="break-inside-avoid mb-12">
                <h4 className="text-2xl font-bold mb-4 text-primary border-b pb-2 inline-block">{category.title}</h4>
                <div className="space-y-2">
                  {category.items.map((item, index) => (
                    <React.Fragment key={item.name}>
                      <MenuItem name={item.name} />
                      {index < category.items.length - 1 && <Separator className="opacity-50" />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'food' && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h3 className="text-3xl font-bold text-center mb-8 uppercase tracking-wider text-primary">Food</h3>
          <div className="columns-1 lg:columns-2 gap-12 space-y-12">
            {foodCategories.map((category) => (
              <div key={category.title} className="break-inside-avoid mb-12">
                <h4 className="text-2xl font-bold mb-4 text-primary border-b pb-2 inline-block">{category.title}</h4>
                <div className="space-y-2">
                  {category.items.map((item, index) => (
                    <React.Fragment key={item.name}>
                      <MenuItem name={item.name} />
                      {index < category.items.length - 1 && <Separator className="opacity-50" />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
