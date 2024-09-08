'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'

export default () => {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-4xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 h-[42rem]"
          >
            
          
            
          
          
          <div id="readProductModal" tabindex="-1" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed  z-50 justify-center items-center w-full md:inset-0 ">
              <div className="relative p-4 w-full max-w-6xl h-full md:h-auto">
                  <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                          <div className="flex justify-between mb-4 rounded-t sm:mb-5">
                              <div className="text-lg text-gray-900 md:text-xl dark:text-white">
                                  <h3 className="font-semibold ">
                                      Как заказать мебель
                                  </h3>
                                  
                              </div>
                              <div>
                                  <button onClick={() => setOpen(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="readProductModal">
                                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                      <span className="sr-only">Close modal</span>
                                  </button>
                              </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 mb-4 sm:grid-cols-4 sm:mb-5">
                              <div className="p-2 bg-gray-100 rounded-lg md:w-36 md:h-36 dark:bg-gray-700">
                          <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png" alt="iMac Side Image"/>
                              </div>
                              <div className="p-2 bg-gray-100 rounded-lg md:w-36 md:h-36 dark:bg-gray-700">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png" alt="iMac Front Image"/>
                              </div>
                              <div className="p-2 bg-gray-100 rounded-lg md:w-36 md:h-36 dark:bg-gray-700">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image"/>
                              </div>
                              <div className="p-2 bg-gray-100 rounded-lg md:w-36 md:h-36 dark:bg-gray-700">
                              <img src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png" alt="iMac Back Image"/>
                              </div>
                          </div>
                          <dl className="sm:mb-10">
                              <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Details</dt>
                              <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.</dd>
                              
                          </dl>
                          <dl className="grid grid-cols-2 gap-4 mb-4 sm:grid-cols-3 sm:mb-5">
                              <div className="p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                  <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Sold by</dt>
                                  <dd className="text-gray-500 dark:text-gray-400">Flowbite</dd>
                              </div>
                              <div className="p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                  <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Ships from</dt>
                                  <dd className="text-gray-500 dark:text-gray-400">Flowbite</dd>
                              </div>
                              <div className="p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                  <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Product State</dt>
                                  <dd className="text-gray-500 dark:text-gray-400">
                                      <span className="bg-sky-100 text-sky-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-sky-200 dark:text-sky-800">
                                          <svg aria-hidden="true" className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                          New
                                      </span>
                                  </dd>
                              </div>
                              <div className="p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                  <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Shipping</dt>
                                  <dd className="flex items-center text-gray-500 dark:text-gray-400">
                                      <svg className="w-4 h-4 mr-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                                      Worldwide
                                  </dd>
                              </div>
                              <div className="p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                  <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Dimensions (cm)</dt>
                                  <dd className="text-gray-500 dark:text-gray-400">105 x 15 x 23</dd>
                              </div>
                              <div className="p-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                                  <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Item weight</dt>
                                  <dd className="text-gray-500 dark:text-gray-400">12kg</dd>
                              </div>
                          </dl>
                          <div className="flex pt-4 justify-between items-center">
                              <div className="flex items-center space-x-3 sm:space-x-4">
                                  <button type="button" className="text-white inline-flex items-center bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                                      <svg aria-hidden="true" className="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                                      Консультация
                                  </button>               
                                  <button type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-sky-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                      Замер помещения
                                  </button>
                              </div>              
                              <button onClick={() => setOpen(false)} type="button" className="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                                  
                                  Закрыть
                              </button>
                          </div>
                  </div>
              </div>
          </div>
            
            
            
            
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
              >
                Deactivate?????
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
              >
                Закрыть????
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
