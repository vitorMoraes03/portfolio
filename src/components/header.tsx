'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next-intl/link';
import LinksUnderlined from './links';

function Header() {
  const t = useTranslations('Header');
  const locale = useLocale();

  return (
    <header className="flex justify-between xs:items-center md:grid md:grid-cols-12">
      <div className="col-span-5 hidden md:inline-block">
        <h3>{t('logo')}</h3>
      </div>
      <div className="col-span-6 flex flex-col items-start gap-1 xs:flex-row xs:gap-6 lg:gap-10">
        <LinksUnderlined
          text={t('index.about')}
          idForLink="/#about"
          targetBlank={false}
        />
        <LinksUnderlined
          text={t('index.projects')}
          idForLink="/#projects"
          targetBlank={false}
        />
        <LinksUnderlined
          text={t('index.contact')}
          idForLink="mailto:vitoristvan@hotmail.com"
          targetBlank={true}
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

export default Header;
