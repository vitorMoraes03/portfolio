import { useTranslations } from 'next-intl';

function About() {
  const t = useTranslations('About');
  const keys = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <section className="grid grid-cols-1 pt-28 sm:grid-cols-2">
      <div>
        <h2 className="text-3xl">{t('title')}</h2>
        <div className="pt-6">
          <p>{t('text')}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl">{t('skills')}</h2>
        <div className="w-3/4 pt-4">
          <ul className="flex flex-wrap justify-center gap-1">
            {keys.map((key) => (
              <li key={key} className="skill-box">
                {t(`arrayOfSkills.${key}`)}
              </li>
            ))}
          </ul>
        </div>
        {/* <div>{t('certificate')}</div> */}
      </div>
    </section>
  );
}

export default About;
