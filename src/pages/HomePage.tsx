import { HeroSection } from '../components/home/HeroSection';
import { CategorySection } from '../components/home/CategorySection';
import { FeaturedProducts } from '../components/products/FeaturedProducts';
import { PaymentSection } from '../components/home/PaymentSection';
import { TestimonialSection } from '../components/home/TestimonialSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <PaymentSection />
      <TestimonialSection />
    </main>
  );
}