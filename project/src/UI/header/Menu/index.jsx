import Logo from "./Logo";
import NavBar from "./NavBar";
import Sity from "./Sity";

export default function index() {
  return (
    <div className="flex mx-4 my-3 justify-between">
      <Logo />
      <NavBar />
      <Sity />
    </div>
  );
}
