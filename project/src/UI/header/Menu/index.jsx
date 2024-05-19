import Logo from "./Logo";
import NavBar from "./NavBar";
import City from "./City";

export default function Header() {
  return (
    <div className="flex px-4 py-3 bg-gray-100 justify-between">
      <Logo />
      <NavBar />
      <City />
    </div>
  );
}
