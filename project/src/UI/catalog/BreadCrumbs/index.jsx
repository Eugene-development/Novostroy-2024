import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { OrderInfo, Filter } from "@/UI";

export default ({ data }) => {
  return (
    <div className="">
      <div className="mb-4 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white p-4 md:p-4 shadow-sm dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 ">
        <div className="items-center justify-between md:flex">
          <div className="mb-4 text-xl flex items-center justify-center font-semibold text-gray-900 dark:text-white md:mb-0">
            <div className="inline-flex space-x-6 whitespace-pre">
              <span className="rounded-full bg-gray-400/10 -mr-2 px-4 py-0.5 text-sm font-semibold leading-6 text-gray-600 ring-1 ring-inset ring-sky-400/10">
                Каталог
              </span>

              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <ChevronRightIcon
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-400"
                />
                {data.parentable.parentable?.parentable && (
                  <Link
                    href={`/${data.parentable.parentable.parentable.slug}`}
                    className="flex items-center hover:text-sky-700"
                  >
                    <span>{data.parentable.parentable.parentable.value}</span>
                    <ChevronRightIcon
                      aria-hidden="true"
                      className="h-5 w-5 ml-2 text-gray-400"
                    />
                  </Link>
                )}
                {data.parentable?.parentable && (
                  <>
                    <span>{data.parentable.parentable.value}</span>
                    <ChevronRightIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    />
                  </>
                )}

                {data.parentable?.slug ? (
                  <Link
                    href={`/${data.parentable.parentable.parentable?.slug}/${data.parentable.parentable.slug}/${data.parentable.slug}`}
                    className="flex items-center hover:text-sky-700"
                  >
                    <span>{data.parentable.value}</span>
                  </Link>
                ) : (
                  <span>{data.parentable.value}</span>
                )}

                <ChevronRightIcon
                  aria-hidden="true"
                  className="h-5 w-5 ml-2 text-gray-400"
                />

                <span>{data.value}</span>
              </span>
            </div>

            {/* <span className="ms-2 text-lg font-medium text-gray-500 dark:text-gray-400">298 products</span>*/}
          </div>
          <OrderInfo />
        </div>
        <Filter />
      </div>
    </div>
  );
};
