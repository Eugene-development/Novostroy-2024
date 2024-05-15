import Logo from "./Logo";
import NavBar from "./NavBar";

export default function index() {
  return (
    <div className="flex m-4 justify-between">
      <Logo />
      <NavBar />
      <p>{''}</p>
    </div>
  );
}
