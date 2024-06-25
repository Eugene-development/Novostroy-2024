"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./components";
import Link from "next/link";

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
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Мебель для дома
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Наша компания предлагает вам мебель, спроектированную лучшими
            дизайнерами и сделанную лучшими фабриками от эконом сегмента до
            премиальных решений.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-8">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-12 border  ">
            <CardItem
              translateZ="50"
              className="text-2xl font-bold text-neutral-600 dark:text-white"
            >
              Кухни
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              В пределах МКАД наш консультант даст вам консультацию по возможным
              решениям в проектировании мебели.
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
                Бесплатная консультация
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-12 border  ">
            <CardItem
              translateZ="50"
              className="text-2xl font-bold text-neutral-600 dark:text-white"
            >
              Шкафы
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Осуществим проектный замер помещения в проекции. Стоимость услуги
              компенсируется при оформлении договора.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-8">
              <Image
                src="https://storage.yandexcloud.net/mine2024/zov/4DCcVnbk5suIuE8pD7yLzC6CUReEjgNJZkD2c32S.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
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
                className="px-4 py-2 rounded-xl bg-gray-800 dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Бесплатная консультация
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-12 border  ">
            <CardItem
              translateZ="50"
              className="text-2xl font-bold text-neutral-600 dark:text-white"
            >
              Гардеробы
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Дизайнер составит проект мебели с учётом ваших пожеланий, бюджета,
              размеров помещения и своего проектного опыта.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-8">
              <Image
                src="https://storage.yandexcloud.net/mine2024/zov/4DCcVnbk5suIuE8pD7yLzC6CUReEjgNJZkD2c32S.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
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
                className="px-4 py-2 rounded-xl bg-gray-800 dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Бесплатная консультация
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </>
  );
}
