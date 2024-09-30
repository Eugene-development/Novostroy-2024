export default ({ tags }) => {
  return (
    <div className="pt-8 mt-6 space-y-6 border-t border-gray-200 dark:border-gray-700">
      <div>
        <p className="text-base font-medium text-gray-900 dark:text-white">
          Тэги
        </p>

        <div className="flex flex-wrap items-center gap-2 mt-2">
          {tags.map((item) => (
            <label
              key={item.value}
              htmlFor={item.value}
              className="relative block"
            >
              <input
                type="radio"
                name="capacity2"
                id={item.value}
                className="absolute appearance-none top-2 left-2 peer"
              />
              <div className="relative flex items-center justify-center gap-4 px-2 py-1 overflow-hidden text-gray-500 hover:bg-gray-100 border border-gray-300 rounded-lg cursor-pointer bg-white peer-checked:bg-sky-50 peer-checked:text-sky-700 peer-checked:border-sky-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 dark:peer-checked:bg-sky-900 dark:peer-checked:border-sky-600 dark:peer-checked:text-sky-300 dark:hover:bg-gray-600">
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
