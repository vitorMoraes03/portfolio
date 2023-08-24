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
    <li className="border-b border-gray-200 py-2">
      <div className="flex items-center justify-between">
        <div>
          <span className="mr-1">0{number}. </span>
          {t(identifyText(number))}
        </div>
        {open ? (
          <button
            onClick={() => {
              setCurrentDropdown(null);
            }}
          >
            <MinusIcon />
          </button>
        ) : (
          <button
            onClick={() => {
              setCurrentDropdown(number);
            }}
          >
            <AddIcon />
          </button>
        )}
      </div>
      <div
        className={`ease-cubic-bezier overflow-hidden text-sm transition-all duration-[400ms] ${
          open ? 'h-40' : 'h-0'
        }`}
      >
        <p className="pt-3">
          {t(`projects.${keyItem}.${identifyText(number)}`)}
        </p>
      </div>
    </li>
  );
}

function identifyText(number: number) {
  switch (number) {
    case 1:
      return 'description';
    case 2:
      return 'purpose';
    case 3:
      return 'problems';
  }
}

export default ListItem;
