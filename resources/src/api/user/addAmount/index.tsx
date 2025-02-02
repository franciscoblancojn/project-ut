import { useRequest, useRequestCallbackProps } from '@/api/request';
import { IFormAddAmountUser } from '@/components/Form/AddAmountUser/interface';

export interface useApiAddAmountUserProps
    extends useRequestCallbackProps<void> {}

export const useApiAddAmountUser = ({ ...props }: useApiAddAmountUserProps) => {
    return useRequest<IFormAddAmountUser, void>({
        url: '/api/users/add-amount',
        key: 'users',
        ...props,
    });
};
