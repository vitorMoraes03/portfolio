'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Header() {
  const t = useTranslations('Header');
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <header className="flex justify-between xs:items-center md:grid md:grid-cols-12">
      <div className="col-span-5 hidden md:inline-block">
        <h3>{t('logo')}</h3>
      </div>
      <div className="col-span-6 flex flex-col items-start gap-1 xs:flex-row xs:gap-6 lg:gap-10">
        <LinksHeader buttonText={t('index.about')} />
        <LinksHeader buttonText={t('index.projects')} />
        <LinksHeader buttonText={t('index.contact')} />
        <LinksHeader buttonText={t('index.certificates')} />
      </div>
      <div className="col-span-1 h-fit justify-self-end">
        <Link href={'/teste'}>
          <Image
            src={'/images/br.png'}
            alt="brazil flag"
            width={20}
            height={20}
            title="pt-BR"
          />
        </Link>
      </div>
    </header>
  );
}

function LinksHeader({
  buttonText,
}: {
  buttonText: string;
}) {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <button className="hover:text-underlined">
        {buttonText}
      </button>
      <span
        className="z-2 absolute bottom-1 left-0 h-px w-full bg-black"
        style={{
          willChange: 'transform, color',
          transform: mouseEnter ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: mouseEnter
            ? '0% 50%'
            : '100% 50%',
          transition:
            'transform 0.45s, -webkit-transform 0.45s',
          transitionTimingFunction:
            'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />
    </div>
  );
}

export default Header;
