import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Cocohodo Katy',
  description: 'Modern Korean Walnut Pastries & Specialty Coffee.',
  icons: {
    icon: 'https://static.wixstatic.com/media/c5947c_8cfb0ad6973445e3aea4f437c94e314f~mv2.png',
  },
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
