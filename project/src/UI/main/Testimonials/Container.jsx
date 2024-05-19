import clsx from "clsx";

// console.log(clsx(true, false, '', null, undefined, 1, NaN))
// console.log(clsx('foo', false && 'bar', 'baz'))
export function Container({ className, ...props }) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
