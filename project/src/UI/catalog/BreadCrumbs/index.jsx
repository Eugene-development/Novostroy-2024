import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { OrderInfo } from "@/UI";

const BreadcrumbLink = ({ href, text }) => (
  <Link href={href} className="flex hover:text-sky-700">
    <span>{text}</span>
    <ChevronRightIcon aria-hidden="true" className="size-6 text-gray-400" />
  </Link>
);

const ChevronIcon = () => (
  <ChevronRightIcon aria-hidden="true" className="size-6 text-gray-400" />
);

export default ({ data }) => {
  const parentable = data?.parentable || {};
  const grandParent = parentable.parentable?.parentable;
  const parent = parentable?.parentable;

  return (
    <div className="">
      <div className="hidden md:block divide-y divide-gray-200 rounded-lg border border-gray-100 bg-white px-4 py-3 md:px-4 md:py-3 shadow-sm">
        <div className="items-center justify-between md:flex">
          <div className="inline-flex space-x-0 whitespace-pre">
            <span className="hidden sm:block rounded-full bg-gray-50/50 mr-2 px-4 py-0.5 text-xs font-semibold leading-6 text-gray-600 ring-1 ring-inset ring-sky-400/10">
              Каталог
            </span>

            <span className="inline-flex items-center space-x-0 text-xs font-medium leading-6 text-gray-600">
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
                  {parent && <ChevronIcon />}
                </>
              )}

              {/* Значение */}
              {!grandParent && <span>{data?.value}</span>}
            </span>
          </div>
          <OrderInfo />

        </div>
        {/* <Filter /> */}
      </div>


    </div>
  );
};
