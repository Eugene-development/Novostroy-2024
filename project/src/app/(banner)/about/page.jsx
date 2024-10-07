import { Sparkles, CompanyText } from "@/UI";

export const metadata = {
  title: "Новострой | Информация о компании",
  description: "На странице вы найдёте общую информацию о нашей компании.",
};

export default function page() {
  return (
    <>
      <CompanyText />
      <Sparkles />
    </>
  );
}
