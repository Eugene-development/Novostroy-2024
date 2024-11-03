// React Server Components
import * as motion from "framer-motion/client";

import { Service, CallToActionDesigner } from "@/UI";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const data = {
  name: "Дизайн-проект",
  features: [
    {
      name: "Продумаем эргономику",
      description:
        "Детально проработаем эргономику пространства, чтобы каждый элемент был удобен и функционален в использовании.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "Подберём материалы",
      description:
        "Мы тщательно подберём качественные материалы, учитывая стиль интерьера, бюджет и долговечность каждого элемента.",
      icon: LockClosedIcon,
    },
    {
      name: "Выберем цвета",
      description:
        "Поможем вам выбрать цветовую гамму, которая создаст нужное настроение и будет гармонировать с интерьером.",
      icon: ArrowPathIcon,
    },
    {
      name: "Составим дизайн",
      description:
        "Разработаем уникальный дизайн-проект, учитывая ваши пожелания, стиль, функции и современные тренды в интерьере.",
      icon: FingerPrintIcon,
    },
  ],
};

const description =
  "Создаем дизайн-проект, продумывая эргономику, подбор материалов и цветовой палитры, чтобы сделать ваш интерьер функциональным и стильным.";

export const metadata = {
  title: "Новострой | Услуга составления дизайна",
  description:
    "Разрабатываем дизайн-проекты интерьеров с учётом эргономики, подбора материалов и цветовой палитры. Индивидуальный подход для создания стильного и функционального пространства.",
};

export default () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }}>
      <Service data={data} description={description} />;
      <CallToActionDesigner />
    </motion.main>
  );
};
