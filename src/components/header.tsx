'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next-intl/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  aboutRef: any;
  projectsRef: any;
}

function Header({ aboutRef, projectsRef }: HeaderProps) {
  const t = useTranslations('Header');
  const locale = useLocale();

  // about e projects vai mover a tela p eles
  // contact vai abrir o outlook
  // curriculo, download curriculo

  return (
    <header className="flex justify-between xs:items-center md:grid md:grid-cols-12">
      <div className="col-span-5 hidden md:inline-block">
        <h3>{t('logo')}</h3>
      </div>
      <div className="col-span-6 flex flex-col items-start gap-1 xs:flex-row xs:gap-6 lg:gap-10">
        <LinksUnderlined
          text={t('index.about')}
          refHtml={aboutRef}
        />
        <LinksUnderlined
          text={t('index.projects')}
          refHtml={projectsRef}
        />
        <LinksUnderlined
          text={t('index.contact')}
          linkEmail="mailto:vitoristvan@hotmail.com"
        />
      </div>
      <div className="col-span-1 h-fit justify-self-end">
        {locale === 'en-US' ? (
          <Link href={'/'} locale="pt-BR">
            <Image
              src={'/images/br.png'}
              alt="brazil flag"
              width={20}
              height={20}
              title="pt-BR"
              className="h-auto w-auto"
            />
          </Link>
        ) : (
          <Link href={'/'} locale="en-US">
            <Image
              src={'/images/us.png'}
              alt="usa flag"
              width={20}
              height={20}
              title="en-US"
              className="h-auto w-auto"
            />
          </Link>
        )}
      </div>
    </header>
  );
}

export function LinksUnderlined({
  text,
  refHtml,
  linkEmail,
}: {
  text: string;
  refHtml?: any;
  linkEmail?: string;
}) {
  const [mouseEnter, setMouseEnter] = useState(false);
  const router = useRouter();

  return (
    <div
      className="relative"
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <button
        className="hover:text-underlined"
        onClick={() => {
          refHtml &&
            refHtml.current.scrollIntoView({
              behavior: 'smooth',
            });
          linkEmail && router.push(linkEmail);
        }}
      >
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
