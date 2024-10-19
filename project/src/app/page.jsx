// import { Slider, BGG, ThreeDCard, Parallax, Stage } from "../UI";
import {
  Slider,
  BGG,
  ThreeDCard,
  Parallax,
  Stage,
  Compare,
  Incentives,
} from "@/UI";

export const metadata = {
  title: "Компания Новострой – Мебель на заказ для вашего идеального интерьера",
  description:
    "Компания Новострой предлагает мебель на заказ по индивидуальным размерам и дизайну. Широкий выбор стилей и материалов для создания уникальных решений для вашего дома. Высокое качество, надежность и внимание к деталям – мы поможем вам реализовать все ваши идеи!",
};

export default function Home() {
  return (
    <>
      <Slider />
      <Incentives />
      <ThreeDCard />

      <Compare />
      {/* <Parallax /> */}
      <Stage />
      <BGG />
    </>
  );
}
