import Link from "next/link";
import Image from "next/image";

export default ({ products }) => {
  return (
    <>
      <section class="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div class="mb-4 flex items-center justify-between gap-4 md:mb-8">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Избранное
            </h2>

            <a
              href="#"
              title=""
              class="text-base font-medium text-gray-900 underline hover:no-underline dark:text-white"
            >
              {" "}
              See all categories
            </a>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            {products.map ((item) => (
              <div key={item.slug} class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <Image
                    class="mx-auto mb-4 h-60 dark:hidden md:mb-6"
                    src={`${process.env.NEXT_PUBLIC_S3}/${item?.image[0]?.hash}`}
                    alt={item.value}
                    width={600}
                    height={600}
                  />
                  
  
                <span class="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  <svg
                    class="me-1.5 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.9 15.1 15 9m-5-.6h0m3.1 7.2h0M14 4a2.8 2.8 0 0 0 2.3.9 2.8 2.8 0 0 1 2.9 3 2.8 2.8 0 0 0 .9 2.1 2.8 2.8 0 0 1 0 4.2 2.8 2.8 0 0 0-.9 2.2 2.8 2.8 0 0 1-3 2.9 2.8 2.8 0 0 0-2.1.9 2.8 2.8 0 0 1-4.2 0 2.8 2.8 0 0 0-2.2-.9 2.8 2.8 0 0 1-2.9-3 2.8 2.8 0 0 0-.9-2.1 2.8 2.8 0 0 1 0-4.2 2.8 2.8 0 0 0 .9-2.2 2.8 2.8 0 0 1 3-2.9A2.8 2.8 0 0 0 9.9 4a2.8 2.8 0 0 1 4.2 0Z"
                    ></path>
                  </svg>
                    {item.parentable.value}
                </span>
  
                <span
                  class="mt-4 block font-medium text-gray-900 hover:underline dark:text-white"
                >
                  {item.value}
                </span>
  
                <Link
                  href="#"
                  title=""
                  class="mt-4 inline-flex items-center gap-1.5 font-medium text-sky-700 hover:text-sky-600 dark:text-sky-500 dark:hover:text-sky-400"
                >
                Подробнее
                  <svg
                    class="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    ></path>
                  </svg>
                </Link>
              </div>
              
            ))
            
          }
            
            
          </div>
        </div>
      </section>
    </>
  );
};
