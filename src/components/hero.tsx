'use client';

import CurriculumIcon from '@/icons/curriculum';
import GitHubIcon from '@/icons/github';
import LinkedInIcon from '@/icons/linkedIn';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';

function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="flex flex-col items-center pt-20 md:grid md:grid-cols-11 md:items-start">
      <div className="md:col-span-6">
        <Image
          src={'/images/vitormoraes.png'}
          alt="personal picture"
          width={450}
          height={450}
          className="object-cover md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px]"
        />
      </div>
      <div className="flex max-w-[80%] flex-col pt-8 md:col-span-5 md:flex-none md:items-start md:text-start">
        <div className="mb-5 text-4xl font-semibold lg:text-6xl">
          <h1>{t('hello')}</h1>
          <h1>{t('engineer')}</h1>
        </div>
        <MediaLinks />
        <div className="mt-3 text-xl xs:w-4/5 md:w-auto lg:text-2xl">
          <p>{t('text')}</p>
        </div>
      </div>
    </section>
  );
}

interface LinkProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

function LinkProps({ href, title, children }: LinkProps) {
  return (
    <Link
      href={href}
      title={title}
      className="hover:opacity-70"
      target="_blank"
    >
      {children}
    </Link>
  );
}

export function MediaLinks() {
  const locale = useLocale();

  return (
    <div className="flex gap-2">
      <LinkProps
        href={'https://www.linkedin.com/in/vitorr-moraes/'}
        title="Linkedin"
      >
        <LinkedInIcon />
      </LinkProps>
      <LinkProps
        href={'https://github.com/vitorMoraes03'}
        title="GitHub"
      >
        <GitHubIcon />
      </LinkProps>
      <LinkProps
        href={
          locale === 'pt-BR'
            ? 'https://drive.google.com/file/d/1umKmJ_adpBfFATmRwUxbjz1Jy_bmDNMF/view'
            : 'https://drive.google.com/file/d/1sYDF2dGqZag24nMiSv0UJatJqcMgod1t/view'
        }
        title="Curriculum"
      >
        <CurriculumIcon />
      </LinkProps>
    </div>
  );
}

export default Hero;
