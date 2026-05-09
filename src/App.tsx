/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StatsMarquee from "./components/StatsMarquee";
import MbaFailSection from "./components/MbaFailSection";
import ActualMbaSection from "./components/ActualMbaSection";
import BannerSection from "./components/BannerSection";
import PlacementSection from "./components/PlacementSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BottomBanner from "./components/BottomBanner";
import ContactFooter from "./components/ContactFooter";

export default function App() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      <Hero />
      <StatsMarquee />
      <MbaFailSection />
      <ActualMbaSection />
      <BannerSection />
      <PlacementSection />
      <TestimonialsSection />
      <BottomBanner />
      <ContactFooter />
    </main>
  );
}
