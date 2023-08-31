import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

function LinksUnderlined({
  text,
  idForLink,
  targetBlank,
}: {
  text: string;
  idForLink: string;
  targetBlank: boolean;
}) {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <Link
        className="hover:text-underlined"
        href={idForLink}
        target={targetBlank ? '_blank' : ''}
      >
        {text}
      </Link>
      <span
        className="z-2 absolute bottom-[2px] left-0 h-px w-full bg-black"
        style={{
          willChange: 'transform, color',
          transform: mouseEnter ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: mouseEnter
            ? '0% 50%'
            : '100% 50%',
          transition:
            'transform 0.45s, -webkit-transform 0.45s',
          transitionTimingFunction:
            'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />
    </div>
  );
}

export default LinksUnderlined;
