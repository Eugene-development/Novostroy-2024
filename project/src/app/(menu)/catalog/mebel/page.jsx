import { Catalog } from "@/UI";

const rubric = [
  {
    name: "Кухонные гарнитуры",
    category: [
      {
        name: "Термопластик",
      },
      {
        name: "Эмаль (краска)",
      },
      {
        name: "Пластики",
      },
      {
        name: "Шпон",
      },
      {
        name: "Массив",
      },
    ],
  },
  {
    name: "Шкафы",
    category: [
      {
        name: "Распашные",
      },
      {
        name: "Купе",
      },
    ],
  },
];

export default function page() {
  return <Catalog rubric={rubric} />;
}
