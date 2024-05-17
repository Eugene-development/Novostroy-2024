import Logo from "./Logo";
import NavBar from "./NavBar";
import Sity from "./Sity";

export default function index() {
  return (
    <div className="flex m-4 justify-between">
      <Logo />
      <NavBar />
      <Sity />
    </div>
  );
}
