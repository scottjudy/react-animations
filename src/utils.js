// @flow


export const compose = (...args: Array<string>): string => {
  const result: string = args.reduce(
    (acc, value) => `${acc} ${value}`
  );
  return result.trim();
}
export const cubicBezier = (
  a: number,
  b: number,
  c: number,
  d: number
): string => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;

export const translate3d = (a: number, b: number, c: number): string =>
  `translate3d(${a}px, ${b}px, ${c}px)`;

export const scale3d = (a: number, b: number, c: number): string =>
  `scale3d(${a}, ${b}, ${c})`;

export const skewX = (deg: number): string =>
  `skewX(${deg}deg)`;

export const skewY = (deg: number): string =>
  `skewY(${deg}deg)`;

export const skewXY = (x: number, y: number): string =>
  `${skewX(x)} ${skewY(y)}`;

export const rotate3d = (
  a: number,
  b: number,
  c: number,
  d: number
): string => `rotate3d(${a}, ${b}, ${c}, ${d}deg)`
