"use client";
import Link from "next/link";

import Search from "./Search";
import Favorites from "./Favorites";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

export default () => {
  return (
    <>
      <div className="  hidden md:flex items-center py-1 px-4 sm:px-3.5 bg-gray-900 ">
        <div className=" flex flex-1 justify-start">
          <div className="flex space-x-4 items-center justify-center">
            <Link href="/about" className="ml-1 text-sm text-gray-50">
              О компании
            </Link>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current text-sky-500"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <Link href="/partnership" className="ml-1 text-sm text-gray-50">
              Партнёрство
            </Link>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current text-sky-500"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <Link href="/testimonials" className="ml-1 text-sm text-gray-50">
              Отзывы
            </Link>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current text-sky-500"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <Link href="/installment" className="ml-1 text-sm text-gray-50">
              Рассрочка
            </Link>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current text-sky-500"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <Link href="/contacts" className="ml-1 text-sm text-gray-50">
              Контакты
            </Link>
          </div>
        </div>

        <div className="hidden md:flex flex-1 justify-between ">
          <div className="hidden 2xl:flex 2xl:flex-1 ">
            <div className="py-1.5 lg:flex lg:min-w-0 lg:flex-1 lg:justify-end items-center">
              <div className=" bg-gray-950 flex items-center justify-center rounded-lg px-2 xl:px-4 py-1 text-xl font-semibold leading-6  shadow-lg shadow-sky-950/50  ring-offset-2  ring-gray-200">
                {/*<PhoneIcon
                  className="block size-3 xl:size-4 text-gray-50 "
                  aria-hidden="true"
                />*/}
                <Link
                  href="tel:+79154000020"
                  className="text-sm font-normal text-gray-50"
                >
                  8 (915) 400-00-20
                </Link>
              </div>
              <svg
                viewBox="0 0 2 2"
                className="mx-2 inline h-0.5 w-0.5 fill-current text-sky-500"
                aria-hidden="true"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className=" bg-gray-950 flex items-center justify-center rounded-lg px-2 xl:px-4 py-1 text-xl font-semibold leading-6  shadow-lg shadow-sky-950/50  ring-offset-2  ring-gray-200">
                <div className=" text-sm font-normal text-gray-50">
                  info@novostroy.org
                </div>
              </div>
              <svg
                viewBox="0 0 2 2"
                className="mx-2 inline h-0.5 w-0.5 fill-current text-sky-500"
                aria-hidden="true"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>

              <Favorites />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex justify-between bg-gray-900">
        <Favorites />

        <Link href="tel:+79154000020" className="ml-1 text-base text-gray-50">
          8 (915) 400-00-20
        </Link>
      </div>
    </>
  );
};
