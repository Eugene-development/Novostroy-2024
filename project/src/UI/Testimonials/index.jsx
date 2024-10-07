"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { useInView } from "framer-motion";

import { Container } from "./Container";

const reviews = [
  {
    title: "Спасибо за работу",
    body: 'Ваша мебель - это качество и функциональность. Убедились в этом снова. Наш новый гарнитур кухни стал ярким дополнением интерьера.',
    author: "Тамара Фёдоровна",
    rating: 5,
  },
  {
    title: "Закажем ещё",
    body: 'Купили гардероб. Каждая деталь продумана до мелочей. Мы остались довольны своей покупкой.',
    author: "Сергей",
    rating: 5,
  },
  {
    title: "Будем советовать",
    body: 'Наш новый шкаф купе - это просто фантастика! Получилось стильно и удобно. Теперь наши вещи всегда в порядке.',
    author: "Лана и Лёша",
    rating: 5,
  },
  {
    title: "Мы рады!",
    body: "Скорее всего, у нас самый крутой кухонный гарнитур среди друзей. Не можем налюбоваться!",
    author: "Танечка",
    rating: 5,
  },
  {
    title: "Не подвели.",
    body: 'Знаком с вами очень давно. Порадовал качественный выбор материалов для нашей спальни.',
    author: "Георгий Феликсович. Москва.",
    rating: 5,
  },
  {
    title: "Благодарю дизайнера",
    body: 'Советую всем дизайнера Евгения. Подобрал вариант по нашему бюджету и ложились в сроки.',
    author: "LazyRich99",
    rating: 5,
  },
  {
    title: "Обновка удалась!",
    body: 'Мы обновили кухню с помощью новой мебели. Теперь у нас самая модная и уютная кухня в ЖК!))',
    author: "Серафима",
    rating: 5,
  },
  {
    title: "Спасибо за скидку",
    body: 'Вместительный шкаф - это must-have для современного интерьера. Мы довольны своим выбором дизайнера!"',
    author: "Анатолий",
    rating: 5,
  },
  {
    title: "Успели к Дню рождения",
    body: 'Большое спасибо за оперативность и дружелюбие. Мебель была мне в подарок и хорошо что успели.',
    author: "Марина",
    rating: 5,
  },
  {
    title: "Уложились в бюджет. Ну почти)",
    body: "Хороший шкаф. Купили в мае. Покупка, которая оправдала все ожидания. Взяли в рассрочку, так как не уложились в бюджет.",
    author: "Лекс",
    rating: 4,
  },
  {
    title: "Доволен.",
    body: "Купил кухонный гарнитур через этих ребят. Работают профессионалы. Все идеально подходит, ничего не смущает даже. Сроки только большие.",
    author: "Таймураз",
    rating: 4,
  },
  {
    title: "Искали и нашли",
    body: "Мы довольны результатом выполненных работ. Наш новый шкаф купе - это просто #красота!",
    author: "Лена",
    rating: 5,
  },
  {
    title: "У нас новоселье",
    body: "Начали переезд с обновления мебели. Заказали гардероб. Получилось стильное украшение нашей спальни. Все друзья в восторге! Рекомендуем.",
    author: "Дина",
    rating: 5,
  },
  
  {
    title: "Спасибо вам",
    body: 'Купили кухонный гарнитур и получили отличное сочетание стиля и функциональности. Мы счастливы, что сделали выбор на вас.',
    author: "Борис",
    rating: 5,
  },
];

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            "h-5 w-5",
            rating > index ? "fill-yellow-400" : "fill-gray-300",
          )}
        />
      ))}
    </div>
  );
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = [
      "0s",
      "0.1s",
      "0.2s",
      "0.3s",
      "0.4s",
      "0.5s",
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  return (
    <figure
      className={clsx(
        "animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-xl shadow-gray-900/10 ",
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  );
}

function splitArray(array, numParts) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

function ReviewColumn({ reviews, className, reviewClassName, msPerPixel = 0 }) {
  let columnRef = useRef(null);
  let [columnHeight, setColumnHeight] = useState(0);
  let duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) {
      return;
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={clsx("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  );
}

function ReviewGrid() {
  let containerRef = useRef(null);
  let isInView = useInView(containerRef, { once: true, amount: 0.4 });
  let columns = splitArray(reviews, 3);
  let column1 = columns[0];
  let column2 = columns[1];
  let column3 = splitArray(columns[2], 2);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  "md:hidden",
                reviewIndex >= column1.length && "lg:hidden",
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? "lg:hidden" : ""
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white" />
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="bg-white py-12 sm:py-20"
    >
      <Container>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-sky-600">
              Отзывы
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Мнения о нашей работе
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Однажды, возможно, мы разместим и ваш положительный отзыв о нашей
              компании. Мы будем очень стараться для этого.
            </p>
          </div>
        </div>

        <ReviewGrid />
      </Container>
    </section>
  );
}
