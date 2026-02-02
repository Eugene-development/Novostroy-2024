export default () => {
  return (
    <div
      className="flex justify-between items-center p-2 my-2 w-full rounded-lg bg-gray-50/50 focus:ring-4 focus:ring-gray-200 "
      type="button"
    >
      <span className="sr-only">Информация о дизайнере</span>
      <div className="flex items-center">
        <img
          src="https://storage.yandexcloud.net/mine2024/novostroy/site/diz.png"
          className="mr-3 w-8 h-8 rounded-full"
          alt="Bonnie avatar"
        />
        <div className="text-left tracking-wide">
          <div className="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">
            Ваш дизайнер
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Евгений
          </div>
        </div>
      </div>
    </div>
  );
};
