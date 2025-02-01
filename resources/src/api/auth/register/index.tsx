import { useRequest, useRequestCallbackProps } from '@/api/request';
import { IFormRegister } from '@/components/Form/Register/interface';
import { useUserDataProps } from '@/hook/useUser';

export interface useApiRegisterProps
    extends useRequestCallbackProps<useUserDataProps> {}

export const useApiRegister = ({ ...props }: useApiRegisterProps) => {
    return useRequest<IFormRegister, useUserDataProps>({
        url: '/api/auth/register',
        ...props,
    });
};
