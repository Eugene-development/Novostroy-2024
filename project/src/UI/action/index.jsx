import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Бесплатная консультация.",
    description:
      "Наш специалист бесплатно приедет к вам на объект и даст подробную консультацию.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Установка бытовой техники.",
    description:
      "При приобретении у нас бытовой техники мы подключим её за счёт компании. ",
    icon: ServerIcon,
  },
  {
    name: "Бесплатный замер помещения.",
    description:
      "Осуществим проектный замер помещения с указанием углов, розеток и вывода воды.",
    icon: LockClosedIcon,
  },
  {
    name: "Бесплатный дизайн-проект.",
    description:
      "Дизайнер составит предварительный проект мебели в соответствии с замером.",
    icon: ArrowPathIcon,
  },
  {
    name: "Техника в подарок.",
    description:
      "Предложим вам в подарок каждую пятую позицию бытовой техники, приобретённую у нас.",
    icon: FingerPrintIcon,
  },
  {
    name: "Сборка за счёт компании.",
    description:
      "Осуществим сборку нашими квалифицированными специалистами и оплатим их работу.",
    icon: Cog6ToothIcon,
  },
];
debugger;

export default () => {
  return (
    <div className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-600">
            Наши акции
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Акции и спецпредложения
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Мы рады предложить вам специальные акции и скидки на наши товары и
            услуги, чтобы вы могли сэкономить на покупках.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-12">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <img
            alt="Акция"
            src="https://storage.yandexcloud.net/mine2024/novostroy/site/actionfoto.png"
            width={2432}
            height={1442}
            className="h-[12rem] md:h-[34rem] mb-[-8%] rounded-xl"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-20 md:mt-24 lg:px-6">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute left-1 top-1 size-6 text-red-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                  />
                </svg>

                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
