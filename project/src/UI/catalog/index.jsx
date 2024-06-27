import Info from "./Info"
import Badge from "./Badge"
import Designer from "./designer";
import Call2Action from "./Call2Action";
import Bar from "./Bar";
import Product from "./Product";
export default () => {
    return (
        <div className=" dark:bg-gray-900 antialised">
            {/* <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">Update your email</h3>
                    <div className="mt-2 max-w-xl text-sm text-gray-500">
                        <p>Change the email address you want associated with your account.</p>
                    </div>
                    <form className="mt-5 sm:flex sm:items-center">
                        <div className="w-full sm:max-w-xs">
                            <label htmlhtmlFor="email" className="sr-only">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="you@example.com"
                            />
                        </div>
                        <button
                            type="submit"
                            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div> */}

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
