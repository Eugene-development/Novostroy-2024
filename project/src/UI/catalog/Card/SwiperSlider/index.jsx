"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// import { images } from '@/lib/images'

// import 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default ({ images }) => {
  return (
    <section className="py-2 w-72 sm:w-full">
      <div className="container">
        <Swiper
          navigation
          pagination={{ type: "fraction" }}
          modules={[Navigation, Pagination]}
          // onSwiper={swiper => console.log(swiper)}
          className="rounded-lg"
        >
          {images.map((item) => (
            <SwiperSlide key={item.hash} className=" w-full aspect-w-16 aspect-h-12">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3}/catalog/${item.hash}`}
                className="h-full w-full  object-cover object-center rounded-lg"
                alt="image"
                width={640}
                height={320}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
