// import { Search } from "@/UI";
import Designer from "./Designer";
import Call2Action from "./Call2Action";
import Rubric from "./Rubric";

export default ({ dataCatalog }) => {
  const sidebarClasses = "fixed top-0 left-0 z-40 lg:z-0 w-72 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0 lg:block lg:relative lg:h-auto lg:rounded-lg lg:border-r-0";
  const containerClasses = "overflow-y-auto py-1 px-3 h-full bg-white lg:rounded-lg";

  return (
    <div className="">
      <aside
        id="sidebar"
        className={sidebarClasses}
        aria-label="Sidebar"
      >
        {/*<Search /> */}

        <div className={containerClasses}>
          <Designer />

          <Call2Action />

          <Rubric dataCatalog={dataCatalog} />
        </div>
      </aside>
    </div>
  );
};
