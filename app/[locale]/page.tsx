'use client';

import About from '@/components/about';
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
        <About />
        <Projects />
      </main>
    </div>
  );
}
