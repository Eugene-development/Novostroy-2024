"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./components";
// import { FlipWords } from "./components/FlipWords"
import { useFormsStore } from "@/stores/forms";

export default function ImagesSliderDemo() {
  const { openVisibleFormDesigner } = useFormsStore.visibleFormDesigner();

  const images = [
    "https://storage.yandexcloud.net/mine2024/novostroy/site/slider/cam-1-1600x1472.jpg",
    "https://storage.yandexcloud.net/mine2024/novostroy/site/slider/cam-2-1763x1600.jpg",
    "https://storage.yandexcloud.net/mine2024/novostroy/site/slider/2-1600x942.jpg",
  ];
  // const words = ["комфортнее", "красивее", "удобнее", "приятнее"];
  return (
    <ImagesSlider className="h-[44rem] md:h-[54rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="-mt-24 z-50 flex flex-col justify-center items-center"
      >
        <p className="font-bold text-3xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 py-4">
          <span className="text-4xl md:text-8xl">Мы делаем</span> <br />
          ваш дом уютнее
        </p>
        <p className="md:hidden px-2 max-w-4xl text-center font-extralight xl:text-lg text-gray-100 tracking-wide">
          Наша команда это профессиональные дизайнеры мебели, работающие в лучших
          мебельных компаниях.
        </p>
        <p className="hidden md:block px-1 max-w-4xl text-center font-extralight xl:text-lg text-gray-100 tracking-wide">
          Наша команда это профессиональные дизайнеры мебели. Мы спроектируем для вас мебель и подберём лучшую фабрику, сэкономив ваш бюджет и время <br /> Наши услуги бесплатны
        </p>
        <button
          onClick={openVisibleFormDesigner}
          className="scale110 mx-4 mt-8 px-8 py-2 sm:py-4 backdrop-blur-sm border bg-sky-300/10 border-sky-500/20 text-white  text-center rounded-full relative"
        >
          <span className="text-sm sm:text-lg mt-6">
            Консультация дизайнера →
          </span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-sky-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
