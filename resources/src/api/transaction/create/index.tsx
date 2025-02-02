import { useRequest, useRequestCallbackProps } from '@/api/request';
import { IFormCreateTransaction } from '@/components/Form/CreateTransaction/interface';
import { ITransaction } from '@/interface/transaction';

export interface useApiCreateTransactionProps
    extends useRequestCallbackProps<ITransaction> {}

export const useApiCreateTransaction = ({ ...props }: useApiCreateTransactionProps) => {
    return useRequest<IFormCreateTransaction, ITransaction>({
        url: '/api/transaction',
        key: 'transaction',
        ...props,
    });
};
