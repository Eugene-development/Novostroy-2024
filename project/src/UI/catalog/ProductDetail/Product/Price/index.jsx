export default () => {
  return (
    <div className="gap-4 mt-4 md:mt-6 flex items-center justify-between">
      {/* <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
        $1,249.99
      </p> */}

      <form className="flex items-center gap-2 mt-0">
        <div className="flex items-center gap-1">
          <label
            htmlFor="quantity"
            className="text-sm font-medium text-gray-900 dark:text-white"
          >
            Ссылка на поставщика
          </label>
          <button
            data-tooltip-target="quantity-desc-3"
            data-tooltip-trigger="hover"
            className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div
            id="quantity-desc-3"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            Quantity: Number of units to purchase.
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
        {/* <select
          id="quantity"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-16 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
        >
          <option selected>0</option>
          <option value="1" selected>
            1
          </option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select> */}
      </form>
    </div>
  );
};
