import { SideBar, Info, Badge } from "@/UI"
import { getCatalog } from "./server";

export default async ({ children, params }) => {
  
  const slug = params.slug[0]
  const data = await getCatalog(slug);

  return (
    <div className="antialised">
    
      <Info />

      {/* <Badge /> */}

      <div className="max-w-full mx-auto flex w-full h-full relative py-4 px-4">
        <SideBar dataCatalog={data.catalog}/>
        { children }
      </div>
    </div>
  )
}