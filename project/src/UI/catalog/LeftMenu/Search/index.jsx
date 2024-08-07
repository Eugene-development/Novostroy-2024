export default () => {
  return (
    <form action="#" method="get" className="px-3 pt-3">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-normal text-gray-900 sr-only dark:text-white"
      >
        Найти
      </label>
      <div className="relative ">
        {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div> */}
        <input
          type="search"
          id="default-search"
          className="block  w-full py-3 px-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
          placeholder="Поиск..."
          required
        />
        <button
          type="submit"
          className="text-white  absolute right-2.5 bottom-2 bg-gray-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-normal rounded-lg text-sm px-2 py-1.5 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
        >
        <svg
          aria-hidden="true"
          className="size-5 text-gray-100" 
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        </button>
      </div>
    </form>
  );
};
