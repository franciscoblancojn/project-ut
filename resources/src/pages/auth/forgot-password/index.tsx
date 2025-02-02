import { FormForgotPassword } from '@/components/Form/ForgotPassword';
import { LayoutLogin } from '@/layout/Login';
import Head from 'next/head';

export const PageForgotPassword = () => {
    return (
        <>
            <Head>
                <title>Recuperar Contraseña</title>
            </Head>
            <LayoutLogin>
                <FormForgotPassword />
            </LayoutLogin>
        </>
    );
};
