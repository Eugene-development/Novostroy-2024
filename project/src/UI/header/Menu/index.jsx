import Logo from "./Logo";
import NavBar from "./NavBar";
import Сity from "./Сity";

export default function index() {
  return (
    <div className="flex mx-4 my-3 justify-between">
      <Logo />
      <NavBar />
      <Сity />
    </div>
  );
}
