import { useState } from 'react';
import ListItem from './listItem';

interface ProjectItemsProps {
  selectionValue: number;
}

function ProjectItems({
  selectionValue,
}: ProjectItemsProps) {
  const [currentDropdown, setCurrentDropdown] = useState<
    number | null
  >(null);

  return (
    <div>
      <ul>
        <ListItem
          number={1}
          keyItem={selectionValue}
          setCurrentDropdown={setCurrentDropdown}
          currentDropdown={currentDropdown}
        />
        <ListItem
          number={2}
          keyItem={selectionValue}
          setCurrentDropdown={setCurrentDropdown}
          currentDropdown={currentDropdown}
        />
        <ListItem
          number={3}
          keyItem={selectionValue}
          setCurrentDropdown={setCurrentDropdown}
          currentDropdown={currentDropdown}
        />
      </ul>
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

{
  /* <h2 className="bg-opacity-60 bg-cover text-3xl">
    {t(`projects.${keyItem}.name`)}
  </h2> */
}
{
  /* <div className="max-w-[80%] pt-6">
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
  </div> */
}
{
  /* <div className="pt-6">
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
  </div> */
}

{
  /* <div className="flex flex-col items-center justify-start gap-4">
  <Image
    src={t(`projects.${keyItem}.imageUrl`)}
    alt="website shoes"
    width={350}
    height={150}
    className="h-60 w-60 cursor-pointer rounded-xl object-fill 
    filter transition-all duration-500 ease-in-out hover:scale-110 hover:drop-shadow-2xl"
  />
  </div> */
}

export default ProjectItems;
