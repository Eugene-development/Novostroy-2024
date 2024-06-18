import { Slider, BGG, ThreeDCard, Parallax, Service } from "@/UI";

export const metadata = {
  title: "Новострой | Мебель на заказ",
  description:
    "Изготовление корпусной мебели на заказ из материалов высокого качества.",
};

export default function Home() {
  return (
    <>
      <Slider />
      {/* <Incentives /> */}
      <ThreeDCard />
      <Parallax />
      <Service />
      <BGG />
    </>
  )
}
