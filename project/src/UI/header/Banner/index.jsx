"use client";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline";
import Favorites from "./Favorites";
import MobileButton from "./MobileButton";

export default () => {
  return (
    <>
      <div className="sticky top-0 hidden md:flex items-center  px-4 sm:px-3.5 bg-gray-900 z-50">
        <div className="hidden lg:flex flex-1 justify-start">
          <div className="flex space-x-3.5 items-center justify-center tracking-wide">
            <Link
              href="/about"
              className="text-xs text-gray-50 hover:text-gray-300  whitespace-nowrap"
            >
              О компании
            </Link>
            <svg
              viewBox="0 0 2 2"
              className=" inline h-0.5 w-0.5 fill-current text-sky-500"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <Link
              href="/partnership"
              className="text-xs text-gray-50 hover:text-gray-300"
            >
              Партнёрство
            </Link>
            <svg
              viewBox="0 0 2 2"
              className="inline h-0.5 w-0.5 fill-current text-sky-500"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <Link
              href="/testimonials"
              className="text-xs text-gray-50 hover:text-gray-300"
            >
              Отзывы
            </Link>
            <svg
              viewBox="0 0 2 2"
              className="inline h-0.5 w-0.5 fill-current text-sky-500"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <Link
              href="/installment"
              className="text-xs text-gray-50 hover:text-gray-300"
            >
              Рассрочка
            </Link>
            <svg
              viewBox="0 0 2 2"
              className="inline h-0.5 w-0.5 fill-current text-sky-500"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <Link
              href="/contacts"
              className="text-xs text-gray-50 hover:text-gray-300"
            >
              Контакты
            </Link>
            <svg
              viewBox="0 0 2 2"
              className="inline h-0.5 w-0.5 fill-current text-sky-500"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <Link
              href="/guarantees"
              className="text-xs text-gray-50 hover:text-gray-300"
            >
              Гарантии
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex flex-1 justify-between ">
          <div className="flex flex-1 ">
            <div className="py-1.5 lg:flex lg:min-w-0 lg:flex-1 lg:justify-end items-center ">
              <div className=" flex items-center justify-center  px-2 xl:px-4 py-1 text-xl font-semibold leading-6 ">
                {/*<PhoneIcon
                  className="block size-3 xl:size-4 text-gray-50 "
                  aria-hidden="true"
                />*/}
                <Link
                  href="tel:+79154000020"
                  className="text-base font-normal text-gray-50 antialiased tracking-wide"
                >
                  8 (915) 400-00-20
                </Link>
              </div>
              <svg
                viewBox="0 0 2 2"
                className="mx-1 inline h-0.5 w-0.5 fill-current text-sky-500"
                aria-hidden="true"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className=" flex items-center justify-center  px-2 xl:px-4 py-1 text-xl font-semibold leading-6 ">
                <div className=" text-base font-normal text-gray-50 antialiased tracking-wide">
                  info@novostroy.org
                </div>
              </div>
              <svg
                viewBox="0 0 2 2"
                className="mx-1 inline h-0.5 w-0.5 fill-current text-sky-500"
                aria-hidden="true"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>

              <Favorites />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex px-1.5 py-2 justify-between bg-gray-900 items-center sticky top-0 z-50 opacity-95">
        <Link href="/">
          <span className="sr-only">Novostroy</span>
          <img
            className="size-7 px-1 sm:px-0 w-auto"
            src="https://storage.yandexcloud.net/brand-logo/novostroy/logomain.png"
            alt="logo"
          />
        </Link>

        <div className="flex">
          <PhoneIcon className="size-7 text-gray-50 pr-2" />
          <Link
            href="tel:+79154000020"
            className="text-lg text-gray-50 font-light font-display antialiased tracking-wide"
          >
            8 915 400-00-20
          </Link>
        </div>

        <div className="flex  divide-x">
          <Favorites />
          <MobileButton />
        </div>
      </div>
    </>
  );
};
