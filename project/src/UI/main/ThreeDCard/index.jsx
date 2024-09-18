"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./components";
import Link from "next/link";

const data = [
  {
    name: "Кухни",
  },
  {
    name: "Шкафы",
  },
  {
    name: "Гардеробы",
  },
];

export default function ThreeDCardDemo() {
  return (
    <>
      <div className="mx-auto max-w-3xl pt-4 sm:pt-8 lg:pt-12">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full font-light tracking-wide px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Все наши услуги абсолютно{" "}
            <Link href="/blog" className="font-semibold text-sky-600">
              <span className="absolute inset-0" aria-hidden="true" />
              бесплатны <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Мебель для дома
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Наша компания предлагает вам мебель, спроектированную лучшими
            дизайнерами и сделанную лучшими фабриками от эконом сегмента до
            премиальных решений.
          </p>
        </div>
      </div>

      <div className="md:flex items-center justify-center">
        {data.map((item) => (
          <CardContainer key={item.name} className="mx-4">
            <CardBody className="bg-gray-50 relative  hover:shadow-2xl  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-12 border  ">
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
              <div className="flex justify-between items-center mt-20">
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
