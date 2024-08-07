import { Catalog } from "@/UI";

const rubric = [
  {
    name: "test1",
    count: 5,
    category: [
      {
        name: "test777",
        count: 5,
      },
      {
        name: "test888",
        count: 5,
      },
    ],
  },
  {
    name: "test2",
    count: 5,
  },
];

export default function page() {
  return <Catalog rubric={ rubric } />;
}
