'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Header() {
  const t = useTranslations('Header');

  return (
    <header className="flex justify-between xs:items-center md:grid md:grid-cols-12">
      <div className="col-span-5 hidden md:inline-block">
        <h3>{t('logo')}</h3>
      </div>
      <div className="col-span-6 flex flex-col items-start gap-1 xs:flex-row xs:gap-6 lg:gap-10">
        <LinksUnderlined text={t('index.about')} />
        <LinksUnderlined text={t('index.projects')} />
        <LinksUnderlined text={t('index.contact')} />
        <LinksUnderlined text={t('index.certificates')} />
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

export function LinksUnderlined({
  text,
}: {
  text: string;
}) {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <button className="hover:text-underlined">
        {text}
      </button>
      <span
        className="z-2 absolute bottom-[2px] left-0 h-px w-full bg-black"
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
