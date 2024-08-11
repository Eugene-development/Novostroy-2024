import { SideBar, Info } from "@/UI"
import { getCatalog } from "./server";

export default async ({ children, params }) => {
  const data = await getCatalog({ params });

  return (
    <div className="antialised">
    
      <Info />

      {/* <Badge /> */}

      <div className="max-w-full mx-auto flex w-full h-full relative  px-4">
        <SideBar dataCatalog={data.catalog}/>
        { children }
      </div>
    </div>
  )
}