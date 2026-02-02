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
    // "https://storage.yandexcloud.net/mine2024/novostroy/site/slider/cam-2-1763x1600.jpg",
    // "https://storage.yandexcloud.net/mine2024/novostroy/site/slider/2-1600x942.jpg",
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
          duration: 2,
        }}
        className="-mt-24 z-50 flex flex-col justify-center items-center"
      >
        <div className="font-bold text-3xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 py-4">
          <h1>
            <span className="text-5xl sm:text-6xl md:text-8xl">Мебель</span>
            <br />
            <span className="text-3xl sm:text-6xl md:text-8xl">
              для вашего дома
            </span>
          </h1>
        </div>
        
        
        <h2 className="md:hidden px-3 max-w-2xl xl:max-w-4xl text-sm text-center font-extralight xl:text-lg text-gray-100 tracking-wide">
          Бесплатная консультация профессионального дизайнера, замер помещения и дизайн-проект.
        </h2>
        
        <h2 className="hidden md:block px-8 max-w-2xl xl:max-w-4xl text-sm text-center font-extralight xl:text-lg text-gray-100 tracking-wide">
          Бесплатная консультация, замер и дизайн-проект.
        </h2>

        <p className="hidden md:block mt-4 px-1 max-w-2xl xl:max-w-4xl text-center font-extralight xl:text-lg text-gray-100 tracking-wide">
          Наш профессиональный дизайнер создаст для вас проект мебели по вашим
          размерам, согласует его с фабрикой, а также подберёт столешницу и
          аксессуары. Это поможет оптимизировать ваши затраты и сэкономить время
          на поиске лучших решений.
        </p>
        <button
          onClick={openVisibleFormDesigner}
          className="scale110 mx-4 mt-8 px-8 py-2 sm:py-4 backdrop-blur-sm border bg-sky-300/10 border-sky-500/20 text-white  text-center rounded-full relative"
        >
          <span className="text-xs sm:text-lg mt-6">
            Закажите бесплатный проект и просчёт →
          </span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-sky-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
