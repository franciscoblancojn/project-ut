import { useApiQuery, useApiQueryProps } from '@/api/query';
import { IApiResultTable } from '@/interface/api';
import { IUser } from '@/interface/user';

export interface useQueryUserInputProps {
    id?: string;
}

export interface useQueryUserProps
    extends Pick<
        useApiQueryProps<useQueryUserInputProps>,
        'input' | 'usedataFilter' | 'usepagination'
    > {}
export const useQueryUser = ({ ...props }: useQueryUserProps) => {
    return useApiQuery<useQueryUserInputProps, IApiResultTable<IUser>>({
        ...props,
        url: '/api/users',
        key: 'users',
    });
};
