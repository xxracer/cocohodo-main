import Image from "next/image";

export default function Header() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Amenities", href: "#amenities" },
    { name: "Reviews", href: "#reviews" },
    { name: "IG", href: "#instagram" },
    { name: "Contact", href: "#footer-contact" },
  ];

  return (
    <header className="absolute top-0 z-50 w-full pt-6">
      <div className="container mx-auto flex h-20 max-w-screen-2xl items-center">
        <a href="#" className="mr-6 flex items-center">
          <Image
            src="https://static.wixstatic.com/media/c5947c_8cfb0ad6973445e3aea4f437c94e314f~mv2.png"
            alt="Cocohodo Katy Logo"
            width={180}
            height={40}
            className="object-contain brightness-0 invert"
          />
        </a>
        <nav className="ml-auto flex items-center gap-4 text-sm lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-white drop-shadow-md transition-colors hover:text-white/80"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
