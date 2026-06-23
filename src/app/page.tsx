import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import PictureCollageSection from '@/components/picture-collage-section';
import MembershipSection from '@/components/membership-section';
import CommunitySection from '@/components/community-section';
import MenuSection from '@/components/menu-section';
import NollyPasteSection from '@/components/nolly-paste-section';
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
        <PictureCollageSection />
        <MembershipSection />
        <CommunitySection />
        <MenuSection />
        <NollyPasteSection />
        <AmenitiesSection />
        <ReviewsSection />
        <InstagramSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
