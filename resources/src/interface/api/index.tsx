import { useFilterCustomDataProps } from '@/hook/useFilter';
import {
    ErrorFenextjs,
    PaginationDataProps,
    useFilterDataProps,
} from 'fenextjs';

export interface IApiResult<T> {
    message: string;
    data: T;
}

export interface IApiError {
    message: string;
    error: ErrorFenextjs;
}

export type IApiRespond<T> = IApiResult<T> | IApiError;

export interface IApiResultTable<T> {
    count: number;
    items: T[];
}

export interface IApiQuery
    extends PaginationDataProps,
        useFilterDataProps<useFilterCustomDataProps> {}
