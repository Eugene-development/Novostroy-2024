import { Catalog } from "@/UI";
import { staticData } from "./data"
const {rubric} = staticData

export default function page() {
  return <Catalog rubric={rubric}/>;
}
