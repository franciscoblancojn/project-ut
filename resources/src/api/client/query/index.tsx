import { useApiQuery } from '@/api/query';
import { IApiResultTable } from '@/interface/api';
import { IUser } from '@/interface/user';

export interface useQueryUserInputProps {}

export interface useQueryUserProps {
    input?: useQueryUserInputProps;
}
export const useQueryUser = ({ input }: useQueryUserProps) => {
    return useApiQuery<useQueryUserInputProps, IApiResultTable<IUser>>({
        url: '/api/users',
        input,
        key: 'client',
    });
};
