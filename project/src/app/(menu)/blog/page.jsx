import { BlogList } from "@/UI";

export const metadata = {
  title: "Новострой | Блог",
  description: "Информационные посты о нашей компании и индустрии в целом",
};

export default function page() {
  return (
    <>
      <BlogList />
    </>
  );
}
