'use client';

import Bio from '@/components/bio';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Offer from '@/components/offer';
import Projects from '@/components/projects';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Offer />
        <Bio />
        <Projects />
      </main>
    </div>
  );
}
