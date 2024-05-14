import Link from "next/link";
export const metadata = {
  title: "",
  description: "",
  robots: {
    index: false,
  },
};

export default function NotFound() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <img
            className="mx-auto mb-4"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg"
            alt="404 Not Found"
          />
          <h1 className="mb-4 text-2xl font-extrabold text-primary-600 dark:text-primary-500">
            404 Not Found
          </h1>
          <p className="mb-10 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Упс! Ошибочка вышла!
          </p>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            Этой страницы не существует. Вернитесь в нужный раздел.
          </p>
          <ul className="flex justify-center items-center space-x-4 text-gray-500 dark:text-gray-400">
            <li>
              <Link
                href="/"
                className="underline hover:text-gray-900 dark:hover:text-white"
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                href="/company"
                className="underline hover:text-gray-900 dark:hover:text-white"
              >
                Компания
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="underline hover:text-gray-900 dark:hover:text-white"
              >
                Блог
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className="underline hover:text-gray-900 dark:hover:text-white"
              >
                Сервис
              </Link>
            </li>
            <li>
              <Link
                href="/actions"
                className="underline hover:text-gray-900 dark:hover:text-white"
              >
                Акции
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className="underline hover:text-gray-900 dark:hover:text-white"
              >
                Салоны
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
