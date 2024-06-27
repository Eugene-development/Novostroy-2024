import Info from "./Info"
import Badge from "./Badge"
import Designer from "./designer";
import Call2Action from "./Call2Action";
import Bar from "./Bar";
import Product from "./Product";
export default () => {
    return (
        <div className=" dark:bg-gray-900 antialised">

            <Info />

            <Badge />

            <div className="max-w-full mx-auto flex w-full h-full relative  px-4">
                <div>
                    <aside
                        id="sidebar"
                        className="fixed top-0 left-0 z-40 lg:z-0 w-64 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700 lg:block lg:relative lg:h-auto lg:rounded-lg lg:border-r-0"
                        aria-label="Sidebar"
                    >
                        <form action="#" method="get" className="md:hidden px-3 pt-3">
                            <label
                                htmlFor="default-search"
                                className="mb-2 text-sm font-normal text-gray-900 sr-only dark:text-white"
                            >
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full py-3 px-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search..."
                                    required
                                />
                                <button
                                    type="submit"
                                    className="text-white absolute right-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Search
                                </button>
                            </div>
                        </form>

                        <div className="overflow-y-auto py-2 px-3 h-full bg-white dark:bg-gray-800 lg:rounded-lg">

                            <Designer />

                            <Call2Action />

                            <Bar />
                        </div>
                    </aside>
                </div>

                <Product />
            </div>
        </div>
    );
}
