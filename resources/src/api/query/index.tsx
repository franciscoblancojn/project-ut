import { useFilter } from '@/hook/useFilter';
import { useUser } from '@/hook/useUser';
import { IApiError, IApiResult } from '@/interface/api';
import { parseInputToQuery } from '@/parse/Input';
import { useQuery } from '@tanstack/react-query';
import { sleep, useApiError, usePagination } from 'fenextjs';

export interface useApiQueryProps<I> {
    url: string;
    options?: RequestInit;
    input?: I;
    key: string;
    useUserToken?: boolean;
}

export const useApiQuery = <I, R>({
    url,
    options,
    input,
    key,
    useUserToken = true,
}: useApiQueryProps<I>) => {
    const { user, load } = useUser({});
    const { data: dataFilter } = useFilter({});
    const { data: pagination } = usePagination({});
    const { onApiError } = useApiError({});

    const onQuery = async (): Promise<IApiResult<R>> => {
        const query = parseInputToQuery({
            input: { ...dataFilter, ...input, ...pagination },
        });
        const response = await fetch(`${url}?${query}`, {
            method: 'GET',
            ...options,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${user?.token}`,
                ...options?.headers,
            },
        });
        const data = await response.json();
        if (data?.error) {
            onApiError(data);
            throw data;
        }
        return data;
    };

    const onQueryNotLoadUser = async () => {
        if (useUserToken == false) {
            return await onQuery();
        }
        await sleep(1000);
        return {} as IApiResult<R>;
    };

    return useQuery<IApiResult<R>, IApiError>({
        queryKey: [key],
        queryFn: load ? onQuery : onQueryNotLoadUser,
        queryHash:
            key +
            '-' +
            JSON.stringify({ input, dataFilter, user, load, pagination }),
    });
};
