import { useTranslations } from 'next-intl';
import ProjectImages from './projectImages';
import ProjectItems from './projectItems';
import { useState } from 'react';

function Projects({ projectsRef }: { projectsRef: any }) {
  const t = useTranslations('Projects');
  const keysOfProjects = [0, 1, 2];
  const [projectSelected, setProjectSelected] = useState(0);
  const projectsNames = keysOfProjects.map((key) => {
    return t(`projects.${key}.name`);
  });

  return (
    <section
      className="min-h-[1000px] pt-24 md:min-h-[800px] md:py-28 lg:min-h-[700px]"
      ref={projectsRef}
    >
      <div
        className="flex flex-col justify-between gap-4 
      border-b border-b-gray-200 pb-2 md:flex-row 
      md:items-center md:gap-0 md:pb-0"
      >
        <h2 className="text-2xl">{t(`title`)}</h2>
        <div>
          <ul className="flex text-center leading-tight">
            {projectsNames.map((name, index) => {
              return (
                <li
                  key={index}
                  className={`mr-4 cursor-pointer ${
                    projectSelected === index
                      ? 'opacity-100'
                      : 'opacity-20'
                  }`}
                  onClick={() => setProjectSelected(index)}
                >
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="grid gap-12 pt-10 md:grid-cols-2 md:gap-0 md:pt-28">
        <ProjectImages
          setSelection={setProjectSelected}
          selectionValue={projectSelected}
        />
        <ProjectItems selectionValue={projectSelected} />
      </div>
    </section>
  );
}

export default Projects;
