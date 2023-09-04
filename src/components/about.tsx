import ArrowLeftIcon from '@/icons/arrowLeft';
import ArrowRightIcon from '@/icons/arrowRight';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

function About() {
  const t = useTranslations('About');
  const imgsKeysCarousel = [0, 1, 2];
  const textKeysAbout = [0, 1, 2];
  const [currentImage, setCurrentImage] = useState(0);
  const imagesArray = imgsKeysCarousel.map((key) => ({
    src: t(`arrayOfImages.${key}.src`),
    alt: t(`arrayOfImages.${key}.alt`),
    title: t(`arrayOfImages.${key}.name`),
  }));
  const iconStyles = 'w-8 h-8 lg:w-10 lg:h-10';

  return (
    <section
      className="grid grid-cols-1 gap-20 pt-20 md:pt-28 md:grid-cols-2 md:gap-0"
      id="about"
    >
      <div className="pr-10">
        <h2 className="text-3xl">{t('title')}</h2>
        <div className="pt-6">
          {textKeysAbout.map((key) => (
            <p key={key} className="mb-[1px]">
              <span className="ml-1 font-semibold text-gray-400">
                {t(`text.${key}.span`)}{' '}
              </span>
              {t(`text.${key}.paragraph`)}
            </p>
          ))}
        </div>
      </div>
      <div
        className="relative order-first h-[225px] w-[225px] 
      self-center justify-self-center xs:h-[275px] xs:w-[275px] 
      md:order-none lg:h-[325px] lg:w-[325px]"
      >
        {imagesArray.map((image, index) => (
          <ImageCarousel
            key={index}
            src={image.src}
            alt={image.alt}
            current={currentImage === index}
            title={image.title}
          />
        ))}
        <button
          className={`absolute -left-12 top-1/2 -translate-y-1/2 ${
            currentImage === 0
              ? 'cursor-default opacity-10'
              : ''
          }`}
          onClick={() => {
            if (currentImage === 0) return;
            setCurrentImage(currentImage - 1);
          }}
        >
          <ArrowLeftIcon stylesProps={iconStyles} />
        </button>
        <button
          className={`absolute -right-12 top-1/2 -translate-y-1/2 
          ${
            currentImage === imagesArray.length - 1
              ? 'cursor-default opacity-10'
              : ''
          }`}
          onClick={() => {
            if (currentImage === imagesArray.length - 1)
              return;
            setCurrentImage(currentImage + 1);
          }}
        >
          <ArrowRightIcon stylesProps={iconStyles} />
        </button>
      </div>
    </section>
  );
}

function ImageCarousel({
  src,
  alt,
  current,
  title,
}: {
  src: string;
  alt: string;
  current: boolean;
  title: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={450}
      height={450}
      className={`absolute h-full w-full 
rounded-full object-cover transition-opacity ${
        current ? 'z-10 opacity-100' : 'z-0 opacity-0'
      }`}
      title={title}
    />
  );
}

{
  /* <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl">{t('skills')}</h2>
        <div className="w-3/4 pt-4">
          <ul className="flex flex-wrap justify-center gap-[2px]">
            {keys.map((key) => (
              <li key={key} className="skill-box">
                {t(`arrayOfSkills.${key}`)}
              </li>
            ))}
          </ul>
        </div>
      </div> */
}

export default About;
