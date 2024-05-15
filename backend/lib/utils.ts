import express from 'express';
import { Predicate } from '../lib/types';

export const route = <T>(predicate: (req: express.Request, res: express.Response) => Promise<T>) =>
    (req: express.Request, res: express.Response, next: express.NextFunction) =>
        Promise.resolve().then(() => predicate(req, res)).then((data) => res.json(data)).catch((err) => next(err));

export class HttpError extends Error {
    constructor(public statusCode, public body, ...args) {
        super(...args);
    }
};

export const rand = (a: number, b: number) => {
    return Math.floor(
        Math.random() * (b - a) + a
    );
};

export const fill = <T>(n: number, p: Predicate<number[], T>) => {
    return new Array(n).fill(0).map((_, index) => p(index)) as T[];
};
