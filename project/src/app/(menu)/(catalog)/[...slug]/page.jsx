import { notFound } from 'next/navigation';

import { Rubric, Category, ProductDetail } from "@/UI";
import { getCatalog, getCategory, getProduct } from "./server";

// React Server Components
import * as motion from "framer-motion/client";

export async function generateMetadata({ params }) {
  const slug = params.slug[params.slug.length - 1];
  let data, metaTitle, metaDescription;

  if (params.slug.length === 1) {
    data = await getCatalog(slug);
    if (!data.catalog) {
        notFound();  // Эта функция перенаправит пользователя на страницу 404
      }
    metaTitle = data.catalog?.metaTitle?.value;
    metaDescription = data.catalog?.metaDescription?.value;
  } else if (params.slug.length === 2) {
    data = await getProduct(slug);
    if (!data.product) {
        notFound();  // Эта функция перенаправит пользователя на страницу 404
      }
    metaTitle = "kjnkjnjk";
    metaDescription = "jnmkjmkl";
  } else if (params.slug.length === 3) {
    data = await getCategory(slug);
    if (!data.category) {
        notFound();  // Эта функция перенаправит пользователя на страницу 404
      }
    metaTitle = data.category?.metaTitle?.value;
    metaDescription = data.category?.metaDescription?.value;
  }

  return {
    title: metaTitle,
    description: metaDescription,
  };
}

export default async function PageComponent({ params }) {
  const slug = params.slug[params.slug.length - 1];
  let data, isCatalog, isCategory, isProduct;
  if (params.slug.length === 1) {
    data = await getCatalog(slug);
    isCatalog = true;
  } else if (params.slug.length === 2) {
    data = await getProduct(slug);
    isProduct = true;
  } else if (params.slug.length === 3) {
    data = await getCategory(slug);
    isCategory = true;
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      className="flex-1 py-3 h-full overflow-y-auto lg:pl-4"
    >
      {isCatalog && <Rubric dataCatalog={data.catalog} />}
      {isCategory && <Category dataCategory={data.category} />}
      {isProduct && <ProductDetail dataProduct={data.product} />}
    </motion.main>
  );
}
