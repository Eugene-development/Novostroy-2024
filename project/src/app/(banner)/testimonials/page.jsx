// React Server Components
import * as motion from "framer-motion/client";

import { Testimonials } from "@/UI";

export const metadata = {
  title: "Новострой | Отзывы",
  description: "На странице отзывы о нас и нашей работе.",
};

export default function page() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }}>
      <Testimonials />
    </motion.main>
  );
}
