"use client";

import { useRouter } from "next/navigation";

export default () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className="flex text-sm font-medium text-gray-900 bg-gray-50 hover:bg-gray-200 px-4 py-1 ring-2 ring-gray-200 rounded-lg"
    >
      {" "}
      <span className="mr-2">Вернуться </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
        />
      </svg>
    </button>
  );
};
