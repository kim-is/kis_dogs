import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PreparationSection } from './components/PreparationSection';
import { KnowledgeSection } from './components/KnowledgeSection';
import { CostCalculatorSection } from './components/CostCalculatorSection';
import { SuppliesSection } from './components/SuppliesSection';
import { PlacesSection } from './components/PlacesSection';
import { PetEtiquetteSection } from './components/PetEtiquetteSection';
import { Footer } from './components/Footer';
import { QuizModal } from './components/QuizModal';
import { PlaceDetailModal } from './components/PlaceDetailModal';
import { PetPlace } from './types';

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<PetPlace | null>(null);

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col selection:bg-amber-100 selection:text-amber-900">
      {/* Top Bar Navigation */}
      <Navbar onOpenQuiz={() => setIsQuizOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenQuiz={() => setIsQuizOpen(true)} />

        {/* 01. Pre-adoption Preparation & 3-3-3 Rule */}
        <PreparationSection />

        {/* 02. Essential Care & Training Knowledge */}
        <KnowledgeSection />

        {/* 03. Financial Lifetime Cost Simulator */}
        <CostCalculatorSection />

        {/* 04. Supplies Guide & Where to Buy */}
        <SuppliesSection />

        {/* 05. Pet-Friendly Places Directory */}
        <PlacesSection onSelectPlace={(place) => setSelectedPlace(place)} />

        {/* 06. 5 Golden Rules of Petiquette */}
        <PetEtiquetteSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <QuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />

      <PlaceDetailModal
        place={selectedPlace}
        onClose={() => setSelectedPlace(null)}
      />
    </div>
  );
}
