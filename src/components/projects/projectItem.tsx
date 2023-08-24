import AddIcon from '@/icons/add';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

function ProjectItem({
  keyItem,
  keysSkills,
}: {
  keyItem: number;
  keysSkills: number[];
}) {
  const t = useTranslations('Projects');

  return (
    <div className="grid md:grid-cols-2">
      <div>
        <h2 className="text-3xl">
          {t(`projects.${keyItem}.name`)}
        </h2>
        <div className="max-w-[80%] pt-6">
          <ul className="flex flex-wrap gap-1">
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
        </div>
        <div className="pt-6">
          <ul>
            <ListItem text={t(`description`)} number={1} />
            <ListItem text={t(`purpose`)} number={2} />
            <ListItem text={t(`problems`)} number={3} />
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 border">
        <Image
          src={t(`projects.${keyItem}.imageUrl`)}
          alt="website shoes"
          width={200}
          height={200}
        />
        <div>
          {/* LINK URL {t(`projects.${key}.repoUrl`)} */}
          <button className="border">{t(`link`)}</button>
        </div>
      </div>
    </div>
  );
}

function ListItem({
  text,
  number,
}: {
  text: string;
  number: number;
}) {
  return (
    <li className="flex items-center justify-between border-b border-gray-300 py-2">
      <div>
        <span>0{number}. </span>
        {text}
      </div>
      <AddIcon />
    </li>
  );
}

export default ProjectItem;
