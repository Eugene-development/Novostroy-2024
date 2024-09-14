"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// import { images } from '@/lib/images'

// import 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default () => {
  return (
    <section className="py-12">
      <div className="container">
        <Swiper
          navigation
          pagination={{ type: "fraction" }}
          modules={[Navigation, Pagination]}
          // onSwiper={swiper => console.log(swiper)}
          className="h-96 w-full rounded-lg"
        >
          <SwiperSlide>
            {/* <div className='flex h-full w-full items-center justify-center'>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    className='block h-full w-full object-cover'
                                />
                            </div> */}
            
          <Image
            src="https://storage.yandexcloud.net/zovrus/site/1-1600x1573.jpg"
            className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
            width={640}
            height={640}
          />
          </SwiperSlide>
          <SwiperSlide>
            {/* <div className='flex h-full w-full items-center justify-center'>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    className='block h-full w-full object-cover'
                                />
                            </div> */}
          <Image
            src="https://storage.yandexcloud.net/zovrus/site/1-1600x1573.jpg"
            className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
            width={640}
            height={640}
          />
          </SwiperSlide>
          <SwiperSlide>
            {/* <div className='flex h-full w-full items-center justify-center'>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    className='block h-full w-full object-cover'
                                />
                            </div> */}
          <Image
            src="https://storage.yandexcloud.net/zovrus/site/1-1600x1573.jpg"
            className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
            width={640}
            height={640}
          />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
