import Image from "next/image";

export default () => {
    return (
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

    )
}
