import { notFound } from "next/navigation";

import { SideBar, Info, Badge, MobileCatalog } from "@/UI";
import { getCatalog } from "./server";

export default async ({ children, params }) => {
  const slug = params.slug[0];
  const data = await getCatalog(slug);

  if (!data.catalog) {
    notFound(); // Эта функция перенаправит пользователя на страницу 404
  }

  return (
    <>
      <MobileCatalog />
      <div className="antialised">
        <Info />
        {/*  <Badge />  */}

        <div className="max-w-full mx-auto flex w-full h-full relative py-4 px-4">
          <SideBar dataCatalog={data.catalog} />
          {children}
        </div>
      </div>
    </>
  );
};
