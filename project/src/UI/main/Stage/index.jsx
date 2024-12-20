import { CheckIcon } from "@heroicons/react/20/solid";

import { FadeIn } from "@/func/FadeIn";

const cards = [
  {
    name: "Консультация",
    description:
      "Наш менеджер даст консультацию по материалам и по возможным решениям в проектировании мебели",
    icon: CheckIcon,
  },
  {
    name: "Замер",
    description:
      "Осуществим проектный замер помещения с обозначением углов, коммуникаций и розеток",
    icon: CheckIcon,
  },
  {
    name: "Проект",
    description:
      "Дизайнер составит проект мебели с учётом ваших пожеланий, размеров помещения и своего опыта",
    icon: CheckIcon,
  },
  {
    name: "Договор",
    description:
      "Заключим договор в удобном для Вас салоне, в котором будут указаны все условия выполнения заказа",
    icon: CheckIcon,
  },
  {
    name: "Изготовление",
    description:
      "Фабрика изготовит заказ на высокотехнологичном оборудовании под полным контролем технологов",
    icon: CheckIcon,
  },
  {
    name: "Сборка",
    description:
      "Профессиональные сборщики, состоящие в штате компании, качественно выполнят всю работу",
    icon: CheckIcon,
  },
];

export default () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-950 py-24 sm:py-32">
      {/* <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            /> */}
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-sky-600  opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-sky-600 opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2 className="text-4xl md:text-7xl font-bold text-gray-50">
            Наша работа
          </h2>
          <p className="mx-auto mt-6 text-sm sm:text-lg leading-7 text-gray-300">
            Мы будем вас сопровождать на всех этапах проектирования и
            изготовления мебели. От консультации до дня сборки проекта.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name}>
              {" "}
              <FadeIn>
                <div className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                  <card.icon
                    className="h-7 w-5 flex-none text-sky-400"
                    aria-hidden="true"
                  />
                  <div className="leading-7">
                    <h3 className="text-base font-semibold text-white">
                      {card.name}
                    </h3>
                    <p className="text-sm mt-2 text-gray-300 text-pretty">
                      {card.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
