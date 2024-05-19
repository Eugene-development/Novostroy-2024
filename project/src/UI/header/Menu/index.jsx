import Logo from "./Logo";
import NavBar from "./NavBar";
import City from "./City";

export default function Header() {
  return (
    <div className="flex mx-4 my-3 justify-between">
      <Logo />
      <NavBar />
      <City />
    </div>
  );
}
