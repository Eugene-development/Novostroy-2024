"use client";
import Link from "next/link";
import { BackgroundGradient } from "./components";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

const lastProjects = [
  {
    name: "Проект-24-002",
    image:
      "https://storage.yandexcloud.net/mine2024/novostroy/catalog/1726652041_2353.jpg",
    description: "",
    href: "/mebel/project24002",
  },
  {
    name: "Проект-24-003",
    image:
      "https://storage.yandexcloud.net/mine2024/novostroy/catalog/ba658417195293a0f84c5e6fe32f3391.jpg",
    description: "",
    href: "/mebel/project24003",
  },
  {
    name: "Проект-24-004",
    image:
      "https://storage.yandexcloud.net/mine2024/novostroy/catalog/ba658117195293a0f84c5e6fe32f3391.jpg",
    description: "",
    href: "/mebel/project24004",
  },
  {
    name: "Проект-24-005",
    image:
      "https://storage.yandexcloud.net/mine2024/novostroy/catalog/92606ca39273b6d4ed7c5d1b05779f5e.jpg",
    description: "",
    href: "/mebel/project24005",
  },
];

export default () => {
  return (
    <>
      <div className="bg-white px-4 py-12 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl sm:text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
            Проекты мебели
          </h2>
          <p className="mx-auto mt-6 text-sm sm:text-lg leading-8 text-gray-600">
            Ознакомьтесь с выполненными проектами за последнее время.
            Представлены варианты различных категорий и дизайнерских решений.
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
              className="object-cover h-60"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {item.name}
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {item.description}
            </p>
            <Link
              href={item.href}
              className="rounded-full px-4 py-2 text-white mx-auto flex items-center space-x-1 bg-black mt-4 text-xs font-bold justify-between"
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
