import { ProductDetail } from "@/UI";
import {getProduct} from "./server"

export default async ({params}) => {
  const slug = params.slug;
  const data = await getProduct(slug);

return (
  <ProductDetail dataProduct={ data } />
)
}