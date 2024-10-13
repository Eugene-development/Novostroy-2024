import Logo from "./Logo";
import NavBar from "./NavBar";
import City from "./City";

export default function Header() {
  return (
    <div className=" hidden lg:flex px-4 py-1 bg-gray-50/40 justify-between z-50 items-center">
      <Logo />
      <NavBar />
      <City />
    </div>
  );
}
