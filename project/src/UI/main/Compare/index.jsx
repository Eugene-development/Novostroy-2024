import React from "react";
import { Compare } from "./components";

export default function CompareDemo() {
  return (
    <div className="p-8 border rounded-t-3xl  bg-gray-100  border-neutral-200 ">
      <div className="my-16  text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
          Стильный дизайн мебели
        </h2>
      </div>
      <Compare
        firstImage="https://zovofficial.com/image/cache/catalog/products/garderobnye-shkafy-i-sistemy/2024/linejnaya-2/03-1087x890.jpg"
        secondImage="https://zovofficial.com/image/cache/catalog/products/kuhni/2023/ernesta/glavnyjrakurs-1087x890.jpg"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="mx-auto h-[250px] w-[300px] md:h-[700px] md:w-[960px]"
        slideMode="hover"
      />
    </div>
  );
}
