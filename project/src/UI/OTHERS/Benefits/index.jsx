import React from 'react'

export default function index() {
    return (

        <>

            <div class="mt-12">
                <div
                    class="bg-gradient-to-br from-black via-sky-800 to-pink-700 pt-12 sm:pt-16 rounded-lg"
                >
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="max-w-5xl mx-auto text-center ">
                            <h2 class="text-4xl font-extrabold text-gray-50 sm:text-5xl">
                                Мы предлагаем качественный ремонт квартир в Москве
                            </h2>
                            <p class="mt-3 text-xl text-cyan-50 sm:mt-4">
                                В нашей компании работают только специалисты в своём деле и мы
                                уверены в их работе

                            </p>
                        </div>
                    </div>
                    <div class="mt-10 pb-12 sm:pb-16">
                        <div class="relative">
                            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div class="max-w-4xl mx-auto">
                                    <dl
                                        class="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3"
                                    >
                                        <div
                                            class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r"
                                        >
                                            <dt
                                                class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                                            >
                                                гарантии
                                            </dt>
                                            <dd class="order-1 text-5xl font-extrabold text-cyan-600">
                                                100%
                                            </dd>
                                        </div>
                                        <div
                                            class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r"
                                        >
                                            <dt
                                                class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                                            >
                                                поддержка
                                            </dt>
                                            <dd class="order-1 text-5xl font-extrabold text-cyan-600">
                                                24/7
                                            </dd>
                                        </div>
                                        <div
                                            class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l"
                                        >
                                            <dt
                                                class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500"
                                            >
                                                объекта
                                            </dt>
                                            <dd class="order-1 text-5xl font-extrabold text-cyan-600">
                                                483
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <dl
        class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8"
      >
        {#each Benefits as {title, text}}
        <div class="relative">
          <dt>
            <!-- Heroicon name: outline/check -->
            <svg
              class="absolute h-6 w-6 text-cyan-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p class="ml-9 text-lg leading-6 font-medium text-cyan-900">
              {title}
            </p>
          </dt>
          <dd class="mt-2 ml-9 text-base text-gray-500">{text}</dd>
        </div>
        {/each}
    </dl> */}

        </>


    )
}
