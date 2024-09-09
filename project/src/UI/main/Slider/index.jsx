"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./components";
// import { FlipWords } from "./components/FlipWords"
import { useFormsStore } from "@/stores/forms";

export default function ImagesSliderDemo() {
  const { openVisibleFormDesigner } = useFormsStore.visibleFormDesigner();

  const images = [
    "https://zovofficial.com/image/cache/catalog/products/kuhni/2024/norvud/cam-1-1600x1472.jpg",
    "https://zovofficial.com/image/cache/catalog/products/korpusnaya-mebel/5-pemont/gostinaya/2-1600x942.jpg",
  ];
  // const words = ["комфортнее", "красивее", "удобнее", "приятнее"];
  return (
    <ImagesSlider className="h-[54rem]" images={images}>
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
        className=" z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 py-4">
          {/* Мы делаем ваш дом <br /><FlipWords words={words} /> */}
          Мы делаем <br />
          вашу жизнь уютнее
        </motion.p>
        <p className="max-w-4xl text-center font-extralight text-lg text-gray-100 tracking-wide">
          Наша команда это профессиональные дизайнеры, работающие в лучших
          мебельных компаниях. Мы предложим Вам различные варианты вашего
          мебельного проекта с оптимальной ценой и отличным качеством
          исполнения. Наши услуги бесплатны.
        </p>
        <button
          onClick={openVisibleFormDesigner}
          className="scale110 mt-6 px-8 py-4 backdrop-blur-sm border bg-sky-300/10 border-sky-500/20 text-white mx-auto text-center rounded-full relative"
        >
          <span className="text-lg mt-6">
            Бесплатная консультация дизайнера →
          </span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-sky-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
