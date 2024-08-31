import { ProductDetail } from "@/UI";

export default ({params}) => {
  const slug = params.slug;
  console.log(slug)

return (
  <ProductDetail/>
)
}