import { useTranslations } from 'next-intl';
import { MediaLinks } from './hero';
import { LinksUnderlined } from './header';

function Footer() {
  const t = useTranslations('Footer');
  const mediaLink = ['linkedin', 'github', 'email'];

  return (
    <footer className="flex flex-col justify-between gap-2 border-t py-3 text-[10px] opacity-80 xs:flex-row xs:items-center xs:gap-0">
      <div>
        <p>{t('copy')}</p>
      </div>
      <div>
        <ul className="flex flex-col xs:flex-row xs:gap-2">
          {mediaLink.map((link) => (
            <li key={link} className="w-fit">
              <LinksUnderlined text={t(link)} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>{t('message')}</p>
      </div>
    </footer>
  );
}

export default Footer;
