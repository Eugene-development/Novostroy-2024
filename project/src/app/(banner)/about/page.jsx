// React Server Components
import * as motion from "framer-motion/client";

import { Sparkles, CompanyText } from "@/UI";

export const metadata = {
  title: "Новострой | Информация о компании",
  description:
    "На странице вы найдёте общую информацию о нашей компании Новострой.",
};

export default function page() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }}>
      <CompanyText />
      <Sparkles />
    </motion.main>
  );
}
