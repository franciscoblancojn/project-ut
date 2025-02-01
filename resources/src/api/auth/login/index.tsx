import { useRequest, useRequestCallbackProps } from '@/api/request';
import { IFormLogin } from '@/components/Form/Login/interface';
import { useUserDataProps } from '@/hook/useUser';

export interface useApiLoginProps
    extends useRequestCallbackProps<useUserDataProps> {}

export const useApiLogin = ({ ...props }: useApiLoginProps) => {
    return useRequest<IFormLogin, useUserDataProps>({
        url: '/api/auth/login',
        ...props,
    });
};
