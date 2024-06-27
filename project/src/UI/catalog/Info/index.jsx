import React from 'react'

export default () => {
    return (
        <nav
            id="toggleMobileMenu"
            className="bg-white border-b border-gray-200 dark:bg-gray-700 dark:border-gray-800"
        >
            <div className="px-4 py-2">
                <div className="flex items-center">
                    <ul className="flex items-center text-sm text-gray-900 font-normal">
                        <li className="block lg:inline">
                            <a
                                href="#"
                                className="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white"
                            >
                                Консультация
                            </a>
                        </li>
                        <li className="block lg:inline">
                            <a
                                href="#"
                                className="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white"
                            >
                                Замер
                            </a>
                        </li>
                        <li className="block lg:inline">
                            <a
                                href="#"
                                className="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white"
                            >
                                Салон
                            </a>
                        </li>
                        <li className="md:block lg:inline hidden">
                            <a
                                href="#"
                                className="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white"
                            >
                                Договор
                            </a>
                        </li>
                        <li className="md:block lg:inline hidden">
                            <a
                                href="#"
                                className="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white"
                            >
                                Предоплата
                            </a>
                        </li>
                        <li className="md:block lg:inline hidden">
                            <a
                                href="#"
                                className="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white"
                            >
                                Доставка
                            </a>
                        </li>
                        <li className="md:block lg:inline hidden">
                            <a
                                href="#"
                                className="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white"
                            >
                                Сборка
                            </a>
                        </li>
                        <li className="block md:hidden">
                            <button
                                id="navigationDropdownButton"
                                aria-expanded="false"
                                data-dropdown-toggle="navigationDropdown"
                                className="inline-flex items-center justify-center px-2 py-2 rounded-xl hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </button>

                            <div
                                className="hidden z-50 my-4 w-56 text-base list-none bg-white rounded-xl divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                id="navigationDropdown"
                            >
                                <ul
                                    className="py-1 text-gray-700 dark:text-gray-300"
                                    aria-labelledby="navigationDropdownButton"
                                >
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Overview
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Sales
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Billing
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Team
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Resources
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Messages
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            Support
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
