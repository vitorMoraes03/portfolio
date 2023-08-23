import { useTranslations } from 'next-intl';

function Bio() {
  const t = useTranslations('Bio');
  const skills = [
    t('arrayOfSkills.0'),
    t('arrayOfSkills.1'),
    t('arrayOfSkills.2'),
    t('arrayOfSkills.3'),
    t('arrayOfSkills.4'),
    t('arrayOfSkills.5'),
    t('arrayOfSkills.6'),
    t('arrayOfSkills.7'),
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2">
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
            {skills.map((skill) => (
              <li
                key={skill}
                className="bg-black px-2 py-1 text-sm font-semibold text-white"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        {/* <div>{t('certificate')}</div> */}
      </div>
    </section>
  );
}

export default Bio;
