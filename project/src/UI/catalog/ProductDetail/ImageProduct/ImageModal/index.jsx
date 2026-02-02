"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function ImageModal({ isOpen, setIsOpen, imageSrc }) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-40"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all 
                       w-full max-w-xl sm:p-6 sm:max-w-[65vw] lg:max-w-[55vw] xl:max-w-[45vw]"
          >
            <div>
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt="Selected image"
                  width={1920} // увеличиваем разрешение
                  height={1440} // увеличиваем разрешение
                  className="object-contain object-center rounded-lg"
                />
              )}
              {/* <div className="mt-3 text-center sm:mt-5">
                <DialogTitle as="h3" className="text-lg font-semibold leading-6 text-gray-900">
                  Image Preview
                </DialogTitle>
              </div> */}
            </div>
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-gradient-to-r from-gray-50 to-gray-50 hover:from-gray-100 hover:to-gray-100 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Закрыть
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
