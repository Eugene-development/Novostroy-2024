import { Product } from "@/UI";
import { getCategory } from "./server";

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
  const data = await getCategory(slug);
  // const lastElement = params.slug[params.slug.length - 1];

  return <p>{slug}</p>;
  // return <Product rubric={data.catalog} />;
};
