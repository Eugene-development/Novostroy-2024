import { BoltIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Оперативность",
    description: "Быстрое реагирование на все запросы для максимальной скорости исполнения.",
    icon: BoltIcon,
  },
  {
    name: "Контроль",
    description: "Тщательный контроль на каждом этапе для обеспечения высокого качества работ.",
    icon: BoltIcon,
  },
  {
    name: "Выгода",
    description: "Решения, приносящие финансовую выгоду и улучшающие показатели вашего бизнеса.",
    icon: BoltIcon,
  },
  {
    name: "Постоянство",
    description: "Неизменно высокое качество услуг вне зависимости от внешних условий.",
    icon: BoltIcon,
  },
  {
    name: "Опыт",
    description: "Многие наши сотрудники успешно работают на рынке дизайнерских услуг более 10 лет.",
    icon: BoltIcon,
  },
  {
    name: "Лояльность",
    description: "Мы обеспечиваем индивидуальный подход и учитываем пожелания каждого клиента.",
    icon: BoltIcon,
  },
  {
    name: "Перспектива",
    description: "Долгосрочное сотрудничество и ориентация на будущее развитие.",
    icon: BoltIcon,
  },
  {
    name: "Обратная связь",
    description: "Мы всегда открыты для ваших продуктивных предложений, отзывов и новых идей.",
    icon: BoltIcon,
  },
  {
    name: "Инновационность",
    description: "Применение современных технологий и инструментов для повышения эффективности.",
    icon: BoltIcon,
  },
];
export default () => {
  return (
    <div className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-600">
            Партнёрство
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Приглашаем к сотрудничеству
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Мы открыты для рассмотрения деловых предложений о взаимовыгодном
            сотрудничестве с дизайнерами интерьеров, мебельными компаниями, поставщиками бытовой техники и материалов.
          </p>
        </div>
      </div>
      
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-sky-600"
                  aria-hidden="true"
                />
                {feature.name}.
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="relative overflow-hidden pt-12 sm:pt-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <img
            src="https://storage.yandexcloud.net/mine2024/novostroy/site/partner.jpg"
            alt="Партнерство"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            width={2432}
            height={1214}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      
    </div>
  );
};
