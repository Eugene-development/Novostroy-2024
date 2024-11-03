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
  name: "Консультация дизайнера",
  features: [
    {
      name: "Выезд на адрес",
      description:
        "Наш специалист приедет на ваш адрес, чтобы провести консультацию прямо на месте и ответить на все вопросы.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "По телефону",
      description:
        "Позвоните нам для быстрой консультации. Обсудим ваши вопросы, предоставим полезные рекомендации и идеи.",
      icon: LockClosedIcon,
    },
    {
      name: "Через мессенджер",
      description:
        "Свяжитесь через мессенджер для получения консультации. Оперативно подскажем варианты решений.",
      icon: ArrowPathIcon,
    },
    {
      name: "В салоне",
      description:
        "Приезжайте в наш салон для консультации с дизайнером. Мы обсудим детали и покажем возможные материалы.",
      icon: FingerPrintIcon,
    },
  ],
};

const description =
  "Обеспечиваем квалифицированную дизайнерскую помощь, будь то выезд на ваш объект, консультация по телефону, в мессенджере или в нашем салоне.";

export const metadata = {
  title: "Новострой | Услуга консультации",
  description:
    "Получите профессиональную консультацию дизайнера интерьера: выезд на объект, консультации по телефону, в мессенджере или в нашем салоне. Подберём лучшие решения для вашего интерьера.",
};

export default () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }}>
      <Service data={data} description={description} />;
      <CallToActionDesigner />
    </motion.main>
  );
};
