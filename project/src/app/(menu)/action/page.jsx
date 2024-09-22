// React Server Components
import * as motion from "framer-motion/client";

import { Action } from "@/UI";

export default () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }}>
      <Action />;
    </motion.main>
  );
};
