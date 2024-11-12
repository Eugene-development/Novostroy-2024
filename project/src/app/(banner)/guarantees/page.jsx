// React Server Components
import * as motion from "framer-motion/client";

import { Guarantees } from "@/UI";

export const metadata = {
  title: "Новострой | Гарантии",
  description:
    "На странице вы найдёте информацию о гарантиях нашей компании и наших  партнёров.",
};

export default function page() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }}>
      <Guarantees />
    </motion.main>
  );
}
