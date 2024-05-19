"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./components";

export default function ImagesSliderDemo() {
    const images = [
        "https://zovofficial.com/image/cache/catalog/products/kuhni/2024/norvud/cam-1-1600x1472.jpg",
        "https://zovofficial.com/image/cache/catalog/products/korpusnaya-mebel/5-pemont/gostinaya/2-1600x942.jpg",
    ];
    return (
        <ImagesSlider className="h-[50rem]" images={images}>
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
                className="z-50 flex flex-col justify-center items-center"
            >
                <motion.p className="font-bold text-xl md:text-8xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    Мы делаем  <br />ваш дом немного лучше
                </motion.p>
                <button className="px-8 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                    <span>Посмотреть каталог →</span>
                    <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                </button>
            </motion.div>
        </ImagesSlider>
    );
}
