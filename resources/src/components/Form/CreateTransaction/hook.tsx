import { useAlert, useData, useNotification } from 'fenextjs';
import { IFormCreateTransaction } from './interface';
import { FormCreateTransactionValidator } from './validator';
import { useApiCreateTransaction } from '@/api/transaction/create';
import { IApiError, IApiResult } from '@/interface/api';
import { ITransaction } from '@/interface/transaction';

export interface useFormCreateTransactionProps {
    defaultValue?: IFormCreateTransaction;
    onAfterSubmitDataOk?:()=>void
}

export const useFormCreateTransaction = ({ defaultValue ,onAfterSubmitDataOk}: useFormCreateTransactionProps) => {
    const { mutateAsync: onSubmitData } = useApiCreateTransaction({});
    const { pop } = useNotification({});
    const HOOK = useData<
        IFormCreateTransaction,
        any,
        IApiResult<ITransaction>,
        any,
        IApiError
    >((defaultValue ?? {}) as IFormCreateTransaction, {
        validator: FormCreateTransactionValidator,
        onSubmitData,
        onBeforeSubmitData: ({ isValid }) => {
            if (isValid != true) {
                pop({
                    message: isValid?.msg ?? isValid?.message ?? '',
                    type: 'WARNING',
                });
            }
        },
        onAfterSubmitDataOk: ({  }) => {
            pop({
                message: 'Transaccion exitosa',
                type: 'OK',
            });
            onAfterSubmitDataOk()
        },
        onAfterSubmitDataError: () => {
            pop({
                message: 'Transaccion fallida',
                type: 'ERROR',
            });
        },
    });
    return {
        ...HOOK,
    };
};
