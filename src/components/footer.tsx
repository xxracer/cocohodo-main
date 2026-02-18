import Image from 'next/image';
import BusinessHours from './business-hours';
import FooterContactForm from './footer-contact-form';

export default function Footer() {
  return (
    <footer className="bg-secondary/70 border-t">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          
          <div className="md:col-span-1">
            <a href="#" className="flex items-center">
              <Image
                src="https://static.wixstatic.com/media/c5947c_8cfb0ad6973445e3aea4f437c94e314f~mv2.png"
                alt="Cocohodo Katy Logo"
                width={160}
                height={45}
                className="object-contain"
              />
            </a>
            <p className="mt-4 text-muted-foreground">
              Where Stories & Coffee Blend.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-foreground">Contact & Hours</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>1712 Westheimer Rd, Katy, TX</li>
              <li>(555) 123-4567</li>
              <li>contact@cocohodokaty.com</li>
            </ul>
            <BusinessHours className="mt-4 text-muted-foreground" />
          </div>

          <div className="md:col-span-1">
            <FooterContactForm />
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground/80">
          <p>&copy; {new Date().getFullYear()} Cocohodo Katy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
