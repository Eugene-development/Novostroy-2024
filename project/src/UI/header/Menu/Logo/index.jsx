"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function index() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <Link href="/">
      <span className="sr-only">Novostroy</span>
      <img
        className={`h-14 px-3 sm:px-0 w-auto sm:h-14 transition ease-in-out delay-100 hover:scale-110 duration-500 ${isHomePage ? "grayscale" : ""}`}
        src="https://storage.yandexcloud.net/brand-logo/novostroy/logomain.png"
        alt="logo"
      />
    </Link>
  );
}
