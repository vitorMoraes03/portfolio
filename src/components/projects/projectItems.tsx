import { useState } from 'react';
import ListItem from './listItem';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface ProjectItemsProps {
  selectionValue: number;
}

function ProjectItems({
  selectionValue,
}: ProjectItemsProps) {
  const [currentDropdown, setCurrentDropdown] = useState<
    number | null
  >(null);
  const t = useTranslations('Projects');

  return (
    <div>
      <ul>
        <li className="flex items-center justify-between border-b border-gray-200 py-4 text-xl">
          {/* <Link
            href={t(`projects.${selectionValue}.url`)}
            className="flex text-xl"
          >
            <span className="mr-1">01. </span>
            <p className="w-[80%]">{t(`link`)}</p>
          </Link> */}
          <div className="flex">
            <span className="mr-1">01. </span>
            <p className="w-[90%]">{t(`link`)}</p>
          </div>
          <Link
            href={t(`projects.${selectionValue}.url`)}
            className="text-sm font-semibold uppercase 
            tracking-wide text-gray-400 hover:text-black"
            target="_blank"
          >
            Live
          </Link>
        </li>
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
        <ListItem
          number={4}
          keyItem={selectionValue}
          setCurrentDropdown={setCurrentDropdown}
          currentDropdown={currentDropdown}
        />
      </ul>
    </div>
  );
}

export default ProjectItems;
