import { useTranslations } from 'next-intl';
import ProjectImages from './projectImages';
import ProjectItems from './projectItems';
import { useState } from 'react';

function Projects() {
  const t = useTranslations('Projects');
  const [projectSelected, setProjectSelected] = useState(0);

  return (
    <section className="pt-28">
      <div>
        <h2 className="text-3xl">{t(`title`)}?!</h2>
      </div>
      <div className="grid grid-cols-2 pt-20">
        <ProjectImages setSelection={setProjectSelected} selectionValue={projectSelected}/>
        <ProjectItems selectionValue={projectSelected}/>
      </div>
    </section>
  );
}

export default Projects;
