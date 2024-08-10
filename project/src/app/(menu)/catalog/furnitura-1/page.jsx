import { Catalog } from "@/UI";
import { staticData } from "./data"

export default function page() {
  return <Catalog rubric={staticData.rubric}/>;
}
