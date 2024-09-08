import { BreadCrumbs, Card } from "@/UI";

export default ({ dataCategory }) => {
  return (
    <section className="bg-gray-50 py-2 antialiased dark:bg-gray-900 md:py-4 rounded-xl">
      <div className="mx-auto max-w-screen-xl ">
        <BreadCrumbs data={dataCategory} />

        <Card dataCategory={dataCategory} />
        {/* <Pagination />*/}
      </div>
    </section>
  );
};
