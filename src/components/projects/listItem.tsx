import AddIcon from '@/icons/add';
import MinusIcon from '@/icons/minus';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

interface ListItemProps {
  number: number;
  setCurrentDropdown: React.Dispatch<
    React.SetStateAction<number | null>
  >;
  currentDropdown: number | null;
  keyItem: number;
}

function ListItem({
  number,
  setCurrentDropdown,
  currentDropdown,
  keyItem,
}: ListItemProps) {
  const [open, setOpen] = useState(false);
  const t = useTranslations('Projects');

  useEffect(() => {
    if (currentDropdown === number) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [currentDropdown]);

  return (
    <li className="border-b border-gray-200 py-4">
      <div
        className="flex cursor-pointer items-center justify-between text-xl"
        onClick={() => {
          if (currentDropdown === number) {
            setCurrentDropdown(null);
            return;
          }
          setCurrentDropdown(number);
        }}
      >
        <div className='flex'>
          <span className="mr-1">0{number}. </span>
          <p className='w-[80%]'>{t(identifyText(number))}</p>
        </div>
        {open ? (
          <button>
            <MinusIcon />
          </button>
        ) : (
          <button>
            <AddIcon />
          </button>
        )}
      </div>
      <div
        className={`overflow-hidden transition-all duration-[400ms] ease-cubic-bezier ${
          open ? 'h-20' : 'h-0'
        }`}
      >
        <p className="pt-3">
          {t(`projects.${keyItem}.${identifyText(number)}`)}.
        </p>
      </div>
    </li>
  );
}

function identifyText(number: number) {
  switch (number) {
    case 2:
      return 'description';
    case 3:
      return 'goals';
    case 4:
      return 'stack';
  }
}

export default ListItem;
