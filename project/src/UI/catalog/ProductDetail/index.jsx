import { BreadCrumbs } from "@/UI";
import Accordion from "./Accordion";
import ImageProduct from "./ImageProduct";
import Product from "./Product";

export default ({ dataProduct }) => {
  return (
    <section className="sm:bg-gray-50 py-2 sm:px-0 antialiased md:py-4 rounded-xl">
      <div className="mx-auto max-w-screen-xl">
        <BreadCrumbs data={dataProduct} />
        <section className="py-1 bg-white md:py-2 xl:py-8 dark:bg-gray-900 antialiased rounded-lg">
          <div className="max-w-screen-xl mx-auto">
            <div className="lg:flex justify-between">
              <div className="sm:px-8">
                <ImageProduct dataProduct={dataProduct} />
                {/* <Accordion /> */}
              </div>
              <Product dataProduct={dataProduct} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
