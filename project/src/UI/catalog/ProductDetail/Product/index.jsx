import Link from "next/link";

import Price from "./Price";
import Stars from "./Stars";
import FavoriteButton from "./FavoriteButton";
import ConsultationButton from "./ConsultationButton";
import PriceButton from "./PriceButton";

export default ({ dataProduct }) => {
  const parentable = dataProduct.parentable || {};
  const grandParent = parentable.parentable?.parentable;
  const parent = parentable.parentable;

  return (
    <div className="w-full lg:max-w-lg sm:mx-8 mt-8 lg:mt-0 shrink-0 p-6  border border-gray-200 rounded-lg bg-gray-50 ">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
        {dataProduct?.value}
      </h1>
      <Stars />

      {/* <Price /> */}
      <div className="gap-4 mt-4 md:mt-6 sm:flex sm:items-center lg:flex-col">
        <FavoriteButton dataProduct={dataProduct} />
        <ConsultationButton />

        <p className="mt-4 md:mt-6 text-xs sm:text-sm font-normal text-gray-500 dark:text-gray-400">
          Наш дизайнер бесплатно даст вам общую консультацию по интересующим вас
          вопросам, связанным с проектированием мебели и условиям нашей работы.
        </p>
      </div>

      <PriceButton dataProduct={dataProduct} />

      <div className="pt-8 mt-6 space-y-6 border-t border-gray-200 dark:border-gray-700">
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
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 sm:gap-4 sm:items-center sm:flex">
        <Link
          href={`/${grandParent?.slug}/${parent.slug}/${parentable.slug}`}
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-medium px-3 py-0.5 rounded ml-auto "
        >
          Категория - {dataProduct?.parentable.value}
        </Link>
      </div>
    </div>
  );
};
