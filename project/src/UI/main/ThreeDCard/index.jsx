"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./components";
import Link from "next/link";

const data = [
  {
    name: "Мебель",
  },
  {
    name: "Техника",
  },
  {
    name: "Столешницы",
  },
  {
    name: "Сантехника",
  },
];

export default function ThreeDCardDemo() {
  return (
    <>
      <div className="mx-auto max-w-6xl pt-4 sm:pt-8 lg:pt-12">
        <div className="hidden sm:flex sm:mb-8 sm:justify-center">
          <div className="relative rounded-full font-light tracking-wide px-6 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Для Вас все наши услуги{" "}
            <Link href="/blog" className="font-semibold text-sky-600">
              <span className="absolute inset-0" aria-hidden="true" />
              бесплатны <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="mt-8 px-4  text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Мебель для дома и офиса
          </h2>
          <p className="md:hidden mt-6 texy-sm sm:text-lg leading-8 text-gray-600">
            Мы предлагаем мебель, созданную нашими дизайнерами.
          </p>
          <p className="hidden md:block max-w-3xl mx-auto mt-6 texy-sm sm:text-lg leading-8 text-gray-600">
            Мы предлагаем мебель, созданную нашими лучшими дизайнерами и
            изготовленную лучшими мебельными фабриками.
          </p>
        </div>
      </div>

      <div className="md:flex mt-4 items-center justify-center">
        {data.map((item) => (
          <CardContainer key={item.name} className="mx-4">
            <CardBody className="bg-gray-50 relative  hover:shadow-2xl  border-black/[0.1] w-auto sm:w-[24rem] h-auto rounded-xl p-7 border  ">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-neutral-600 dark:text-white"
              >
                {item.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                В пределах МКАД наш консультант даст вам консультацию по
                возможным решениям в проектировании мебели.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-8">
                <Image
                  src="https://storage.yandexcloud.net/mine2024/zov/4DCcVnbk5suIuE8pD7yLzC6CUReEjgNJZkD2c32S.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl "
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Подробнее →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className=" px-4 py-2 rounded-xl bg-gray-800 dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Консультация
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}
