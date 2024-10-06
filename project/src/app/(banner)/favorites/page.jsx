// React Server Components
import * as motion from "framer-motion/client";

import { Favorites } from "@/UI";

export const metadata = {
  title: "Новострой | Избранное",
  description:
    "На странице отображены позиции, которые вы добавили в раздел Избранное.",
};

export default () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }}>
      <Favorites />
    </motion.main>
  );
};
