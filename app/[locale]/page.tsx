'use client';
import Bio from '@/components/bio';
import Header from '@/components/header';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Bio />
      </main>
    </div>
  );
}
