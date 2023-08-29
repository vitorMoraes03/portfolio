import { useTranslations } from 'next-intl';
import { MediaLinks } from './hero';
import { LinksUnderlined } from './header';

function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="flex items-center justify-between border-t py-3 text-[10px] opacity-80">
      <div>
        <p>{t('copy')}</p>
      </div>
      <div>
        <ul className="flex gap-2">
          <li>
            <LinksUnderlined text={t('linkedin')} />
          </li>
          <li>
            <LinksUnderlined text={t('github')} />
          </li>
          <li>
            <LinksUnderlined text={t('email')} />
          </li>
        </ul>
      </div>
      <div>
        <p>{t('message')}</p>
      </div>
    </footer>
  );
}

export default Footer;
