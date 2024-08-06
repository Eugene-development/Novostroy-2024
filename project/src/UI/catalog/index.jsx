import Info from "./Info";
import Badge from "./Badge";
import Product from "./Product";
// import Bar2 from "./Bar2"
import LeftMenu from "./LeftMenu"

export default () => {
  return (
    <div className="antialised">
      <Info />

      <Badge />

      <div className="max-w-full mx-auto flex w-full h-full relative  px-4">
        
        <LeftMenu/>
        {/* <Bar2/> */}
        <Product />
      </div>
    </div>
  );
};
