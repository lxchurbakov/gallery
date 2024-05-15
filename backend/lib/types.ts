export type Predicate<A extends unknown[] = unknown[], R = unknown> = (...args: A) => R;
export type ArgsOf<T> = T extends Predicate<infer A, any> ? A : never;
