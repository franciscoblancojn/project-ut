import { RefreshDataKey, useRefresh } from '@/hook/useRefresh';
import { useUser } from '@/hook/useUser';
import { IApiError, IApiResult } from '@/interface/api';
import { useMutation } from '@tanstack/react-query';
import { useApiError } from 'fenextjs';

export interface useRequestCallbackProps<R> {
    onSuccess?: (data: IApiResult<R>) => void;
    onError?: (error: IApiError) => void;
}
export interface useRequestProps<R> extends useRequestCallbackProps<R> {
    url: string;
    options?: RequestInit;
    key:RefreshDataKey
}

export const useRequest = <I, R>({
    url,
    onSuccess,
    onError,
    options,
    key
}: useRequestProps<R>) => {
    const { user } = useUser({});
    const { onApiError } = useApiError({});
        const { onRefresh }= useRefresh({})

    const onRequest = async (input: I): Promise<IApiResult<R>> => {
        const response = await fetch(url, {
            method: 'POST',
            ...options,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `${user?.token}`,
                'X-CSRF-TOKEN': `${(document.querySelector(`[name="_token"]`) as HTMLInputElement)?.value}`,
                ...options?.headers,
            },
            body: JSON.stringify(input),
        });
        const data = await response.json();
        if (data?.error) {
            onApiError(data);
            throw data;
        }
        return data;
    };

    return useMutation<IApiResult<R>, IApiError, I>({
        mutationFn: onRequest,
        onSuccess : (data)=>{
            onRefresh([key])
            onSuccess?.(data)
        },
        onError,
    });
};
