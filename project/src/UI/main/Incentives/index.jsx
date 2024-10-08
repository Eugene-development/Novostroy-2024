
const incentives = [
  {
    name: "Выбор материалов",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg",
    description:
      "Мы сможем предложить практически любой материал, используемый в производстве.",
  },
  {
    name: "Выбор цвета",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg",
    description:
      "Мы поможем определиться с цветовой гаммой подбираемых материалов.",
  },
  {
    name: "Выбор изготовителя",
    imageSrc:
      "https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg",
    description:
      "Мы знаем ответ на самый важный вопрос кому доверить изготовление заказа.",
  },
];

export default () => {
  return (
    <div className="rounded-t-3xl  bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Наша компания это ваш помощник в вопросе выбора
              </h2>
              <p className="mt-4 text-gray-500">
                At the beginning at least, but then we realized we could make a
                lot more money if we kinda stopped caring about that. Our new
                strategy is to write a bunch of things that look really good in
                the headlines, then clarify in the small print but hope people
                don't actually read it.
              </p>
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src="https://storage.yandexcloud.net/brand-logo/novostroy/logomain.png"
                alt="логотип"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-sm font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {incentive.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
