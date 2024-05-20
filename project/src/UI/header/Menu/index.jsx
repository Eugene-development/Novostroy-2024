import Logo from "./Logo";
import NavBar from "./NavBar";
import City from "./City";

export default function Header() {
  return (
    <div className="sticky top-0 flex px-4 py-2 bg-gray-100/50 justify-between z-50">
      <Logo />
      <NavBar />
      <City />
    </div>
  );
}
