// React Server Components
import * as motion from "framer-motion/client";

import { Service, CallToActionConsultation } from "@/UI";
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
        "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "По телефону",
      description:
        "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
      icon: LockClosedIcon,
    },
    {
      name: "Через мессенджер",
      description:
        "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
      icon: ArrowPathIcon,
    },
    {
      name: "В салоне",
      description:
        "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
      icon: FingerPrintIcon,
    },
  ],
};

export default () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }}>
      <Service data={data} />;
      <CallToActionConsultation />
    </motion.main>
  );
};
