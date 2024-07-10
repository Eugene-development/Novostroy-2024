import Logo from "./Logo";
import NavBar from "./NavBar";
import City from "./City";

export default function Header() {
  return (
    <div className="flex px-4 py-2 bg-gray-50/40 justify-between z-50">
      <Logo />
      <NavBar />
      <City />
    </div>
  );
}