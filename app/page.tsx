import CTA from "./_components/cta";
import Customers from "./_components/customers";
import HeroSection from "./_components/hero-section";
import Navbar from "./_components/nav-bar";
import ProblemSection from "./_components/problem-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <CTA />
      <Customers />
      <ProblemSection />
    </main>
  );
}
