"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./components";
import Link from "next/link";
import { useFormsStore } from "@/stores/forms";

const data = [
  {
    name: "Мебель",
    description:
      "Качественная и стильная мебель от ведущих производств России и Беларуси.",
    href: "/mebel",
    image:
      "https://zovofficial.com/image/cache/catalog/products/kuhni/2022/veskona-22/1-1087x890.jpg",
  },
  {
    name: "Техника",
    description:
      "Бытовая техника от передовых брендов Европейских и азиатских стран.",
    href: "/tehnika",
    image:
      "https://storage.yandexcloud.net/mine2024/novostroy/site/duhshkaf.jpg",
  },
  {
    name: "Столешницы",
    description:
      "Столешницы и фартуки из акрила, кварца и массива под любой стиль и бюджет.",
    href: "/stoleshnica",
    image: "https://storage.yandexcloud.net/mine2024/novostroy/site/slab.jpg",
  },
  {
    name: "Сантехника",
    description:
      "Стальные и композитные мойки и смесители, а также комплектующие к ним.",
    href: "/santehnika",
    image: "https://storage.yandexcloud.net/mine2024/novostroy/site/moyka.jpg",
  },
];

export default function ThreeDCardDemo() {
  const { openVisibleFormDesigner } = useFormsStore.visibleFormDesigner();

  return (
    <>
      <div className="mx-auto max-w-4xl pt-8 lg:pt-20">
        <div className="flex sm:mb-8 ml-6 sm:ml-0 sm:justify-center">
          <div className="relative rounded-full font-light  tracking-wide px-6 py-1 text-base leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 whitespace-nowrap">
            Подберём для вас{" "}
            <span className="font-semibold text-sky-600 ">бесплатно</span>
          </div>
        </div>
        <div className="mt-8 px-6 sm:text-center">
          <h2 className="text-4xl md:text-7xl font-bold text-gray-900">
            Мебель и не только
          </h2>
          <p className="mx-auto mt-6 text-sm sm:text-lg leading-7 text-gray-700">
            Мы предлагаем комплексное решение. Подберём под проект и ваш бюджет
            подходящую бытовую технику, столешницу и мойку со смесителем.
          </p>
        </div>
      </div>

      <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 mx-4 items-center justify-center">
        {data.map((item) => (
          <CardContainer key={item.name} className="p-8">
            <CardBody className="bg-gray-50 relative hover:shadow-2xl border-black/[0.1] w-auto sm:w-[24rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-neutral-600 "
              >
                {item.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2"
              >
                {item.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-8 px-4">
                <Image
                  src={item.image}
                  width={1280}
                  height={640}
                  className="h-48 sm:h-[18rem] w-full object-contain sm:object-cover rounded-xl group-hover/card:shadow-xl "
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10 mx-4">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={item.href}
                  className="px-4 py-2 rounded-xl text-xs text-sky-800 font-normal whitespace-nowrap"
                >
                  Подробнее →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  onClick={openVisibleFormDesigner}
                  className="px-4 py-2 rounded-xl bg-gray-700 text-white text-xs font-bold"
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
