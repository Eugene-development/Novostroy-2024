// React Server Components
import * as motion from "framer-motion/client";

import { Service, CallToActionMeasuring } from "@/UI";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const data = {
  name: "Замер помещения",
  features: [
    {
      name: "Обмер габаритов",
      description:
        "Тщательно измерим все габариты помещения, чтобы учесть точные размеры для дальнейшей разработки проекта.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "Обозначим вывод розеток",
      description:
        "Определим оптимальные места для установки розеток, учитывая удобство использования и расположение техники.",
      icon: LockClosedIcon,
    },
    {
      name: "Просчитаем углы",
      description:
        "Проведём точные замеры всех углов, чтобы учесть геометрию помещения и избежать возможных ошибок в проекте.",
      icon: ArrowPathIcon,
    },
    {
      name: "Определим влажную точку",
      description:
        "Укажем расположение влажных зон, таких как санузел или кухня, чтобы грамотно спланировать коммуникации.",
      icon: FingerPrintIcon,
    },
  ],
};

const description =
  "Тщательно проводим замеры помещения, включая габариты, углы, розетки и влажные зоны, чтобы обеспечить точность и удобство дальнейшего проекта.";

export const metadata = {
  title: "Новострой | Услуга замера",
  description:
    "Профессиональные замеры помещений для точных проектов: измерение габаритов, углов, определение расположения розеток и влажных зон. Гарантия точности и удобства дальнейших работ.",
};

export default () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }}>
      <Service data={data} description={description} />;
      <CallToActionMeasuring />
    </motion.main>
  );
};
