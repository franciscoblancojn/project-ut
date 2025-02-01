import { FormLogin } from '@/components/Form/Login';
import { LayoutLogin } from '@/layout/Login';
import Head from 'next/head';

export const PageLogin = () => {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <LayoutLogin>
                <FormLogin />
            </LayoutLogin>
        </>
    );
};

export default PageLogin;
