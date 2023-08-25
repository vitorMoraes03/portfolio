import { useTranslations } from 'next-intl';
import ProjectItem from './projectItem';

function Projects() {
  const t = useTranslations('Projects');

  return (
    <section className="pt-28">
      <div>
        <h2 className="text-2xl">{t(`title`)}</h2>
      </div>
      <div className="pt-5">
        <ProjectItem
          keyItem={0}
          keysSkills={[0, 1, 2, 3, 4, 5, 6, 7]}
        />
        <ProjectItem
          keyItem={1}
          keysSkills={[0, 1, 2, 3, 4, 5, 6, 7]}
        />
        <ProjectItem
          keyItem={2}
          keysSkills={[0, 1, 2, 3, 4, 5, 6, 7]}
        />
      </div>
    </section>
  );
}

export default Projects;
