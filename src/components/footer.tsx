import { useTranslations } from 'next-intl';
import LinksUnderlined from './links';

function Footer() {
  const t = useTranslations('Footer');
  const mediaLinks = [
    {
      text: 'linkedin',
      link: 'https://www.linkedin.com/in/vitorr-moraes/',
      targetBlank: true,
    },
    {
      text: 'github',
      link: 'https://github.com/vitorMoraes03',
      targetBlank: true,
    },
    {
      text: 'email',
      link: 'mailto:vitoristvan@hotmail.com',
      targetBlank: true,
    },
  ];

  return (
    <footer className="flex flex-col justify-between gap-2 border-t py-3 text-[10px] opacity-80 xs:flex-row xs:items-center xs:gap-0">
      <div>
        <p>{t('copy')}</p>
      </div>
      <div>
        <ul className="flex flex-col xs:flex-row xs:gap-2">
          {mediaLinks.map((obj, index) => (
            <li
              key={`${index}-${obj.text}`}
              className="w-fit"
            >
              <LinksUnderlined
                text={t(obj.text)}
                idForLink={obj.link}
                targetBlank={obj.targetBlank}
              />
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
