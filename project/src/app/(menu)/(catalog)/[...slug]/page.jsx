import { Rubric, Category, BreadCrumbs } from "@/UI";
import { getCatalog, getCategory } from "./server";

// export async function generateMetadata({ params }) {
//   const meta = await getCatalog({ params });

//   return {
//     title: "Фабрика мебели ЗОВ | " + meta.category_one.value,
//     description:
//       "Если Вас интересуют " +
//       meta.category_one.value +
//       " с нашей фабрики ЗОВ, то ознакомьтесь с нашими предложениями вариантов мебели на нашем сайте.",
//   };
// }

export default async ({ params }) => {
  const slug = params.slug[params.slug.length - 1];
  let data, isCatalog;

  if (params.slug.length === 1) {
    data = await getCatalog(slug);
    isCatalog = true;
  } else if (params.slug.length === 3) {
    data = await getCategory(slug);
    isCatalog = false;
  }

  return (
    <main className="flex-1 py-3 h-full overflow-y-auto lg:pl-4">
      <BreadCrumbs data={isCatalog ? data.catalog : data.category} />

      {isCatalog ? (
        <Rubric dataCatalog={data.catalog} />
      ) : (
        <Category dataCategory={data.category} />
      )}
    </main>
  );
};
