import { BreadCrumbs } from "@/UI";

import OrderInfo from "./OrderInfo";
import Filter from "./Filter";
import Card from "./Card";
import Pagination from "./Pagination";
export default ({ dataCategory }) => {
  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-10">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 md:p-6">
          <div className="items-center justify-between md:flex">
            <div className="mb-4 text-xl flex items-center justify-center font-semibold text-gray-900 dark:text-white md:mb-0">
              <BreadCrumbs data={dataCategory} />
              {/* <span className="ms-2 text-lg font-medium text-gray-500 dark:text-gray-400">298 products</span>*/}
            </div>
            <OrderInfo />
          </div>
          <Filter />
        </div>
        <Card dataCategory={dataCategory} />
        <Pagination />
      </div>
    </section>
  );
};
