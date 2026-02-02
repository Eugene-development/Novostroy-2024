import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";
import { Rubric, Category, ProductDetail } from "@/UI";
import * as motion from "framer-motion/client";
export const revalidate = 10;
const BASE_URL = process.env.NEXT_PUBLIC_API_URL; // Базовый URL для запросов

// Общая функция для работы с данными
async function fetchData(slug) {
  let data, metaTitle, metaDescription, isCatalog, isCategory, isProduct;

  switch (slug.length) {
    case 1:
      // Вызов API-роута для каталога
      const catalogRes = await fetch(`${BASE_URL}/api/catalog?slug=${slug[0]}`);
      if (!catalogRes.ok) notFound();
      data = await catalogRes.json();
      metaTitle = data.catalog?.metaTitle?.value;
      metaDescription = data.catalog?.metaDescription?.value;
      isCatalog = true;
      break;

    case 2:
      // Вызов API-роута для продукта
      const productRes = await fetch(`${BASE_URL}/api/product?slug=${slug[1]}`);
      if (!productRes.ok) notFound();
      data = await productRes.json();
      metaTitle = `${data.product?.value} под ваши пожелания в дизайн-проекте`;
      metaDescription = `${data.product?.value} подбирается с учётом ваших пожеланий, чтобы создать уют и комфорт в соответствии с вашим дизайн-проектом.`;
      // metaTitle = data.product?.metaTitle?.value;
      // metaDescription = data.product?.metaDescription?.value;
      isProduct = true;
      break;

    case 3:
      // Вызов API-роута для категории
      const categoryRes = await fetch(
        `${BASE_URL}/api/category?slug=${slug[2]}`,
      );
      if (!categoryRes.ok) notFound();
      data = await categoryRes.json();
      metaTitle = data.category?.metaTitle?.value;
      metaDescription = data.category?.metaDescription?.value;
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
  const { data, isCatalog, isCategory, isProduct } = await fetchData(
    params.slug,
  );

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
