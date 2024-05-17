import Logo from "./Logo";
import NavBar from "./NavBar";

export default function index() {
  return (
    <div className="flex m-4 justify-between">
      <Logo />
      <NavBar />
      <span className="inline-flex items-center gap-x-1.5 rounded-xl bg-gray-50 px-8 py-1 my-1 text-base font-medium text-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 text-red-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
        Москва
      </span>
    </div>
  );
}
