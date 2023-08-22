'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  const t = useTranslations('Header');

  return (
    <nav className="xs:items-center flex justify-between md:grid md:grid-cols-12">
      <div className="col-span-5 hidden md:inline-block">
        <h3>{t('logo')}</h3>
      </div>
      <div className="xs:gap-6 xs:flex-row col-span-6 flex flex-col items-start gap-1 lg:gap-10">
        <button>{t('index.about')}</button>
        <button>{t('index.projects')}</button>
        <button>{t('index.contact')}</button>
        <button>{t('index.certificates')}</button>
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
    </nav>
  );
}

export default Header;
