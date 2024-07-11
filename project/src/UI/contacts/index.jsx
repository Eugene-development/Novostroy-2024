export default () => {
  return (
    <section className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-600">
            Контакты
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Связь с нами
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Мы 
          </p>
        </div>
      </div>
      <div className="py-16 px-4 mx-auto  max-w-screen-xl sm:py-20 lg:px-6 ">
        <form
          action="#"
          className="grid grid-cols-1 gap-8 p-6 mx-auto mb-16 max-w-screen-lg bg-white rounded-lg border border-gray-200 shadow-sm lg:mb-28 dark:bg-gray-800 dark:border-gray-700 sm:grid-cols-2"
        >
          <div>
            <label
              htmlFor="first-name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Имя
            </label>
            <input
              type="text"
              id="first-name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500 dark:shadow-sm-light"
              // placeholder="Bonnie"
              required
            />
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Должность
            </label>
            <input
              type="text"
              id="last-name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500 dark:shadow-sm-light"
              // placeholder="Green"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Почта
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500 dark:shadow-sm-light"
              placeholder="example@blabla.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone-number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Телефон
            </label>
            <input
              type="number"
              id="phone-number"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500 dark:shadow-sm-light"
              placeholder="+7 900 00 00 00"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Ваше сообщение
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
              // placeholder="Leave a comment..."
            ></textarea>
            {/* <p className="mt-4 text-sm text-gray-500">
              By submitting this form you agree to our{" "}
              <a
                href="#"
                className="text-sky-600 hover:underline dark:text-sky-500"
              >
                terms and conditions
              </a>{" "}
              and our{" "}
              <a
                href="#"
                className="text-sky-600 hover:underline dark:text-sky-500"
              >
                privacy policy
              </a>{" "}
              which explains how we may collect, use and disclose your personal
              information including to third parties.
            </p> */}
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sky-700 sm:w-fit hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
          >
            Send message
          </button>
        </form>
        <div className="space-y-8 text-center md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0 divide-x ">
          <div className="py-4">
            <div className="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-50 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
              <svg
                className="w-5 h-5 text-sky-700 lg:w-8 lg:h-8 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <p className="mb-2 text-xl font-bold dark:text-white">
              Написать нам:
            </p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Почта для коммерческих предложений и иной информации
            </p>
            <a
              href="mailto:abc@example.com"
              className="font-semibold text-sky-700  hover:underline"
            >
              info@novostroy.org
            </a>
          </div>
          <div className="py-4">
            <div className="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-50 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
              <svg
                className="w-5 h-5 text-sky-700 lg:w-8 lg:h-8 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
            </div>
            <p className="mb-2 text-xl font-bold dark:text-white">
              Позвонить нам:
            </p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Ответим на ваш звонок в рабочее время Пн-Вс с 10 до 20
            </p>
            <span className="font-semibold text-sky-700 ">
              +7 (915) 400-00-20
            </span>
          </div>
          {/* <div>
                        <div className="flex justify-center items-center mx-auto mb-4 w-10 h-10 bg-gray-50 rounded-lg dark:bg-gray-800 lg:h-16 lg:w-16">
                            <svg className="w-5 h-5 text-sky-600 lg:w-8 lg:h-8 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path></svg>
                        </div>
                        <p className="mb-2 text-xl font-bold dark:text-white">Поддержка</p>
                        <p className="mb-3 text-gray-500 dark:text-gray-400">Email us for general queries, including marketing and partnership opportunities.</p>
                        <a href="#" className="inline-flex py-2 px-4 text-sm font-medium text-center rounded-lg  text-sky-600  hover:text-white hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:border-sky-500 dark:text-sky-500 dark:hover:text-white dark:hover:bg-sky-600 dark:focus:ring-sky-800">Support center</a>
                    </div> */}
        </div>
      </div>
    </section>
  );
};
