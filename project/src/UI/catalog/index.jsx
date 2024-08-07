import Info from "./Info";
// import Badge from "./Badge";
import Product from "./Product";
import LeftMenu from "./LeftMenu";

export default ({ rubric }) => {
  return (
    <div className="antialised">
      <Info />

      {/* <Badge /> */}

      <div className="max-w-full mx-auto flex w-full h-full relative  px-4">
        <LeftMenu rubric={rubric} />
        <Product />
      </div>
    </div>
  );
};
