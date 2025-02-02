import { useData } from 'fenextjs';

export type RefreshDataKey = 'users' | 'transaction';

export type RefreshData = {
    [id in RefreshDataKey]?: number;
};

export interface useRefreshProps {}

export const useRefresh = ({ ...props }: useRefreshProps) => {
    const { data, onConcatData } = useData<RefreshData>(
        {},
        {
            ...props,
            useGlobalContext: `useRefresh`,
        },
    );
    const onRefresh = (ids: (keyof RefreshData)[]) => {
        const obj: Partial<RefreshData> = {};
        const time = new Date().getTime();
        ids.forEach((k) => {
            obj[k] = time;
        });
        onConcatData(obj);
    };
    return {
        data,
        onRefresh,
    };
};
