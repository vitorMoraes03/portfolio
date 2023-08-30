'use client';

import About from '@/components/about';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Offer from '@/components/offer';
import Projects from '@/components/projects';
import { useRef } from 'react';

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
      <Footer />
    </div>
  );
}
