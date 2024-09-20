import Link from "next/link";
import { useFormsStore } from "@/stores/forms";


import Price from "./Price";
import Stars from "./Stars";
import FavoriteButton from "./FavoriteButton";


export default ({dataProduct}) => {
  const parentable = dataProduct.parentable || {};
  const grandParent = parentable.parentable?.parentable;
  const parent = parentable.parentable;

  
  const { openVisibleFormPrice } = useFormsStore.visibleFormPrice();

return (
  <div className="w-full mt-6 lg:max-w-lg lg:mt-0 shrink-0 px-4">
    <div className="p-4 border border-gray-200 rounded-lg sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
        {dataProduct?.value}
      </h1>
      <Stars />
      <div className="mt-4 sm:gap-4 sm:items-center sm:flex">
        <Link
          href={`/${grandParent?.slug}/${parent.slug}/${parentable.slug}`}
          className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"
        >
          Категория - {dataProduct?.parentable.value}
        </Link>
      </div>

      <button
        type="button"
        onClick={() => openVisibleFormPrice(dataProduct?.value)}
        className="flex items-center gap-1 mt-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-sky-700 dark:text-sky-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
          />
        </svg>

        <p className="text-sm font-medium text-sky-700 dark:text-sky-500">
          Запрос актуальной цены проекта
        </p>
      </button>

      <Price />

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

)
}