"use client";
import { useState } from "react";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import ImageModal from "./ImageModal";

export default ({ dataProduct }) => {
  // Состояние для управления модальным окном
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Состояние для текущего пути изображения
  const [currentImage, setCurrentImage] = useState(null);

  // Функция для открытия модального окна с текущим изображением
  const openModalWithImage = (imagePath) => {
    setCurrentImage(imagePath);   // Устанавливаем путь изображения
    setIsModalOpen(true);         // Открываем модальное окно
  };

  return (
    <>
      {/* Передаем состояние и путь к изображению в дочерний компонент */}
      <ImageModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} imageSrc={currentImage} />
      
      <div className="mx-auto max-w-2xl px-1 lg:max-w-8xl">
        <div className="lg:items-start">
          {/* Image gallery */}
          <TabGroup className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 w-[20rem] sm:w-[40rem] max-w-7xl sm:block">
              <TabList className="grid grid-cols-4 gap-4 sm:gap-6">
                {dataProduct.image.map((item) => (
                  <Tab
                    key={item.hash}
                    className="group relative flex h-12 sm:h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none ring-1 ring-gray-200 focus:ring-gray-500 ring-offset-4"
                  >
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_S3}/catalog/${item.hash}`}
                        className="w-full h-full object-contain object-center"
                        alt={item.alt}
                        width={1280}
                        height={960}
                      />
                    </span>
                  </Tab>
                ))}
              </TabList>
            </div>

            <TabPanels className="cursor-pointer w-full aspect-w-15 aspect-h-10 scale110">
              {dataProduct.image.map((item) => (
                <TabPanel
                  key={item.hash}
                  onClick={() => openModalWithImage(`${process.env.NEXT_PUBLIC_S3}/catalog/${item.hash}`)}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3}/catalog/${item.hash}`}
                    className="w-full h-full object-contain object-center rounded-lg"
                    alt={item.alt}
                    width={1280}
                    height={960}
                  />
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </>
  );
};