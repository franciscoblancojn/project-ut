import { env_log, sleep, useAlert, useData, useNotification } from 'fenextjs';
import { IFormRegister } from './interface';
import { FormRegisterValidator } from './validator';
import { useNavigate } from 'react-router-dom';
import { URL } from '@/url';

export interface useFormRegisterProps {
    defaultValue?: IFormRegister;
}

export const useFormRegister = ({ defaultValue }: useFormRegisterProps) => {
    const navigate = useNavigate();
    const { pop } = useNotification({});
    const { setAlert, onClearAlert } = useAlert({});
    const HOOK = useData<IFormRegister>((defaultValue ?? {}) as IFormRegister, {
        validator: FormRegisterValidator,
        onSubmitData: async (data) => {
            env_log(data, {
                name: 'DATA',
            });
            await sleep(2000);
        },
        onBeforeSubmitData: ({ isValid }) => {
            if (isValid != true) {
                setAlert({
                    message: isValid?.msg ?? isValid?.message ?? '',
                    type: 'WARNING',
                });
            }
        },
        onAfterSubmitDataOk: () => {
            pop({
                message: 'Register exitoso',
                type: 'OK',
            });
            onClearAlert();
            navigate(URL.auth.login.index);
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
