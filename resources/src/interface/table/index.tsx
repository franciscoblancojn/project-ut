import { ErrorFenextjs } from 'fenextjs';

export interface ITable<T> {
    items?: T[];
    nItems?: number;
    error?: ErrorFenextjs;
    loader?: boolean;
}
