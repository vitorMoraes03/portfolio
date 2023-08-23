import { useTranslations } from 'next-intl';

function Offer() {
  const t = useTranslations('Offer');
  const arrayOfItems = [
    {
      span: t('items.0.span'),
      title: t('items.0.title'),
      text: t('items.0.text'),
    },
    {
      span: t('items.1.span'),
      title: t('items.1.title'),
      text: t('items.1.text'),
    },
    {
      span: t('items.2.span'),
      title: t('items.2.title'),
      text: t('items.2.text'),
    },
  ];

  return (
    <div className="py-28">
      <div className="text-3xl lg:text-5xl">
        <h2>{t('title')}</h2>
      </div>
      <div className="grid grid-cols-1 pt-12 sm:grid-cols-3 sm:gap-6">
        {arrayOfItems.map((item) => (
          <OfferItem
            key={`${item.span}-${item.title}`}
            span={item.span}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}

function OfferItem({
  span,
  title,
  text,
}: {
  span: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-b border-b-gray-300 py-5 sm:border-b-0 sm:border-l sm:border-l-gray-300 sm:pl-6">
      <span className="text-4xl text-gray-300 opacity-70">
        {span}
      </span>
      <h4 className="pt-8 text-lg ">{title}</h4>
      <p className="max-w-xs pt-1">{text}</p>
    </div>
  );
}

export default Offer;
