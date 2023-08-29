import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ListItem from './listItem';
import { useState } from 'react';
import { url } from 'inspector';

interface ProjectImagesProps {
  setSelection: React.Dispatch<
    React.SetStateAction<number>
  >;
  selectionValue: number;
}

function ProjectImages({
  setSelection,
  selectionValue,
}: ProjectImagesProps) {
  const t = useTranslations('Projects');
  const imagesKeysProjects = [0, 1, 2];
  // const [currentDropdown, setCurrentDropdown] = useState<
  //   number | null
  // >(null);
  const projectsArray = imagesKeysProjects.map((key) => ({
    name: t(`projects.${key}.name`),
    src: t(`projects.${key}.imageUrl`),
  }));

  return (
    <div className="flex flex-col gap-1">
      {projectsArray.map((project, index) => (
        <button onClick={() => setSelection(index)}>
          <Image
            src={project.src}
            alt={project.name}
            width={350}
            height={150}
            className={`h-20 w-full rounded-xl object-cover grayscale filter 
          transition-all duration-500 ease-in-out hover:drop-shadow-2xl
          md:w-4/5 ${
            selectionValue === index
              ? 'scale-[1.03] grayscale-0 md:scale-[1.05]'
              : 'grayscale'
          }`}
            title={project.name}
          />
        </button>
      ))}
    </div>
  );
}

export default ProjectImages;
