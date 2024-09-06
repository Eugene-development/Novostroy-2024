import { Rubric, Category, ProductDetail, BreadCrumbs } from "@/UI";
import { getCatalog, getCategory, getProduct } from "./server";

export async function generateMetadata({ params }) {
  const slug = params.slug[params.slug.length - 1];
  let data, isCatalog, isCategory, isProduct, metaTitle, metaDescription;

  if (params.slug.length === 1) {
    data = await getCatalog(slug);
    metaTitle = data.catalog?.metaTitle?.value;
    metaDescription = data.catalog?.metaDescription?.value;
    isCatalog = true;
  } else if (params.slug.length === 2) {
    data = await getProduct(slug);
    metaTitle = "kjnkjnjk"
    metaDescription = "jnmkjmkl"
    isProduct = true;
  } else if (params.slug.length === 3) {
    data = await getCategory(slug);
    metaTitle = data.category?.metaTitle?.value;
    metaDescription = data.category?.metaDescription?.value;
    isCategory = true;
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
    // console.log(data)
    isProduct = true;
  } else if (params.slug.length === 3) {
    data = await getCategory(slug);
    isCategory = true;
  }

  return (
    <main className="flex-1 py-3 h-full overflow-y-auto lg:pl-4">
      {isCatalog && <Rubric dataCatalog={data.catalog} />}
      {isProduct && <ProductDetail dataProduct={data.product} />}
      {isCategory && <Category dataCategory={data.category} />} 
    </main>
  );
}