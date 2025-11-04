import HeaderHero from './components/HeaderHero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import TestimonialsFaqCtaFooter from './components/TestimonialsFaqCtaFooter';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <HeaderHero />
      <Services />
      <CaseStudies />
      <TestimonialsFaqCtaFooter />
    </div>
  );
}

export default App;
