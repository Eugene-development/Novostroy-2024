import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/UI"
export default function page() {
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
                            <label htmlFor="email" className="sr-only">
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
            <header>
                <nav
                    id="toggleMobileMenu"
                    className="bg-white border-b border-gray-200 dark:bg-gray-700 dark:border-gray-800">
                    <div className="px-4 py-2">
                        <div className="flex items-center">
                            <ul
                                className="flex items-center text-sm text-gray-900 font-medium">
                                <li
                                    className="block lg:inline">
                                    <a
                                        href="#"
                                        className="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white">Консультация</a>
                                </li>
                                <li
                                    className="block lg:inline">
                                    <a
                                        href="#"
                                        className="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white">Замер</a>
                                </li>
                                <li
                                    className="block lg:inline">
                                    <a
                                        href="#"
                                        className="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white">Салон</a>
                                </li>
                                <li
                                    className="md:block lg:inline hidden">
                                    <a
                                        href="#"
                                        className="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white">Договор</a>
                                </li>
                                <li
                                    className="md:block lg:inline hidden">
                                    <a
                                        href="#"
                                        className="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white">Предоплата</a>
                                </li>
                                <li
                                    className="md:block lg:inline hidden">
                                    <a
                                        href="#"
                                        className="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white">Доставка</a>
                                </li>
                                <li
                                    className="md:block lg:inline hidden">
                                    <a
                                        href="#"
                                        className="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white">Сборка</a>
                                </li>
                                <li
                                    className="block md:hidden">
                                    <button
                                        id="navigationDropdownButton"
                                        aria-expanded="false"
                                        data-dropdown-toggle="navigationDropdown"
                                        className="inline-flex items-center justify-center px-2 py-2 rounded-xl hover:text-gray-900 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                        </svg>
                                    </button>

                                    <div
                                        className="hidden z-50 my-4 w-56 text-base list-none bg-white rounded-xl divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                        id="navigationDropdown">
                                        <ul
                                            className="py-1 text-gray-700 dark:text-gray-300"
                                            aria-labelledby="navigationDropdownButton">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Overview
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Sales
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Billing
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Team
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Resources
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Messages
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
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
            </header>

            <Badge />


            <div className="max-w-full mx-auto flex w-full h-full relative  px-4">
                <div>
                    <aside id="sidebar" className="fixed top-0 left-0 z-40 lg:z-0 w-64 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700 lg:block lg:relative lg:h-auto lg:rounded-lg lg:border-r-0" aria-label="Sidebar">

                        <form action="#" method="get" className="md:hidden px-3 pt-3">
                            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full py-3 px-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                                <button type="submit" className="text-white absolute right-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>

                        <div className="overflow-y-auto py-2 px-3 h-full bg-white dark:bg-gray-800 lg:rounded-lg">
                            {/* <a href="#" className="flex justify-between items-center p-2 mb-5 w-full rounded-lg dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-50 dark:hover-bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700" type="button">
                                <span className="sr-only">Open user menu</span>
                                <div className="flex items-center">
                                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" className="mr-3 w-8 h-8 rounded-full" alt="Bonnie avatar" />
                                    <div className="text-left">
                                        <div className="font-semibold leading-none text-gray-900 dark:text-white mb-0.5">Bonnie Green</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">bonnie@flowbite.com</div>
                                    </div>
                                </div>
                            </a> */}

                            <div className="mb-3 ">
                                <ul className="grid grid-cols-3 gap-2">
                                    <li>
                                        <a href="#" className="rounded-xl bg-primary-50 hover:bg-primary-100 dark:bg-primary-900 dark:hover:bg-primary-800 p-2.5 flex flex-col items-center justify-center group">
                                            <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center mb-1 group-hover:bg-primary-200  dark:group-hover:bg-primary-700">
                                                <svg className="w-5 h-5 text-primary-600 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path clipRule="evenodd" fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                                                </svg>
                                            </span>
                                            <span className="text-xs text-primary-600 dark:text-primary-300 font-medium">Дизайнер</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="rounded-xl bg-purple-50 hover:bg-purple-100 dark:bg-purple-900 dark:hover:bg-purple-800 p-2.5 flex flex-col items-center justify-center group">
                                            <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center mb-1 group-hover:bg-purple-200  dark:group-hover:bg-purple-700">
                                                <svg className="w-5 h-5 text-purple-600 dark:text-purple-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path clipRule="evenodd" fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"></path>
                                                    <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                                                </svg>
                                            </span>
                                            <span className="text-xs text-purple-600 dark:text-purple-300 font-medium">Подарок</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="rounded-xl bg-teal-50 hover:bg-teal-100 dark:bg-teal-900 dark:hover:bg-teal-800 p-2.5 flex flex-col items-center justify-center group">
                                            <span className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-800 flex items-center justify-center mb-1 group-hover:bg-teal-200  dark:group-hover:bg-teal-700">
                                                <svg className="w-5 h-5 text-teal-600 dark:text-teal-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path clipRule="evenodd" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                                </svg>
                                            </span>
                                            <span className="text-xs text-teal-600 dark:text-teal-300 font-medium">Замер</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <ul className="space-y-2">
                                {/* <li>
                                    <a href="#" className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clipRule="evenodd" fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"></path>
                                        </svg>
                                        <span className="ml-3">Overview</span>
                                    </a>
                                </li> */}
                                <li>
                                    <button type="button" className="flex items-center py-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-orders" data-collapse-toggle="dropdown-orders">
                                        {/* <svg fill="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
                                            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"></path>
                                        </svg> */}
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap">Кухонные гарнитуры</span>
                                        <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </button>
                                    <ul id="dropdown-orders" className="hidden py-2 space-y-2">
                                        <li>
                                            <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Completed orders</a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Orders in delivery</a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Canceled orders</a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Returns</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" className="flex items-center py-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-payments" data-collapse-toggle="dropdown-payments">
                                        {/* <svg className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                                            <path clipRule="evenodd" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"></path>
                                        </svg> */}
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap">Шкафы распашные</span>
                                        <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </button>
                                    <ul id="dropdown-payments" className="hidden py-2 space-y-2">
                                        <li>
                                            <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoices</a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Payouts</a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing information</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center py-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        {/* <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg> */}
                                        <span className="flex-1 ml-3 whitespace-nowrap">Шкафы купе</span>
                                        <span className="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
                                            5
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center py-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        {/* <svg className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg> */}
                                        <span className="flex-1 ml-3 whitespace-nowrap">Гардеробы</span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
                                <li>
                                    <a href="#" className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clipRule="evenodd" fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"></path>
                                        </svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Спецпредложения</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clipRule="evenodd" fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"></path>
                                        </svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Избранное</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <svg className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                                            <path clipRule="evenodd" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"></path>
                                        </svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Акции</span>
                                    </a>
                                </li>
                                <li>
                                    <Link href="/" className="flex items-center p-2 text-base font-medium text-red-600 rounded-lg dark:text-red-500 hover:bg-red-100 dark:hover:bg-gray-700 group">
                                        <svg className="flex-shrink-0 w-6 h-6 text-red-600 transition duration-75 dark:text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clipRule="evenodd" fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"></path>
                                        </svg>
                                        <span className="flex-1 ml-3 whitespace-nowrap">На главную</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>

                <main className="flex-1 pb-4 h-full overflow-y-auto lg:pl-4">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <Image
                            src="https://storage.yandexcloud.net/mine2024/zov/4DCcVnbk5suIuE8pD7yLzC6CUReEjgNJZkD2c32S.png"
                            height="1000"
                            width="1000"
                            className=" w-full object-contain rounded-xl group-hover/card:shadow-xl "
                            alt="thumbnail"
                        />
                        <Image
                            src="https://storage.yandexcloud.net/mine2024/zov/4DCcVnbk5suIuE8pD7yLzC6CUReEjgNJZkD2c32S.png"
                            height="1000"
                            width="1000"
                            className=" w-full object-contain rounded-xl group-hover/card:shadow-xl "
                            alt="thumbnail"
                        />
                    </div>

                    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
                        <Image
                            src="https://storage.yandexcloud.net/mine2024/zov/4DCcVnbk5suIuE8pD7yLzC6CUReEjgNJZkD2c32S.png"
                            height="1000"
                            width="1000"
                            className=" w-full object-contain rounded-xl group-hover/card:shadow-xl "
                            alt="thumbnail"
                        />
                        <Image
                            src="https://storage.yandexcloud.net/mine2024/zov/4DCcVnbk5suIuE8pD7yLzC6CUReEjgNJZkD2c32S.png"
                            height="1000"
                            width="1000"
                            className=" w-full object-contain rounded-xl group-hover/card:shadow-xl "
                            alt="thumbnail"
                        />
                        <Image
                            src="https://storage.yandexcloud.net/mine2024/zov/4DCcVnbk5suIuE8pD7yLzC6CUReEjgNJZkD2c32S.png"
                            height="1000"
                            width="1000"
                            className=" w-full object-contain rounded-xl group-hover/card:shadow-xl "
                            alt="thumbnail"
                        />
                        <Image
                            src="https://storage.yandexcloud.net/mine2024/zov/4DCcVnbk5suIuE8pD7yLzC6CUReEjgNJZkD2c32S.png"
                            height="1000"
                            width="1000"
                            className=" w-full object-contain rounded-xl group-hover/card:shadow-xl "
                            alt="thumbnail"
                        />

                        {/* <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl h-32 lg:h-64"></div>
                        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl"></div>
                        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl h-32 lg:h-64"></div> */}
                    </div>
                </main>
            </div>
        </div>
    )
}
