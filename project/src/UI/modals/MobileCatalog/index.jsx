import Component from "./component";
import { getFullCatalog } from "@/app/(menu)/(catalog)/[...slug]/server";

export default async () => {
  const data = await getFullCatalog();

  return <Component dataFullCatalog={data.fullcatalog} />;
};
