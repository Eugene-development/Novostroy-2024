"use client";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default ({ dataProduct }) => {
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
