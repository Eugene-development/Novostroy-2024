"use client";
import { Button } from "@headlessui/react";
import { useMobileMenuStore } from "@/stores/MobileMenu";

export default ({ value }) => {
  const { openVisibleMobileCatalog } =
    useMobileMenuStore.visibleMobileCatalog();

  const { closeVisibleMobileMenu } = useMobileMenuStore.visibleMobileMenu();

  const handleClick = () => {
    closeVisibleMobileMenu();
    openVisibleMobileCatalog();
  };
  return (
    <Button
      onClick={openVisibleMobileCatalog}
      className="md:hidden flex justify-center w-full items-center gap-2 rounded-md bg-gradient-to-r from-sky-600 via-blue-800 to-sky-600 hover:from-blue-600 hover:to-sky-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
    >
      {value}
    </Button>
  );
};
