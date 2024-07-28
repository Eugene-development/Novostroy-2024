"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, MenuItemCatalog, ProductItem } from "./components";
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
    <div className={cn("inset-x-0 max-w-3xl z-50", className)}>
      <Menu setActive={setActive}>
        <Link
          href="/"
          className="hover:text-sky-900 mx-2 cursor-pointer text-gray-800 text-lg font-medium tracking-wide hover:opacity-[0.9] dark:text-white"
        >
          Главная
        </Link>

        <MenuItem setActive={setActive} active={active} item="Услуги">
          <div className=" flex flex-col mx-2 space-y-4 text-sm">
            <HoveredLink href="/service">Консультация на адресе</HoveredLink>
            <HoveredLink href="/service"> Замер помещения</HoveredLink>
            <HoveredLink href="/service">Дизайн-проект мебели</HoveredLink>
          </div>
        </MenuItem>
        <MenuItemCatalog setActive={setActive} active={active} item="Каталог">
          <div className="text-sm grid grid-cols-2 gap-10 p-8 bg-gray-50 rounded-xl">
            <ProductItem
              setActive={setActive}
              title="Мебель"
              href="/catalog/mebel"
              src="https://storage.yandexcloud.net/mine2024/novostroy/site/mebel.jpg"
              description="Качественная и стильная мебель под любой ваш запрос и бюджет"
            />
            <ProductItem
              setActive={setActive}
              title="Бытовая Техника"
              href="/catalog/tehnika"
              src="https://storage.yandexcloud.net/mine2024/novostroy/site/duhshkaf.jpg"
              description="Оптимально подобранная техника идеально впишется в проект мебели"
            />
            <ProductItem
              setActive={setActive}
              title="Столешницы"
              href="/catalog/stoleshnica"
              src="https://storage.yandexcloud.net/mine2024/novostroy/site/slab.jpg"
              description="Рабочая зона из восокопрочных материалов и с красивыми рисунками"
            />
            <ProductItem
              setActive={setActive}
              title="Мойки и смесители"
              href="/catalog/moyki"
              src="https://storage.yandexcloud.net/mine2024/novostroy/site/moyka.jpg"
              description="Стальные и композитные мойки и смесители от мировых производителей"
            />
            <ProductItem
              setActive={setActive}
              title="Освещение"
              href="/catalog/moyki"
              src="https://storage.yandexcloud.net/mine2024/novostroy/site/svet.jpeg"
              description="Яркий акцент в композицию проекта благодаря качественному свету"
            />
            <ProductItem
              setActive={setActive}
              title="Фурнитура"
              href="/catalog/moyki"
              src="https://storage.yandexcloud.net/mine2024/novostroy/site/furnitura.jpg"
              description="Фурнитура это важнейший элемент любой мебельной конструкции"
            />
          </div>
        </MenuItemCatalog>
        <MenuItem setActive={setActive} active={active} item="Акции">
          <div className="flex flex-col mx-2 space-y-4 text-sm">
            <HoveredLink href="/hobby">Скидки</HoveredLink>
            <HoveredLink href="/individual">Подарки</HoveredLink>
          </div>
        </MenuItem>
        <Link
          href="/blog"
          className="hover:text-sky-900 mx-2 cursor-pointer text-gray-800 text-lg font-medium tracking-wide hover:opacity-[0.9] dark:text-white"
        >
          Блог
        </Link>
      </Menu>
    </div>
  );
}
