import { useTranslations } from 'next-intl';
import Motion from './motion';

function Projects() {
  const t = useTranslations('Projects');

  return (
    <section className='pt-28'>
      <div>
        <h2 className='text-2xl'>{t(`title`)}</h2>
      </div>
      <div className='pt-6'>
        <Motion />
      </div>
    </section>
  );
}

export default Projects;
