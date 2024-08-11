import Info from "./Info";
// import Badge from "./Badge";
import Product from "./Product";
import SideBar from "./SideBar";

export default ({ rubric }) => {
  return (
    <div className="antialised">
      <Info />

      {/* <Badge /> */}

      <div className="max-w-full mx-auto flex w-full h-full relative  px-4">
        <SideBar rubric={rubric} />
        <Product />
      </div>
    </div>
  );
};
