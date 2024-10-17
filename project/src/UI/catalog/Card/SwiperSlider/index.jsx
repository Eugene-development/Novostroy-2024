"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default ({ images }) => {
  return (
    <section className="py-2 w-80 sm:w-full mx-auto">
      <div className="container">
        <Swiper
          navigation
          pagination={{ type: "fraction" }}
          modules={[Navigation, Pagination]}
          className="rounded-lg"
        >
          {images.map((item) => (
            <SwiperSlide
              key={item.hash}
              className="w-full h-96 aspect-w-16 aspect-h-12"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_S3}/catalog/${item.hash}`}
                className="h-72 w-full object-contain object-center rounded-lg"
                alt={item.alt}
                width={1280}
                height={640}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Глобальные стили для стрелок */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #075985;
          font-size: 10px;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: #0284c7;
        }
      `}</style>
    </section>
  );
};
