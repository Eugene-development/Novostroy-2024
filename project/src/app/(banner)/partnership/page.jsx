// React Server Components
import * as motion from "framer-motion/client";

import { Partnership } from "@/UI";

export const metadata = {
  title: "Новострой | Партнёрство",
  description: "На этой странице условия партнёрских отношений.",
};

export default function page() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }}>
      <Partnership />
    </motion.main>
  );
}
