import Image from "next/image";

// React Server Components
import * as motion from "framer-motion/client";

import { BreadCrumbs, Tab } from "@/UI";
import FavoriteButton from "./FavoriteButton";

export default ({ dataProduct }) => {
  // console.log(dataProduct);
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }}>
      <section className="bg-gray-50 py-2 antialiased dark:bg-gray-900 md:py-4 rounded-xl">
        <div className="mx-auto max-w-screen-xl">
          <BreadCrumbs data={dataProduct} />

          <section className="py-1 bg-white md:py-2 xl:py-8 dark:bg-gray-900 antialiased rounded-lg">
            <div className="max-w-screen-xl mx-auto">
              <div className="lg:flex justify-between">
                <div className="px-4">
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

                    <div
                      id="product-2-tab-content"
                      className="order-1 lg:order-2"
                    >
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
                  {/*
          <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
            <h2 id="accordion-flush-heading-1">
              <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                <span>Product Details</span>
                <svg data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
                </svg>
              </button>
            </h2>
            <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">The product is a high-quality, durable solution designed to meet the needs of modern consumers. It features advanced technology and ergonomic design for optimal performance and comfort.</p>
                <p className="text-gray-500 dark:text-gray-400">Key features include a sleek interface, customizable settings, and compatibility with various devices. It is ideal for professionals and enthusiasts alike.</p>
              </div>
            </div>
            <h2 id="accordion-flush-heading-2">
              <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                <span>Specifications</span>
                <svg data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
                </svg>
              </button>
            </h2>
            <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">Specifications include advanced processor capabilities, extensive storage options, and seamless connectivity. The product is designed to handle demanding tasks efficiently.</p>
                <p className="text-gray-500 dark:text-gray-400">Additional features include high-resolution display, long-lasting battery life, and intuitive user interface for enhanced productivity.</p>
              </div>
            </div>
            <h2 id="accordion-flush-heading-3">
              <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                <span>Warranty</span>
                <svg data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
                </svg>
              </button>
            </h2>
            <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
              <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">The product comes with a comprehensive warranty that covers manufacturing defects and malfunctions. It provides peace of mind and assurance of product quality.</p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">Customers can enjoy reliable support and prompt assistance for any issues related to the product during the warranty period.</p>
              </div>
            </div>
          </div>
           */}
                </div>

                <div className="w-full mt-6 lg:max-w-lg lg:mt-0 shrink-0 px-4">
                  <div className="p-4 border border-gray-200 rounded-lg sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {dataProduct?.value}
                    </h1>

                    <div className="mt-4 sm:gap-4 sm:items-center sm:flex">
                      {/* 
              <span
                className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"
              >
                the last 2 products
              </span>*/}

                      <div className="flex items-center gap-2 mt-4 sm:mt-0">
                        <div className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mt-4">
                      <svg
                        className="w-5 h-5 text-sky-700 dark:text-sky-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        />
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                        />
                      </svg>
                      <p className="text-sm font-medium text-sky-700 dark:text-sky-500">
                        Запрос актуальной цены
                      </p>
                    </div>

                    {/* 
            <div
              className="gap-4 mt-4 md:mt-6 flex items-center justify-between"
            >
              <p
                className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
              >
                $1,249.99
              </p>
  
              <form className="flex items-center gap-2 mt-0">
                <div className="flex items-center gap-1">
                  <label
                    htmlFor="quantity"
                    className="text-sm font-medium text-gray-900 dark:text-white"
                    >Quantity</label
                  >
                  <button
                    data-tooltip-target="quantity-desc-3"
                    data-tooltip-trigger="hover"
                    className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    id="quantity-desc-3"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                  Quantity: Number of units to purchase.
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
                <select
                  id="quantity"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                >
                  <option selected>0</option>
                  <option value="1" selected>1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </form>
            </div>*/}

                    <FavoriteButton product={dataProduct} />

                    <p className="mt-4 md:mt-6 text-sm font-normal text-gray-500 dark:text-gray-400">
                      Наш дизайнер совершенно бесплатно даст вам общую
                      консультацию по интересующим вас вопросам, связанным с
                      проектированием мебели и условиям нашей работы.
                    </p>

                    <div className="pt-8 mt-8 space-y-6 border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <p className="text-base font-medium text-gray-900 dark:text-white">
                          Тэги
                        </p>

                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          {dataProduct?.tag.map((item) => (
                            <label
                              key={item.value}
                              htmlFor={item.value}
                              className="relative block"
                            >
                              <input
                                type="radio"
                                name="capacity2"
                                id={item.value}
                                className="absolute appearance-none top-2 left-2 peer"
                              />
                              <div className="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-white peer-checked:bg-sky-50 peer-checked:text-sky-700 peer-checked:border-sky-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:peer-checked:bg-sky-900 dark:peer-checked:border-sky-600 dark:peer-checked:text-sky-300 dark:hover:bg-gray-600">
                                <p className="text-sm font-medium">
                                  {item.value}
                                </p>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Tab />
      </section>
    </motion.main>
  );
};
