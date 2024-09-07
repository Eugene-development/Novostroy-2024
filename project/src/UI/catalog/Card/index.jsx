import Image from "next/image";
import Link from "next/link";
export default ({ dataCategory }) => {
  console.log(dataCategory.parentable.parentable.slug);
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dataCategory.product.map((item) => (
          <div
            key={item.slug}
            className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <div
              id="controls-carousel"
              className="relative w-full"
              data-carousel="static"
            >
              {/* <!-- Carousel wrapper --> */}

              <div className="relative mb-4 min-h-72  rounded-lg">
                {/* <!-- Item 1 --> */}
                <div className=" duration-1000 ease-in-out" data-carousel-item>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_S3}/${item?.image[0]?.hash}`}
                    className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                    alt={item.value}
                    width={640}
                    height={640}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  className="group flex h-full cursor-pointer items-center justify-center rounded-lg p-1.5 hover:bg-gray-50 focus:outline-none dark:hover:bg-gray-800"
                  data-carousel-prev
                >
                  <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <svg
                      className="h-7 w-7"
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
                        d="M5 12h14M5 12l4-4m-4 4 4 4"
                      />
                    </svg>
                    <span className="hidden">Previous</span>
                  </span>
                </button>
                <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                  <span id="carousel-current-item">1</span> of{" "}
                  <span id="carousel-total-items">4</span>
                </span>
                <button
                  type="button"
                  className="group flex h-full cursor-pointer items-center justify-center rounded-lg p-1.5 hover:bg-gray-50 focus:outline-none dark:hover:bg-gray-800"
                  data-carousel-next
                >
                  <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <svg
                      className="h-7 w-7"
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
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                    <span className="hidden">Next</span>
                  </span>
                </button>
              </div>
            </div>

            <div>
              <Link
                href={`/product/${item.slug}`}
                className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
              >
                {item.value}
              </Link>
              {/* <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">Apple M3 Octa Core, 23.8inch, RAM 8GB, SSD 256GB, Apple M3 8-Core, macOS Sonoma</p> */}
            </div>

            <Link
              href="#"
              title=""
              className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:underline dark:text-sky-600"
            >
              <svg
                className="h-4 w-4"
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
                  d="M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"
                />
              </svg>
              Узнать актуальную цену
            </Link>
            {/*
        <div className="flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">$1199</p>
  
          <div className="flex items-center justify-end gap-2">
            <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none has-[:checked]:ring-2">
              <input type="radio" name="color-choice" value="Black" className="sr-only" checked />
              <span id="color-choice-1-label" className="sr-only"> Black </span>
              <span aria-hidden="true" className="h-7 w-7 rounded-full border border-gray-900 border-opacity-10 bg-gray-900"></span>
            </label>
  
            <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-sky-700 focus:outline-none has-[:checked]:ring-2">
              <input type="radio" name="color-choice" value="Blue" className="sr-only" />
              <span id="color-choice-2-label" className="sr-only"> Blue </span>
              <span aria-hidden="true" className="h-7 w-7 rounded-full border border-sky-700 border-opacity-10 bg-sky-700"></span>
            </label>
  
            <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-pink-600 focus:outline-none has-[:checked]:ring-2">
              <input type="radio" name="color-choice" value="Gray" className="sr-only" />
              <span id="color-choice-3-label" className="sr-only"> Pink </span>
              <span aria-hidden="true" className="h-7 w-7 rounded-full border border-pink-600 border-opacity-10 bg-pink-600"></span>
            </label>
  
            <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-teal-500 focus:outline-none has-[:checked]:ring-2">
              <input type="radio" name="color-choice" value="Gray" className="sr-only" />
              <span id="color-choice-4-label" className="sr-only"> Teal </span>
              <span aria-hidden="true" className="h-7 w-7 rounded-full border border-teal-500 border-opacity-10 bg-teal-500"></span>
            </label>
          </div>
        </div>  */}

            <div className="flex items-center gap-4">
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-sky-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                  />
                </svg>
                В избранное
              </button>

              <Link
                href={`/${dataCategory.parentable.parentable.slug}/${item.slug}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
              >
                <svg
                  className="-ms-2 me-2 h-5 w-5"
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
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>
                Подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};