import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";

export default () => {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-sky-800">
          Это важно
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
        </h1>
        <p className="mt-6 text-xl leading-8">
          Предоставляя свои персональные данные Вы даёте согласие на обработку,
          хранение и использование своих персональных данных на основании ФЗ №
          152-ФЗ «О персональных данных» от 27.07.2006 г. в следующих целях:
        </p>
        <div className="mt-10 max-w-2xl">
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-sky-800"
                aria-hidden="true"
              />
              <span>Регистрации Пользователя на сайте</span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-sky-800"
                aria-hidden="true"
              />
              <span>Осуществление клиентской поддержки</span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-sky-800"
                aria-hidden="true"
              />
              <span>
                Получения Пользователем информации о маркетинговых событиях
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-sky-800"
                aria-hidden="true"
              />
              <span>Выполнение Продавцом обязательств перед Покупателем</span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-sky-800"
                aria-hidden="true"
              />
              <span>
                Проведения аудита и прочих внутренних исследований с целью
                повышения качества предоставляемых услуг.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            Под персональными данными подразумевается любая информация личного
            характера, позволяющая установить личность Покупателя такая как:
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-sky-800"
                aria-hidden="true"
              />
              <span>Фамилия, Имя, Отчество</span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-sky-800"
                aria-hidden="true"
              />
              <span>Контактный телефон</span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-sky-800"
                aria-hidden="true"
              />
              <span>Адрес электронной почты</span>
            </li>
          </ul>

          <p className="mt-6">
            Персональные данные Покупателей хранятся исключительно на
            электронных носителях и обрабатываются с использованием
            автоматизированных систем, за исключением случаев, когда
            неавтоматизированная обработка персональных данных необходима в
            связи с исполнением требований законодательства.
          </p>
          <p className="mt-6">
            Продавец обязуется не передавать полученные персональные данные
            третьим лицам, за исключением следующих случаев:
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-sky-800"
                aria-hidden="true"
              />
              <span>
                По запросам уполномоченных органов государственной власти РФ
                только по основаниям и в порядке, установленным
                законодательством РФ
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-sky-800"
                aria-hidden="true"
              />
              <span>
                Стратегическим партнерам, которые работают с Продавцом для
                предоставления продуктов и услуг, или тем из них, которые
                помогают Продавцу реализовывать продукты и услуги потребителям.
                Мы предоставляем третьим лицам минимальный объем персональных
                данных, необходимый только для оказания требуемой услуги или
                проведения необходимой транзакции.
              </span>
            </li>
          </ul>

          <div className="mt-16 max-w-2xl">
            <p className="mt-6">
              Продавец оставляет за собой право вносить изменения в
              одностороннем порядке в настоящие правила, при условии, что
              изменения не противоречат действующему законодательству РФ.
              Изменения условий настоящих правил вступают в силу после их
              публикации на Сайте.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
