// React Server Components
import * as motion from "framer-motion/client";

import { Action } from "@/UI";

export const metadata = {
  title: "Новострой | Акции",
  description: "Акции и специальные предложения нашей компании и наших партнёров",
};

export default () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }}>
      <Action />;
    </motion.main>
  );
};
