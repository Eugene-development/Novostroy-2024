import Link from "next/link";
import { ButtonBack } from "@/UI";

import Price from "./Price";
import Stars from "./Stars";
import FavoriteButton from "./FavoriteButton";
import ConsultationButton from "./ConsultationButton";
import PriceButton from "./PriceButton";
import Tags from "./Tags";
import SupplierLink from "./SupplierLink";

export default ({ dataProduct }) => {
  const parentable = dataProduct.parentable || {};
  const grandParent = parentable.parentable?.parentable;
  const parent = parentable.parentable;

  return (
    <div className="w-full lg:max-w-lg sm:mx-8 mt-8 lg:mt-0 shrink-0 p-8  border border-gray-100 rounded-lg bg-gray-50/50 ">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
        {dataProduct?.value}
      </h1>
      <Stars />

      {/* <SupplierLink /> */}
      <div className="gap-4 mt-4 md:mt-6 sm:flex sm:items-center lg:flex-col">
        <FavoriteButton dataProduct={dataProduct} />
        <ConsultationButton />

        <p className="mt-4 md:mt-6 text-xs sm:text-sm font-normal text-gray-500 dark:text-gray-400">
          Наш дизайнер бесплатно даст вам общую консультацию по интересующим вас
          вопросам, связанным с проектированием мебели и условиям нашей работы.
        </p>
      </div>

      <PriceButton dataProduct={dataProduct} />

      <Tags tags={dataProduct?.tag} />

      <div className="mt-20 sm:gap-4 sm:items-center sm:flex justify-between">
        <ButtonBack />

        <div className="mt-4 sm:mt-0">
          <Link
            href={`/${grandParent?.slug}/${parent.slug}/${parentable.slug}`}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-medium px-3 py-0.5 rounded "
          >
            Категория - {dataProduct?.parentable.value}
          </Link>
        </div>
      </div>
    </div>
  );
};
