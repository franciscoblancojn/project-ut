// import { URL } from '@/url';
import { IUser } from '@/interface/user';
import { ImgProps, useUser as useUserFenextjs } from 'fenextjs';

export interface useUserDataProps extends IUser {
    img?: ImgProps;
    token: string;
}

export interface useUserProps {}

export const useUser = ({}: useUserProps) => {
    return useUserFenextjs<useUserDataProps>({
        // urlRedirectInLogin: URL.home.index,
        // urlRedirectInLogout:URL.auth.login.index,
        onValidateUser: (user) => {
            try {
                return user != undefined && user?.token != undefined;
            } catch {
                return false
            }
        },
    });
};
