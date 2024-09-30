import Component from "./component";
import { getFullCatalog } from "@/app/server";

export default async () => {
  const data = await getFullCatalog();

  return <Component dataFullCatalog={data.fullcatalog} />;
};
