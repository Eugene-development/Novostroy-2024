import Link from "next/link";

export default () => {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-600">
            Гарантии
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Гарантии на продукцию и услуги
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Предоставляется расширенная гарантия качества от мебельных фабрик и
            поставщиков продукции
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-2 ">
        <div className="mx-auto lg:mx-0 ">
          <div className="mt-10 text-lg leading-8 text-gray-600 ">
            <div>
              <p>
                <span className="font-semibold">
                  В нашей компании NOVOSTROY.ORG
                </span>{" "}
                мы уверены в качестве наших партнёров, предлагающих своим
                клиентам надежные гарантии на мебель и аксессуары. Каждый товар
                или услуга проходит строгий контроль качества, чтобы вы могли
                наслаждаться покупкой долгие годы.
              </p>
            </div>

            <h2 className="my-4 text-xl font-bold">
              Гарантийный срок на мебель и аксессуары
            </h2>
            <div>
              <p>
                <span className="font-semibold">Мы предоставляем гарантию</span>{" "}
                от 2 до 10 лет в зависимости от категории товара:
              </p>
              <ul className="list-disc ml-8 my-2">
                <li>
                  Мебель для дома и офиса (столы, стулья, шкафы) – до 5 лет;
                </li>
                <li>Кухонные гарнитуры и встроенные элементы – до 7 лет;</li>
                <li>Бытовая техника и аксессуары – до 10 лет;</li>
              </ul>
              <p>
                Гарантия покрывает возможные дефекты материалов и производства,
                которые могут повлиять на функциональность и внешний вид товара.
                Если в течение гарантийного периода обнаруживаются дефекты, не
                связанные с неправильной эксплуатацией, мы согласовываем ремонт
                или замену изделия.
              </p>
            </div>

            <h2 className="my-4 text-xl font-bold">
              Как воспользоваться гарантией
            </h2>
            <div>
              <p>
                <span className="font-semibold">
                  Если у вас возникла необходимость
                </span>{" "}
                воспользоваться гарантией, достаточно обратиться в службу
                поддержки NOVOSTROY.ORG. Наши специалисты помогут с оформлением
                заявки, дадут рекомендации и проконсультируют по всем вопросам,
                связанным с гарантийным обслуживанием. Мы стремимся сделать этот
                процесс максимально удобным и быстрым для вас.
              </p>
            </div>

            <h2 className="my-4 text-xl font-bold">
              Надежность и качество – основа нашей работы
            </h2>
            <div>
              <p>
                <span className="font-semibold">
                  Предоставляя расширенные гарантии,
                </span>{" "}
                мы подтверждаем свою приверженность качеству и заботе о
                клиентах. Независимо от категории товара, вы можете быть
                уверены, что приобретаете надежные и долговечные изделия. С
                NOVOSTROY.ORG ваш дом и офис станут уютными и стильными надолго!
              </p>
            </div>
          </div>
          <div className="mt-10 flex">
            <button
              type="button"
              className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Заявить о гарантийном случае
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
