import { useTranslations } from 'next-intl';
import ProjectImages from './projectImages';
import ProjectItems from './projectItems';
import { useState } from 'react';

function Projects() {
  const t = useTranslations('Projects');
  const keysOfProjects = [0, 1, 2];
  const [projectSelected, setProjectSelected] = useState(0);
  const projectsNames = keysOfProjects.map((key) => {
    return t(`projects.${key}.name`);
  });

  return (
    <section className="py-28 min-h-[700px]">
      <div className="flex justify-between border-b border-b-gray-200">
        <h2 className="text-2xl">{t(`title`)}</h2>
        <div>
          <ul className="flex">
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
      <div className="grid grid-cols-2 pt-28">
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
