// React Server Components
import * as motion from "framer-motion/client";

import { Favorites } from "@/UI";

export const metadata = {
  title: "Избранное",
  description: "Избранные товары",
};

export default () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }}>
      <Favorites />
    </motion.main>
  );
};
