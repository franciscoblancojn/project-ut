import { env_log, sleep, useAlert, useData, useNotification } from 'fenextjs';
import { IFormForgotPassword } from './interface';
import { FormForgotPasswordValidator } from './validator';

export interface useFormForgotPasswordProps {
    defaultValue?: IFormForgotPassword;
}

export const useFormForgotPassword = ({
    defaultValue,
}: useFormForgotPasswordProps) => {
    const { pop } = useNotification({});
    const { setAlert, onClearAlert } = useAlert({});
    const HOOK = useData<IFormForgotPassword>(
        (defaultValue ?? {}) as IFormForgotPassword,
        {
            validator: FormForgotPasswordValidator,
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
                    message: 'Envio de Correo exitoso',
                    type: 'OK',
                });
                onClearAlert();
            },
            onAfterSubmitDataError: () => {
                setAlert({
                    message: 'Envio de Correo fallido',
                    type: 'ERROR',
                });
            },
        },
    );
    return {
        ...HOOK,
    };
};
