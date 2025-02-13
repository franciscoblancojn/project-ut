import { useAlert, useData, useNotification } from 'fenextjs';
import { IFormLogin } from './interface';
import { FormLoginValidator } from './validator';
import { useUser, useUserDataProps } from '@/hook/useUser';
import { useApiLogin } from '@/api/auth/login';
import { IApiError, IApiResult } from '@/interface/api';
import { URL } from '@/url';
import { useNavigate } from 'react-router-dom';

export interface useFormLoginProps {
    defaultValue?: IFormLogin;
}

export const useFormLogin = ({ defaultValue }: useFormLoginProps) => {
    const navigate = useNavigate();
    const { mutateAsync: onSubmitData } = useApiLogin({});
    const { onLogin } = useUser({});
    const { pop } = useNotification({});
    const { setAlert, onClearAlert } = useAlert({});
    const HOOK = useData<
        IFormLogin,
        any,
        IApiResult<useUserDataProps>,
        any,
        IApiError
    >((defaultValue ?? {}) as IFormLogin, {
        validator: FormLoginValidator,
        onSubmitData,
        onBeforeSubmitData: ({ isValid }) => {
            if (isValid != true) {
                setAlert({
                    message: isValid?.msg ?? isValid?.message ?? '',
                    type: 'WARNING',
                });
            }
        },
        onAfterSubmitDataOk: ({ result }) => {
            pop({
                message: 'Login exitoso',
                type: 'OK',
            });
            onClearAlert();
            onLogin(result.data);
            navigate(URL.home.index);
        },
        onAfterSubmitDataError: () => {
            setAlert({
                message: 'Login fallido',
                type: 'ERROR',
            });
        },
    });
    return {
        ...HOOK,
    };
};
