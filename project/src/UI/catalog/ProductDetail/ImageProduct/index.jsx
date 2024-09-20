import Image from "next/image";

export default ({ dataProduct }) => {
  const parentable = dataProduct.parentable || {};
  const grandParent = parentable.parentable?.parentable;
  const parent = parentable.parentable;
  return (
    <div className="max-w-md lg:max-w-none mx-auto flex flex-col lg:flex-row justify-center mb-4">
      <ul
        className="grid grid-cols-4 lg:block gap-4 order-2 lg:order-1 lg:space-y-4 mt-8 lg:mt-0"
        id="product-2-tab"
        data-tabs-toggle="#product-2-tab-content"
        data-tabs-active-classes="border-gray-200 dark:border-gray-700"
        data-tabs-inactive-classes="border-transparent hover:border-gray-200 dark:hover:dark:border-gray-700 dark:border-transparent"
        role="tablist"
      >
        <li className="me-2" role="presentation">
          <button
            className="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto"
            id="product-2-image-1-tab"
            data-tabs-target="#product-2-image-1"
            type="button"
            role="tab"
            aria-controls="product-2-image-1"
            aria-selected="false"
          >
            <img
              className="object-contain w-full h-full dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
              alt=""
            />
            <img
              className="object-contain w-full h-full hidden dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
              alt=""
            />
          </button>
        </li>
        <li className="me-2" role="presentation">
          <button
            className="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto"
            id="product-2-image-2-tab"
            data-tabs-target="#product-2-image-2"
            type="button"
            role="tab"
            aria-controls="product-2-image-2"
            aria-selected="false"
          >
            <img
              className="object-contain w-full h-full dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back.svg"
              alt=""
            />
            <img
              className="object-contain w-full h-full hidden dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back-dark.svg"
              alt=""
            />
          </button>
        </li>
        <li className="me-2" role="presentation">
          <button
            className="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto"
            id="product-2-image-3-tab"
            data-tabs-target="#product-2-image-3"
            type="button"
            role="tab"
            aria-controls="product-2-image-3"
            aria-selected="false"
          >
            <img
              className="object-contain w-full h-full dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components.svg"
              alt=""
            />
            <img
              className="object-contain w-full h-full hidden dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg"
              alt=""
            />
          </button>
        </li>
        <li className="me-2" role="presentation">
          <button
            className="h-20 w-20 overflow-hidden border-2 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24 p-2 cursor-pointer mx-auto"
            id="product-2-image-4-tab"
            data-tabs-target="#product-2-image-4"
            type="button"
            role="tab"
            aria-controls="product-2-image-4"
            aria-selected="false"
          >
            <img
              className="object-contain w-full h-full dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side.svg"
              alt=""
            />
            <img
              className="object-contain w-full h-full hidden dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side-dark.svg"
              alt=""
            />
          </button>
        </li>
      </ul>

      <div id="product-2-tab-content" className="order-1 lg:order-2">
        <div
          className="px-4 rounded-lg bg-white dark:bg-gray-900"
          id="product-2-image-1"
          role="tabpanel"
          aria-labelledby="product-2-image-1-tab"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_S3}/${dataProduct?.image[0]?.hash}`}
            className="w-full mx-auto rounded-lg"
            alt={dataProduct?.value}
            width={640}
            height={840}
          />
        </div>
        <div
          className="hidden px-4 rounded-lg bg-white dark:bg-gray-900"
          id="product-2-image-2"
          role="tabpanel"
          aria-labelledby="product-2-image-2-tab"
        >
          <img
            className="w-full mx-auto dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back.svg"
            alt=""
          />
          <img
            className="w-full mx-auto hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back-dark.svg"
            alt=""
          />
        </div>
        <div
          className="hidden px-4 rounded-lg bg-white dark:bg-gray-900"
          id="product-2-image-3"
          role="tabpanel"
          aria-labelledby="product-2-image-3-tab"
        >
          <img
            className="w-full mx-auto dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components.svg"
            alt=""
          />
          <img
            className="w-full mx-auto hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg"
            alt=""
          />
        </div>
        <div
          className="hidden px-4 rounded-lg bg-white dark:bg-gray-900"
          id="product-2-image-4"
          role="tabpanel"
          aria-labelledby="product-2-image-4-tab"
        >
          <img
            className="w-full mx-auto dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side.svg"
            alt=""
          />
          <img
            className="w-full mx-auto hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side-dark.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
