import { BreadCrumbs, OrderInfo, Filter, Button } from "@/UI";
import Accordion from "./Accordion";
import ImageProduct from "./ImageProduct";
import Product from "./Product";

export default ({ dataProduct }) => {
  // let x ={test: "hhh"};
  // let y = x;
  // y.test = "bbb";
  // console.log(x.test);

  return (
    <section className="sm:bg-gray-50/50 py-2 sm:px-0 antialiased md:py-4 rounded-xl">
      <div className="mx-auto max-w-screen-xl">
        <Button value={"Категории каталога"} />

        <BreadCrumbs data={dataProduct} />

        <div className="sm:hidden">
          <OrderInfo />
        </div>

        <section className="sm:mt-4 py-1 bg-white md:py-2 xl:py-8 dark:bg-gray-900 antialiased rounded-lg">
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
