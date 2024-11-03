"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  MenuItemCatalog,
  ProductItem,
} from "./components";
import { cn } from "@/utils/cn";

// export function NavbarDemo() {
//     return (
//         <div className="relative w-full flex items-center justify-center">
//             <Navbar className="top-2" />
//             <p className="text-black dark:text-white">
//                 The Navbar will show on top of the page
//             </p>
//         </div>
//     );
// }

export default function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div className={cn("ml-8 max-w-3xl z-40", className)}>
      <Menu setActive={setActive}>
        <Link
          href="/"
          onClick={() => setActive(null)}
          className="hover:text-sky-900  cursor-pointer text-gray-800 text-lg font-medium tracking-wide hover:opacity-[0.9] dark:text-white"
        >
          Главная
        </Link>

        <MenuItem setActive={setActive} active={active} item="Услуги">
          <div className=" flex flex-col mx-auto space-y-4 text-sm">
            <HoveredLink href="/service/consultation">Консультация</HoveredLink>
            <HoveredLink href="/service/measuring">
              {" "}
              Замер помещения
            </HoveredLink>
            <HoveredLink href="/service/design">Проект мебели</HoveredLink>
          </div>
        </MenuItem>
        <MenuItemCatalog setActive={setActive} active={active} item="Каталог">
          <div className="text-sm grid grid-cols-2 gap-10 p-10 bg-gray-50 rounded-xl">
            <ProductItem
              setActive={setActive}
              title="Мебель"
              href="/mebel"
              src="https://zovofficial.com/image/cache/catalog/products/kuhni/2022/veskona-22/1-1087x890.jpg"
              description="Качественная и стильная мебель под любой запрос и бюджет"
            />
            <ProductItem
              setActive={setActive}
              title="Техника"
              href="/tehnika"
              src="https://storage.yandexcloud.net/mine2024/novostroy/site/duhshkaf.jpg"
              description="Встраиваемая, отдельностоящая и мелкобытовая техника"
            />
            <ProductItem
              setActive={setActive}
              title="Столешницы"
              href="/stoleshnica"
              src="https://storage.yandexcloud.net/mine2024/novostroy/site/slab.jpg"
              description="Рабочая зона из высокопрочных материалов с различными декорами"
            />
            <ProductItem
              setActive={setActive}
              title="Сантехника"
              href="/santehnika"
              src="https://storage.yandexcloud.net/mine2024/novostroy/site/moyka.jpg"
              description="Стальные и композитные мойки, а также сопутствующие товары"
            />
            {/* <ProductItem
              setActive={setActive}
              title="Освещение"
              href="/osveshenie"
              src="https://storage.yandexcloud.net/mine2024/novostroy/site/svet.jpeg"
              description="Яркий акцент в композицию проекта благодаря качественному свету"
            />
            <ProductItem
              setActive={setActive}
              title="Фурнитура"
              href="/furnitura"
              src="https://storage.yandexcloud.net/mine2024/novostroy/site/furnitura.jpg"
              description="Фурнитура это важнейший элемент любой мебельной конструкции"
            /> */}
          </div>
        </MenuItemCatalog>
        {/* <MenuItem setActive={setActive} active={active} item="Акции">
          <div className="flex flex-col mx-2 space-y-4 text-sm">
            <HoveredLink href="/action">Скидки</HoveredLink>
            <HoveredLink href="/action">Подарки</HoveredLink>
          </div>
        </MenuItem> */}
        <Link
          href="/action"
          onClick={() => setActive(null)}
          className="hover:text-sky-900  cursor-pointer text-gray-800 text-lg font-medium tracking-wide hover:opacity-[0.9] dark:text-white"
        >
          Акции
        </Link>
        <Link
          href="/blog"
          onClick={() => setActive(null)}
          className="hover:text-sky-900  cursor-pointer text-gray-800 text-lg font-medium tracking-wide hover:opacity-[0.9] dark:text-white"
        >
          Блог
        </Link>
      </Menu>
    </div>
  );
}
