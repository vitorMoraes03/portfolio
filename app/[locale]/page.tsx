'use client';
import { useTranslations } from 'next-intl';
import Header from '@/components/header';

export default function Home() {
  const t = useTranslations('Index');
  // return <h1 className='text-2xl border'>{t('title')}</h1>;
  return (
    <div>
      <Header />
    </div>
  );
}
