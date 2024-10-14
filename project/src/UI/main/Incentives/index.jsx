import Image from "next/image";
import { FadeIn } from "@/func/FadeIn";

const incentives = [
  {
    name: "Экономим время",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      "Обсудим проект с несколькими фабриками и выберем оптимальный вариант.",
  },
  {
    name: "Экономим деньги",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "Получим лучшее предложение под ваш бюджет с максимальными скидками.",
  },
  {
    name: "Экономим нервы",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description:
      "Избавим вас от необходимости волноваться за правильный выбор.",
  },
  // {
  //   name: "Выбор материалов",
  //   imageSrc:
  //     "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
  //   description:
  //     "Мы сможем предложить практически любой материал, используемый в производстве.",
  // },
  // {
  //   name: "Выбор цвета",
  //   imageSrc:
  //     "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
  //   description:
  //     "Мы поможем определиться с цветовой гаммой подбираемых материалов.",
  // },
  // {
  //   name: "Выбор изготовителя",
  //   imageSrc:
  //     "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
  //   description:
  //     "Мы знаем ответ на самый важный вопрос кому доверить изготовление заказа.",
  // },
];

export default () => {
  return (
    <div className="rounded-t-3xl  bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="sm:mb-6 text-4xl md:text-6xl font-bold text-gray-900 whitespace-nowrap">
                Подберём фабрику!
              </h2>
              <p className="md:hidden mt-4 text-gray-700 text-sm sm:text-lg leading-7">
                Наш опыт и знание рынка позволяют предложить решения, которые
                максимально соответствуют вашему стилю, бюджету и требованиям к
                качеству.
              </p>
              <p className="hidden md:block mt-4 text-sm sm:text-lg text-gray-700">
                Наш опыт и знание рынка позволяют предложить решения, которые
                максимально соответствуют вашему стилю, бюджету и требованиям к
                качеству.
              </p>
              <p className="hidden md:block mt-4 text-sm sm:text-lg text-gray-700">
                Мы помогаем нашим клиентам сделать правильный выбор материалов и
                производителя мебели. Это позволит сэкономить ваши затраты!
              </p>
            </div>
            <div className="mx-12 aspect-h-2 aspect-w-3 overflow-hidden rounded-lg ">
              <Image
                height="1000"
                width="1000"
                src="https://storage.yandexcloud.net/brand-logo/novostroy/logomain.png"
                alt="логотип"
                className="object-contain object-center "
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name}>
                <FadeIn>
                  <div className="sm:flex lg:block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8 text-sky-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
                      />
                    </svg>

                    {/* <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                </div> */}
                    <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                      <h3 className="text-base sm:text-lg font-bold text-gray-700">
                        {incentive.name}
                      </h3>
                      <p className="mt-2 text-sm  text-gray-500">
                        {incentive.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
