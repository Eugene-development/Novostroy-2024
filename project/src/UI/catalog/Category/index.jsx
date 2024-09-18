// React Server Components
import * as motion from "framer-motion/client";

import { BreadCrumbs, Card } from "@/UI";

export default ({ dataCategory }) => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 2 }}>
      <section className="bg-gray-50 py-2 antialiased dark:bg-gray-900 md:py-4 rounded-xl">
        <div className="mx-auto max-w-screen-xl ">
          <BreadCrumbs data={dataCategory} />

          <Card dataCategory={dataCategory} />
          {/* <Pagination />*/}
        </div>
      </section>
    </motion.main>
  );
};
