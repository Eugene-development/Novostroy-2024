"use client";
import React from "react";
import { BackgroundGradient } from "./components";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

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

      <div className="flex p-8 mx-auto space-x-16 ">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <Image
            src="https://zovrus.ru/files/_cache/product/chr-4479_1.resize1200x1200w.jpg?ec09a444e7bdbea9d295f840415fb01d"
            alt="jordans"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Air Jordan 4 Retro Reimagined
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
            February 17, 2024. Your best opportunity to get these right now is
            by entering raffles and waiting for the official releases.
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Подробнее</span>
            <span className="bg-zinc-700 rounded-full  px-2 py-0 text-white">
              →
            </span>
          </button>
        </BackgroundGradient>
      </div>
    </>
  );
};
