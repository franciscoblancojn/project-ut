import { env_log, sleep, useAlert, useData, useNotification } from 'fenextjs';
import { IFormRegister } from './interface';
import { FormRegisterValidator } from './validator';
import { useNavigate } from 'react-router-dom';
import { URL } from '@/url';
import { useUser, useUserDataProps } from '@/hook/useUser';
import { useApiRegister } from '@/api/auth/register';
import { IApiError, IApiResult } from '@/interface/api';

export interface useFormRegisterProps {
    defaultValue?: IFormRegister;
}

export const useFormRegister = ({ defaultValue }: useFormRegisterProps) => {
    const navigate = useNavigate();
        const { mutateAsync: onSubmitData } = useApiRegister({});
    const { pop } = useNotification({});
        const { onLogin } = useUser({});
    const { setAlert, onClearAlert } = useAlert({});
    const HOOK = useData<IFormRegister,
            any,
            IApiResult<useUserDataProps>,
            any,
            IApiError>((defaultValue ?? {}) as IFormRegister, {
        validator: FormRegisterValidator,
        onSubmitData ,
        onBeforeSubmitData: ({ isValid }) => {
            if (isValid != true) {
                setAlert({
                    message: isValid?.msg ?? isValid?.message ?? '',
                    type: 'WARNING',
                });
            }
        },
        onAfterSubmitDataOk: ({result}) => {
            pop({
                message: 'Registro exitoso',
                type: 'OK',
            });
            onClearAlert();
            onLogin(result.data);
            navigate(URL.home.index);
        },
        onAfterSubmitDataError: () => {
            setAlert({
                message: 'Register fallido',
                type: 'ERROR',
            });
        },
    });
    return {
        ...HOOK,
    };
};
