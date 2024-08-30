import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default ({ data }) => {
  return (
    <div className="">
      <div className="inline-flex space-x-6 whitespace-pre">
        <span className="rounded-full bg-gray-400/10 -mr-2 px-4 py-1 text-sm font-semibold leading-6 text-gray-600 ring-1 ring-inset ring-sky-400/10">
          Категория каталога
        </span>

        <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
          <ChevronRightIcon
            aria-hidden="true"
            className="h-5 w-5 text-gray-400"
          />
          {data.parentable && (
            <>
              <span>{data.parentable.value}</span>
              <ChevronRightIcon
                aria-hidden="true"
                className="h-5 w-5 text-gray-400"
              />
            </>
          )}

          <span>{data.value}</span>
        </span>
      </div>
    </div>
  );
};
