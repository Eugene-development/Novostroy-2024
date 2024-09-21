import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default ({ dataProduct }) => {
  return (
    <div>
      <TabGroup className="max-w-md lg:max-w-none mx-auto flex flex-col lg:flex-row justify-center mb-4">
        <TabList className="grid grid-cols-4 lg:block gap-4 order-2 lg:order-1 lg:space-y-4 mt-8 lg:mt-0">
          <Tab className="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto">
            <img
              className="object-contain w-full h-full"
              src={`${process.env.NEXT_PUBLIC_S3}/${dataProduct?.image[0]?.hash}`}
              alt=""
            />
          </Tab>

          <Tab className="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto">
            <img
              className="object-contain w-full h-full"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back.svg"
              alt=""
            />
          </Tab>

          <Tab className="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto">
            <img
              className="object-contain w-full h-full"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components.svg"
              alt=""
            />
          </Tab>

          <Tab className="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto">
            <img
              className="object-contain w-full h-full"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side.svg"
              alt=""
            />
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="px-4 rounded-lg bg-white dark:bg-gray-900">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3}/${dataProduct?.image[0]?.hash}`}
                className="w-full mx-auto rounded-lg"
                alt={dataProduct?.value}
                width={640}
                height={840}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="px-4 rounded-lg bg-white dark:bg-gray-900">
              <Image
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back.svg"
                className="w-full mx-auto rounded-lg"
                alt={dataProduct?.value}
                width={640}
                height={840}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="px-4 rounded-lg bg-white dark:bg-gray-900">
              <Image
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components.svg"
                className="w-full mx-auto rounded-lg"
                alt={dataProduct?.value}
                width={640}
                height={840}
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="px-4 rounded-lg bg-white dark:bg-gray-900">
              <Image
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side.svg"
                className="w-full mx-auto rounded-lg"
                alt={dataProduct?.value}
                width={640}
                height={840}
              />
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};
