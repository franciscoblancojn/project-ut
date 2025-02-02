import { useApiQuery, useApiQueryProps } from '@/api/query';
import { IApiResultTable } from '@/interface/api';
import { ITransaction } from '@/interface/transaction';

export interface useQueryTransactionInputProps {
    id?: string;
    user_id?: string;
}

export interface useQueryTransactionProps
    extends Pick<
        useApiQueryProps<useQueryTransactionInputProps>,
        'input' | 'usedataFilter' | 'usepagination'
    > {}
export const useQueryTransaction = ({ ...props }: useQueryTransactionProps) => {
    return useApiQuery<
        useQueryTransactionInputProps,
        IApiResultTable<ITransaction>
    >({
        ...props,
        url: '/api/transaction',
        key: 'transaction',
    });
};
