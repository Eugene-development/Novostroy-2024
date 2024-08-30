export default () => {
  return (
    <>
      <button
        id="infoButton"
        data-modal-target="infoModal"
        data-modal-toggle="infoModal"
        type="button"
        className="inline-flex items-center justify-center rounded-lg p-2 text-sm font-medium leading-none text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <span className="sr-only"> Info </span>
        <svg
          className="me-1 h-4 w-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        Как заказать мебель
      </button>

      {/* <!-- Info modal --> */}
      <div
        id="infoModal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-50 hidden h-modal w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
      >
        <div className="relative h-full w-full max-w-xl p-4 md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
            {/* <!-- Modal header --> */}
            <div className="mb-4 flex items-center justify-between rounded-t border-b border-gray-200 pb-4 dark:border-gray-700 sm:mb-5 sm:pb-5">
              <h3 className="font-semibold leading-none text-gray-900 dark:text-white">
                Sorting types in searches and listings
              </h3>
              <div>
                <button
                  type="button"
                  className="inline-flex rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="infoModal"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
            </div>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              You can use these options to sort the results:
            </p>
            <ul className="list-disc space-y-3 ps-8 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <span className="font-medium text-gray-900 dark:text-white">
                  Most Popular:
                </span>{" "}
                This is a prediction of how often each result will be purchased
                or viewed based on previous product interactions.
              </li>
              <li>
                <span className="font-medium text-gray-900 dark:text-white">
                  Ascending Price:
                </span>{" "}
                Sort products by price. The item with the lowest price is at the
                top and the item with the lowest price is at the bottom.
              </li>
              <li>
                <span className="font-medium text-gray-900 dark:text-white">
                  Descending Price:
                </span>{" "}
                Sort products by price. The item with the highest price is at
                the top and the item with the lowest price is at the bottom.
              </li>
              <li>
                <span className="font-medium text-gray-900 dark:text-white">
                  No. Reviews:
                </span>{" "}
                This includes the total number of reviews for each result, the
                products with the highest number of reviews are displayed first.
              </li>
              <li>
                <span className="font-medium text-gray-900 dark:text-white">
                  Discount%:
                </span>{" "}
                Sorts the list of products based on the discount percentage. The
                product with the highest percentage discount is at the top, and
                the product with the lowest percentage discount is at the
                bottom.
              </li>
              <li>
                <span className="font-medium text-gray-900 dark:text-white">
                  Newest:
                </span>{" "}
                The newest products based on the day they were first available
                on Flowbite Shop.
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-4 border-t border-gray-200 pt-4 dark:border-gray-700 sm:mt-5 sm:pt-5">
              <button
                data-modal-toggle="infoModal"
                type="button"
                className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                I understand
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
