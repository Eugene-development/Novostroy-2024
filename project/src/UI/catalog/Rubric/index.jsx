import { Fragment } from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import FlipWordsDemo from "./FlipWordsDemo";
// React Server Components
import * as motion from "framer-motion/client";

import { BreadCrumbs, OrderInfo, Filter, Button } from "@/UI";

export default ({ dataCatalog }) => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }}>
      <section className="bg-gray-50/50 py-2 antialiased md:py-4 rounded-xl">
        <div className="mx-auto max-w-screen-xl">
          <Button value={"Категории каталога"} />

          <BreadCrumbs data={dataCatalog} />
          <div className="sm:hidden">
            <OrderInfo />
          </div>

          <div className="mt:4 mx-auto max-w-2xl lg:mx-0">
            {/* <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {data}
          </h2> */}

            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p> */}
          </div>
        </div>

        <div className="relative isolate overflow-hidden ">
          <div className="mx-auto max-w-full px-6 pb-24 pt-8 sm:pb-32 lg:flex lg:px-16 ">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
              <h1 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {dataCatalog?.value}
                {/* <FlipWordsDemo/> */}
              </h1>
              <div
                className="mt-6 text-lg leading-8 text-gray-600 space-y-4"
                dangerouslySetInnerHTML={{
                  __html: dataCatalog?.text?.value || "xxx",
                }}
              ></div>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <img
                    alt="App screenshot"
                    src="https://www.nobilia.de/fileadmin/assets/produkte/_kuechen/_stages/494_senso.jpg"
                    width={2432}
                    height={1442}
                    className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};
