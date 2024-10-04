import Link from "next/link";
import Image from "next/image";
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
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          {/* <Image
              width={1000}
              height={1000}
              className="mx-auto mb-4"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg"
              alt="404 Not Found"
            /> */}
        
          <h1 className="mb-4 text-2xl font-extrabold text-sky-600 dark:text-primary-500">
            404 Not Found
          </h1>
          <p className="mb-10 text-xl sm:text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Упс! Ошибочка вышла!
          </p>
          <p className="mb-4 text-sm sm:text-xl text-gray-500 dark:text-gray-400">
            Этой страницы не существует. <br/> Вернитесь в нужный раздел сайта.
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
                href="/about"
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
                href="/action"
                className="underline hover:text-gray-900 dark:hover:text-white"
              >
                Акции
              </Link>
            </li>
            
          </ul> 
        </div>
      </div>
    </section>
  );
}
