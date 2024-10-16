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
  title: "Новострой | Купите мебель с нашим дизайном",
  description:
    "Благодаря нам вы сможете купить мебель с дизайнерским решением и с доступной ценой.",
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
