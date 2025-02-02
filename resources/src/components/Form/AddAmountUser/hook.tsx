import { useData, useNotification } from 'fenextjs';
import { IFormAddAmountUser } from './interface';
import { FormAddAmountUserValidator } from './validator';
import { useApiAddAmountUser } from '@/api/user/addAmount';
import { IApiError, IApiResult } from '@/interface/api';

export interface useFormAddAmountUserProps {
    defaultValue?: IFormAddAmountUser;
    onAfterSubmitDataOk?: () => void;
}

export const useFormAddAmountUser = ({
    defaultValue,
    onAfterSubmitDataOk,
}: useFormAddAmountUserProps) => {
    const { mutateAsync: onSubmitData } = useApiAddAmountUser({});
    const { pop } = useNotification({});
    const HOOK = useData<
        IFormAddAmountUser,
        any,
        IApiResult<void>,
        any,
        IApiError
    >((defaultValue ?? {}) as IFormAddAmountUser, {
        validator: FormAddAmountUserValidator,
        onSubmitData,
        onBeforeSubmitData: ({ isValid }) => {
            if (isValid != true) {
                pop({
                    message: isValid?.msg ?? isValid?.message ?? '',
                    type: 'WARNING',
                });
            }
        },
        onAfterSubmitDataOk: ({}) => {
            pop({
                message: 'Transaccion exitosa',
                type: 'OK',
            });
            onAfterSubmitDataOk();
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
