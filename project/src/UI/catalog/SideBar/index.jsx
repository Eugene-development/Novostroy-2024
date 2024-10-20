import { Search } from "@/UI";
import Designer from "./Designer";
import Call2Action from "./Call2Action";
import Rubric from "./Rubric";

export default ({ dataCatalog }) => {
  return (
    <div className="">
      <aside
        id="sidebar"
        className="fixed top-0 left-0 z-40 lg:z-0 w-72 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0  lg:block lg:relative lg:h-auto lg:rounded-lg lg:border-r-0"
        aria-label="Sidebar"
      >
        {/*<Search /> */}

        <div className="overflow-y-auto py-1 px-3 h-full bg-white  lg:rounded-lg">
          <Designer />

          <Call2Action />

          <Rubric dataCatalog={dataCatalog} />
        </div>
      </aside>
    </div>
  );
};
