export default () => {
  return (
    <a
      href="#"
      className="flex justify-between items-center p-2 mb-5 w-full rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-50 dark:hover-bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
      type="button"
    >
      <span className="sr-only">Open user menu</span>
      <div className="flex items-center">
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
          className="mr-3 w-8 h-8 rounded-full"
          alt="Bonnie avatar"
        />
        <div className="text-left">
          <div className="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">
            Ваш дизайнер
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Юрий Сергеенков
          </div>
        </div>
      </div>
    </a>
  );
};
