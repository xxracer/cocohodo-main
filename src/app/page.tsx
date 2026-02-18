import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import MenuSection from '@/components/menu-section';
import AmenitiesSection from '@/components/amenities-section';
import ReviewsSection from '@/components/reviews-section';
import InstagramSection from '@/components/instagram-section';
import Footer from '@/components/footer';
import FaqSection from '@/components/faq-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <InstagramSection />
        <AmenitiesSection />
        <ReviewsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
