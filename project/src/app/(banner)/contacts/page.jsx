// React Server Components
import * as motion from "framer-motion/client";

import { Contacts } from "@/UI";

export const metadata = {
  title: "Новострой | Контакты",
  description: "На странице вы найдёте информацию как связаться с нами.",
};

export default function page() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }}>
      <Contacts />
    </motion.main>
  );
}
