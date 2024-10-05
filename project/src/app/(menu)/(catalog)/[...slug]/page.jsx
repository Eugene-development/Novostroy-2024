import { notFound } from 'next/navigation';
import { Rubric, Category, ProductDetail } from "@/UI";
import { getCatalog, getCategory, getProduct } from "./server";
import * as motion from "framer-motion/client";

// Общая функция для работы с данными
async function fetchData(slug) {
  let data, metaTitle, metaDescription, isCatalog, isCategory, isProduct;

  switch (slug.length) {
    case 1:
      data = await getCatalog(slug[0]);
      if (!data.catalog) notFound();
      metaTitle = data.catalog.metaTitle?.value;
      metaDescription = data.catalog.metaDescription?.value;
      isCatalog = true;
      break;

    case 2:
      data = await getProduct(slug[1]);
      if (!data.product) notFound();
      metaTitle = data.product.metaTitle?.value;
      metaDescription = data.product.metaDescription?.value;
      isProduct = true;
      break;

    case 3:
      data = await getCategory(slug[2]);
      if (!data.category) notFound();
      metaTitle = data.category.metaTitle?.value;
      metaDescription = data.category.metaDescription?.value;
      isCategory = true;
      break;

    default:
      notFound();
  }

  return { data, metaTitle, metaDescription, isCatalog, isCategory, isProduct };
}

// Генерация метаданных
export async function generateMetadata({ params }) {
  const { metaTitle, metaDescription } = await fetchData(params.slug);
  return {
    title: metaTitle,
    description: metaDescription,
  };
}

export default async function PageComponent({ params }) {
  const { data, isCatalog, isCategory, isProduct } = await fetchData(params.slug);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 py-3 h-full overflow-y-auto lg:pl-4"
    >
      {isCatalog && <Rubric dataCatalog={data.catalog} />}
      {isCategory && <Category dataCategory={data.category} />}
      {isProduct && <ProductDetail dataProduct={data.product} />}
    </motion.main>
  );
}