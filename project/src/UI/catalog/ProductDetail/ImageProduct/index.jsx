/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
"use client";
import Image from "next/image";
import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const product = {
  name: "Zip Tote Basket",
  price: "$140",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 1,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 1,
      name: "Angled view",
      src: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back.svg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    {
      id: 1,
      name: "Angled view",
      src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700",
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    // More sections...
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default ({ dataProduct }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="mx-auto max-w-2xl px-1  sm:px-2  lg:max-w-7xl lg:px-8">
      <div className=" lg:items-start ">
        {/* Image gallery */}
        <TabGroup className="flex flex-col-reverse">
          {/* Image selector */}
          <div className="mx-auto mt-6 hidden w-[40rem] max-w-7xl sm:block ">
            <TabList className="grid grid-cols-4 gap-6">
              {dataProduct.image.map(({ hash }) => (
                <Tab
                  key={hash}
                  className="group relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                >
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_S3}/${hash}`}
                      className="h-full w-full object-cover object-center"
                      alt="image"
                      width={640}
                      height={320}
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-sky-500"
                  />
                </Tab>
              ))}
            </TabList>
          </div>

          <TabPanels className=" w-full">
            {dataProduct.image.map(({ hash }) => (
              <TabPanel key={hash}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3}/${hash}`}
                  className="h-full w-full object-contain object-center sm:rounded-lg"
                  alt="image"
                  width={640}
                  height={320}
                />
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};
