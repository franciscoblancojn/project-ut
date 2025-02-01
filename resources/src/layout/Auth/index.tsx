import { useUser } from '@/hook/useUser';
import PageLogin from '@/pages/auth/login';
import { ReactNode } from 'react';

export interface LayoutAuthProps {
    children?: ReactNode;
}

export const LayoutAuth = ({ children }: LayoutAuthProps) => {
    const { isValidUser } = useUser({});
    if (!isValidUser) {
        return <PageLogin />;
    }
    return <>{children}</>;
};
