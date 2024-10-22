"use client";
import Link from "next/link";
import { BackgroundGradient } from "./components";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

const lastProjects = [
  {
    name: "продукт",
    image:
      "https://zovrus.ru/files/_cache/product/chr-4479_1.resize1200x1200w.jpg?ec09a444e7bdbea9d295f840415fb01d",
    description: "описание",
    href: "/",
  },
  {
    name: "продукт",
    image:
      "https://zovrus.ru/files/_cache/product/chr-4479_1.resize1200x1200w.jpg?ec09a444e7bdbea9d295f840415fb01d",
    description: "описание",
    href: "/",
  },
  {
    name: "продукт",
    image:
      "https://zovrus.ru/files/_cache/product/chr-4479_1.resize1200x1200w.jpg?ec09a444e7bdbea9d295f840415fb01d",
    description: "описание",
    href: "/",
  },
  {
    name: "продукт",
    image:
      "https://zovrus.ru/files/_cache/product/chr-4479_1.resize1200x1200w.jpg?ec09a444e7bdbea9d295f840415fb01d",
    description: "описание",
    href: "/",
  },
];

export default () => {
  return (
    <>
      <div className="bg-white px-4 py-12 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl sm:text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
            Проекты
          </h2>
          <p className="mx-auto mt-6 text-sm sm:text-lg leading-8 text-gray-600">
            Ознакомьтесь с выполненными проектами за последнее время.
            Представлены варианты различных категорий и решений.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2 p-8 mx-auto">
        {lastProjects.map((item) => (
          <BackgroundGradient
            key={item.name}
            className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
          >
            <Image
              src={item.image}
              alt="Проект мебели"
              width={1280}
              height={640}
              className="object-contain"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {item.name}
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {item.description}
            </p>
            <Link
              href={"/"}
              className="rounded-full pl-4 pr-1 py-2 text-white mx-auto flex items-center space-x-1 bg-black mt-4 text-xs font-bold "
            >
              <span>Ознакомьтесь подробнее</span>
              <span className="bg-zinc-700 rounded-full  px-2 py-0 text-white">
                →
              </span>
            </Link>
          </BackgroundGradient>
        ))}
      </div>
    </>
  );
};
