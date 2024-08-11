import { Product } from "@/UI";
import { getCatalog } from "./server";

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
  const data = await getCatalog({ params });

  return <Product rubric={data.catalog} />;
};
