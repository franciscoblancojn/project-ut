import { env_log, sleep, useAlert, useData, useNotification } from 'fenextjs';
import { IFormChangePassword } from './interface';
import { FormChangePasswordValidator } from './validator';
import { useNavigate } from 'react-router-dom';
import { URL } from '@/url';

export interface useFormChangePasswordProps {
    defaultValue?: IFormChangePassword;
}

export const useFormChangePassword = ({
    defaultValue,
}: useFormChangePasswordProps) => {
    const navigate = useNavigate();
    const { pop } = useNotification({});
    const { setAlert, onClearAlert } = useAlert({});
    const HOOK = useData<IFormChangePassword>(
        (defaultValue ?? {}) as IFormChangePassword,
        {
            validator: FormChangePasswordValidator,
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
                    message: 'Cambio de Contraseña exitoso',
                    type: 'OK',
                });
                onClearAlert();
                navigate(URL.auth.login.index);
            },
            onAfterSubmitDataError: () => {
                setAlert({
                    message: 'Cambio de Contraseña fallido',
                    type: 'ERROR',
                });
            },
        },
    );
    return {
        ...HOOK,
    };
};
