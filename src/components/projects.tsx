import { useTranslations } from 'next-intl';

function Projects() {
  const t = useTranslations('Projects');

  const arrayForTest = [
    'teste1',
    'teste2',
    'teste3',
    'teste4',
    'teste5',
  ];

  // "Projects": {
  //     "title": "Projects",
  //     "link": "View project",
  //     "description": "Description",
  //     "purpose": "Project Purpose and Goal",
  //     "problems": "Problems and Tought Process",
  //     "repository": "Git hub repository",
  //     "projects": [
  //       {
  //         "name": "Project 1",
  //         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, ultrices turp, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, ultrices turp, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, ultrices turp,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, ultrices turp",
  //         "purpose": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, ultrices turp, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, ultrices turp, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, ultrices turp,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, ultrices turp",
  //         "problems": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, ultrices turp, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, ultrices turp, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, ultrices turp,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, ultrices turp",
  //         "repoUrl": "/teste"
  //       }
  //     ]
  //   },

  return (
    <section className="border">
      <div>
        <h3>{t('title')}</h3>
        <p>loremdasd adas da</p>
      </div>
      <div>
        <h2>{t('title')}</h2>
        <div>
          <ul>
            {arrayForTest.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <button>{t('link')}</button>
        </div>
        <div>
          <p>{t('description')}</p>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Projects;
