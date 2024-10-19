import Image from "next/image";
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

        <section className="relative isolate overflow-hidden bg-gray50/50 px-4 py-12 sm:py-24 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.gray.200),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray50/50 shadow-xl shadow-gray-600/10 ring-1 ring-gray-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <p className="ml-0.5 text-base font-semibold leading-7 text-gray-600">
              Рубрика каталога
            </p>
            <h1 className=" text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              {dataCatalog?.value}
            </h1>
            <figure className="mt-10">
              <blockquote className="text-pretty  font-semibold leading-8 text-gray-700 text-lg sm:leading-9">
                <div
                  className="*:mt-4"
                  dangerouslySetInnerHTML={{
                    __html: dataCatalog?.text?.value || "xxx",
                  }}
                />
              </blockquote>
              {/* <figcaption className="mt-10">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="mx-auto h-10 w-10 rounded-full"
                    />
                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div className="font-semibold text-gray-900">Judith Black</div>
                      <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                        <circle r={1} cx={1} cy={1} />
                      </svg>
                      <div className="text-gray-600">CEO of Workcation</div>
                    </div>
                  </figcaption> */}
            </figure>
          </div>
        </section>
      </section>
    </motion.main>
  );
};
