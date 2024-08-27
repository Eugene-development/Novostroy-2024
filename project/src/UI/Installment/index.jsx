export default function index() {
  return (
    <div className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-600">
            Рассрочка
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Рассрочка платежа
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Позвольте себе именно ту мебель, которую долго желали,
            воспользовавшись беспроцентной рассрочкой платежа до года.
          </p>
        </div>
      </div>
      <div className="overflow-hidden bg-white py-24 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div className="lg:pr-4 lg:pt-2">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-sky-600">
                  Лучшее предложение
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Рассрочка 0-0-12
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Вы можете приобрести нужную вам мебель на выгодных условиях в
                  рассрочку до года.
                </p>
                {/* <div className="mt-8">
                  <a
                    href="#"
                    className="inline-flex rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    Заполнить анкету
                  </a>
                </div> */}
                <figure className="mt-16 border-l border-gray-200 pl-8 text-gray-600">
                  <blockquote className="text-base leading-7">
                    <p>
                      “Подать заявку очень просто. Заполните анкету в салоне,
                      где работают наши дизайнеры и получите предварительное
                      одобрение от наших банков партнёров.”
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex gap-x-4 text-sm leading-6">
                    <img
                      src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      alt=""
                      className="h-6 w-6 flex-none rounded-full"
                    />
                    <div>
                      <span className="font-semibold text-gray-900">
                        Елисей
                      </span>{" "}
                      – Кредитный брокер
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <img
              src="https://storage.yandexcloud.net/mine2024/novostroy/site/installment.png"
              alt="рассрочка"
              className="w-[48rem] max-w-none -mt-32 sm:w-[36rem] md:-ml-4 lg:ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
