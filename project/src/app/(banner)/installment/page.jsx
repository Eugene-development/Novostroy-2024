// React Server Components
import * as motion from "framer-motion/client";

import { Installment } from "@/UI";

export const metadata = {
  title: "Новострой | Рассрочка платежа",
  description: "На странице информация об условиях рассрочки платежа.",
};

export default function page() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }}>
      <Installment />;
    </motion.main>
  );
}
