export default () => {
  return (
    <div
      id="accordion-flush"
      data-accordion="collapse"
      data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      data-inactive-classes="text-gray-500 dark:text-gray-400"
    >
      <h2 id="accordion-flush-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
          data-accordion-target="#accordion-flush-body-1"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"
        >
          <span>Product Details</span>
          <svg
            data-accordion-icon
            className="w-5 h-5 rotate-180 shrink-0"
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
              d="m19 9-7 7-7-7"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-1"
        className="hidden"
        aria-labelledby="accordion-flush-heading-1"
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The product is a high-quality, durable solution designed to meet the
            needs of modern consumers. It features advanced technology and
            ergonomic design for optimal performance and comfort.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Key features include a sleek interface, customizable settings, and
            compatibility with various devices. It is ideal for professionals
            and enthusiasts alike.
          </p>
        </div>
      </div>
      <h2 id="accordion-flush-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
          data-accordion-target="#accordion-flush-body-2"
          aria-expanded="false"
          aria-controls="accordion-flush-body-2"
        >
          <span>Specifications</span>
          <svg
            data-accordion-icon
            className="w-5 h-5 rotate-180 shrink-0"
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
              d="m19 9-7 7-7-7"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-2"
        className="hidden"
        aria-labelledby="accordion-flush-heading-2"
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Specifications include advanced processor capabilities, extensive
            storage options, and seamless connectivity. The product is designed
            to handle demanding tasks efficiently.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Additional features include high-resolution display, long-lasting
            battery life, and intuitive user interface for enhanced
            productivity.
          </p>
        </div>
      </div>
      <h2 id="accordion-flush-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
          data-accordion-target="#accordion-flush-body-3"
          aria-expanded="false"
          aria-controls="accordion-flush-body-3"
        >
          <span>Warranty</span>
          <svg
            data-accordion-icon
            className="w-5 h-5 rotate-180 shrink-0"
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
              d="m19 9-7 7-7-7"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-3"
        className="hidden"
        aria-labelledby="accordion-flush-heading-3"
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The product comes with a comprehensive warranty that covers
            manufacturing defects and malfunctions. It provides peace of mind
            and assurance of product quality.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Customers can enjoy reliable support and prompt assistance for any
            issues related to the product during the warranty period.
          </p>
        </div>
      </div>
    </div>
  );
};
