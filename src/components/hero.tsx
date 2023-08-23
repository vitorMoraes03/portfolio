'use client';

import EmailIcon from '@/icons/email';
import GitHubIcon from '@/icons/github';
import LinkedInIcon from '@/icons/linkedIn';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="flex flex-col items-center pt-20 md:grid md:grid-cols-11 md:items-start">
      <div className="flex flex-col items-center pt-4 text-center md:col-span-5 md:flex-none md:items-start md:text-start">
        <div className="mb-6 text-4xl font-semibold lg:text-6xl">
          <h1>{t('hello')}</h1>
          <h1>{t('engineer')}</h1>
        </div>
        <div className="flex gap-4">
          <Link href={'/'} title="Email">
            <EmailIcon />
          </Link>
          <Link href={'/'} title="Linkedin">
            <LinkedInIcon />
          </Link>
          <Link href={'/'} title="GitHub">
            <GitHubIcon />
          </Link>
        </div>
        <div className="xs:px-6 mt-4 text-xl sm:px-16 md:px-0 lg:pr-4 lg:text-2xl">
          <p>{t('text')}</p>
        </div>
      </div>
      <div className="order-first md:order-none md:col-span-6 md:flex md:justify-center">
        <Image
          src={'/images/vitormoraes.png'}
          alt="personal picture"
          width={450}
          height={450}
          className="border object-cover md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px]"
        />
      </div>
    </section>
  );
}

export default Hero;
