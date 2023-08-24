import { useTranslations } from 'next-intl';

function Offer() {
  const t = useTranslations('Offer');
  const keys = [0, 1, 2];

  return (
    <div className="pt-28">
      <div className="text-3xl lg:text-5xl">
        <h2>{t('title')}</h2>
      </div>
      <div className="grid grid-cols-1 pt-12 sm:grid-cols-3 sm:gap-6">
        {keys.map((key) => (
          <OfferItem
            key={`${key}-offer`}
            span={t(`items.${key}.span`)}
            title={t(`items.${key}.title`)}
            text={t(`items.${key}.text`)}
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
    <div className="border-b border-b-gray-200 py-5 sm:border-b-0 sm:border-l sm:border-l-gray-200 sm:pl-6">
      <span className="text-4xl text-gray-300 opacity-70">
        {span}
      </span>
      <h4 className="pt-8 text-lg ">{title}</h4>
      <p className="max-w-xs pt-1">{text}</p>
    </div>
  );
}

export default Offer;
