import { BreadCrumbs, Card, OrderInfo, Filter, Button } from "@/UI";

export default ({ dataCategory }) => {
  return (
    <section className="sm:bg-gray-50/50 py-2 antialiased md:py-4 rounded-xl">
      <div className="mx-auto max-w-screen-xl">
        <Button value={"Категории каталога"} />

        <BreadCrumbs data={dataCategory} />

        <div className="sm:hidden">
          <OrderInfo />
        </div>

        <Card dataCategory={dataCategory} />
        {/* <Pagination />*/}
      </div>
    </section>
  );
};
