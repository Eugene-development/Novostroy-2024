import { Rubric, Category } from "@/UI";
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
  // Последний элемент
  const slug = params.slug[params.slug.length - 1]

  if (params.slug.length == 1) {
    const data = await getCatalog(slug);
      return <Rubric dataCatalog={data.catalog} />
  } else if (params.slug.length == 3){
    const data = await getCategory(slug);
    return <Category slug={ slug }/>
  }
  
};
