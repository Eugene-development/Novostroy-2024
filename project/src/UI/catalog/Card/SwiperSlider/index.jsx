// "use client";
import React, { Suspense } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default ({ images }) => {
  return (
    <section className="py-2 w-72 sm:w-full mx-auto">
      <div className="container">
        <Swiper
          navigation
          // pagination={{ type: "fraction" }}
          modules={[Navigation, Pagination]}
          className="rounded-lg"
        >
          {images.map((item) => (
            <SwiperSlide
              key={item.hash}
              className="w-full aspect-w-15 aspect-h-12"
            >
              <Suspense fallback={<p>Загрузка...</p>}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3}/catalog/${item.hash}`}
                  className="w-full object-contain object-center"
                  alt={item.alt}
                  width={1280}
                  height={640}
                />
              </Suspense>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Глобальные стили для стрелок */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #111827;
          font-size: 10px;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: #1f2937;
        }
      `}</style>
    </section>
  );
};
