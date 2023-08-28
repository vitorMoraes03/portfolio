import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ListItem from './listItem';
import { useState } from 'react';
import { url } from 'inspector';

interface ProjectItemProps {
  keyItem: number;
  keysSkills: number[];
}

function ProjectItem({
  keyItem,
  keysSkills,
}: ProjectItemProps) {
  const t = useTranslations('Projects');
  const [currentDropdown, setCurrentDropdown] = useState<
    number | null
  >(null);

  // style={{
  //   backgroundImage: `url('/images/vitoristvan_urban_environment_at_night_1.png')`,
  // }}

  return (
    // <div className="grid py-10 md:grid-cols-2">
    <div className="py-10">
      <div>
        <div
          style={{
            backgroundImage: `url('/images/vitoristvan_urban_environment_at_night_1.png')`,
          }}
          className="h-20 rounded-sm bg-cover bg-center opacity-90"
        >
          teste
        </div>
      </div>
      <div>
        {/* <h2 className="bg-opacity-60 bg-cover text-3xl">
          {t(`projects.${keyItem}.name`)}
        </h2> */}
        {/* <div className="max-w-[80%] pt-6">
          <ul className="flex flex-wrap gap-[2px]">
            {keysSkills.map((keySkill) => (
              <li
                key={`${keySkill}-skill`}
                className="skill-box"
              >
                {t(
                  `projects.${keyItem}.arrayOfSkills.${keySkill}`
                )}
              </li>
            ))}
          </ul>
        </div> */}
        <div className="pt-6">
          <ul>
            <ListItem
              number={1}
              keyItem={keyItem}
              setCurrentDropdown={setCurrentDropdown}
              currentDropdown={currentDropdown}
            />
            <ListItem
              number={2}
              keyItem={keyItem}
              setCurrentDropdown={setCurrentDropdown}
              currentDropdown={currentDropdown}
            />
            <ListItem
              number={3}
              keyItem={keyItem}
              setCurrentDropdown={setCurrentDropdown}
              currentDropdown={currentDropdown}
            />
          </ul>
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-start gap-4">
        <Image
          src={t(`projects.${keyItem}.imageUrl`)}
          alt="website shoes"
          width={350}
          height={150}
          className="h-60 w-60 cursor-pointer rounded-xl object-fill 
          filter transition-all duration-500 ease-in-out hover:scale-110 hover:drop-shadow-2xl"
        />
      </div> */}
    </div>
  );
}

{
  /* <div>
          <button className="border border-black px-3 py-1 text-xs font-semibold">
            {t(`link`)}
          </button>
        </div> */
}
{
  /* LINK URL {t(`projects.${key}.repoUrl`)} */
}

export default ProjectItem;
