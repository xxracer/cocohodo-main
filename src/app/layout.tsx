import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Cocohodo Katy',
  description: 'Modern Korean Walnut Pastries & Specialty Coffee.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
