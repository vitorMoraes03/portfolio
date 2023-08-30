'use client';

import About from '@/components/about';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Offer from '@/components/offer';
import Projects from '@/components/projects';
import { useRef } from 'react';

export default function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div>
      <Header aboutRef={aboutRef} projectsRef={projectsRef} />
      <main>
        <Hero />
        <Offer />
        <About aboutRef={aboutRef}/>
        <Projects projectsRef={projectsRef}/>
      </main>
      <Footer />
    </div>
  );
}
