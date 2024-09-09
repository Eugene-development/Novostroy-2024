import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { OrderInfo, Filter } from "@/UI";

const BreadcrumbLink = ({ href, text }) => (
  <Link href={href} className="flex items-center hover:text-sky-700">
    <span>{text}</span>
    <ChevronRightIcon
      aria-hidden="true"
      className="h-5 w-5 ml-2 text-gray-400"
    />
  </Link>
);

const ChevronIcon = () => (
  <ChevronRightIcon aria-hidden="true" className="h-5 w-5 ml-2 text-gray-400" />
);

export default ({ data }) => {
  const parentable = data.parentable || {};
  const grandParent = parentable.parentable?.parentable;
  const parent = parentable.parentable;

  return (
    <div className="">
      <div className="mb-4 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white p-4 md:p-4 shadow-sm dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800">
        <div className="items-center justify-between md:flex">
          <div className="mb-4 text-xl flex items-center justify-center font-semibold text-gray-900 dark:text-white md:mb-0">
            <div className="inline-flex space-x-6 whitespace-pre">
              <span className="rounded-full bg-gray-400/10 -mr-2 px-4 py-0.5 text-sm font-semibold leading-6 text-gray-600 ring-1 ring-inset ring-sky-400/10">
                Каталог
              </span>

              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                {/* ПраПраРодитель */}
                {grandParent && (
                  <BreadcrumbLink
                    href={`/${grandParent.slug}`}
                    text={grandParent.value}
                  />
                )}

                {/* ПраРодитель */}
                {parent?.slug &&
                  (parent?.parentable ? (
                    <>
                      <span>{parent.value}</span>
                      <ChevronIcon />
                    </>
                  ) : (
                    <BreadcrumbLink
                      href={`/${parent.slug}`}
                      text={parent.value}
                    />
                  ))}

                {/* Родитель */}
                {parentable.slug ? (
                  <BreadcrumbLink
                    href={`/${grandParent?.slug}/${parent.slug}/${parentable.slug}`}
                    text={parentable.value}
                  />
                ) : (
                  <>
                    <span>{parentable.value}</span>
                    <ChevronIcon />
                  </>
                )}

                {/* Значение */}
                <span>{data.value}</span>
              </span>
            </div>
          </div>
          <OrderInfo />
        </div>
        <Filter />
      </div>
    </div>
  );
};
