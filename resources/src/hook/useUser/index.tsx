// import { URL } from '@/url';
import { ImgProps, useUser as useUserFenextjs } from 'fenextjs';

export interface useUserDataProps {
    id: string;
    name: string;
    email: string;
    img?: ImgProps;
    token: string;
}

export interface useUserProps {}

export const useUser = ({}: useUserProps) => {
    return useUserFenextjs<useUserDataProps>({
        // urlRedirectInLogin: URL.home.index,
        // urlRedirectInLogout:URL.auth.login.index,
        onValidateUser: (user) => {
            return user != undefined && user?.token != undefined;
        },
    });
};
