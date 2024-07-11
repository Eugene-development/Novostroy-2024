"use client";
import React from "react";
import { Button } from "./components";

export default function MovingBorderDemo() {
  return (
    <div >
      <Button
        borderRadius="1.75rem"
        className="px-2 bg-gray-50/80 dark:bg-slate-900 text-gray-800 dark:text-white text-sm border-gray-200 dark:border-slate-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5 text-gray-600 mr-2"
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
        г. Москва и МО
      </Button>
    </div >
  );
}
