import { FormChangePassword } from '@/components/Form/ChangePassword';
import { LayoutLogin } from '@/layout/Login';
import { useQuery } from 'fenextjs';
import Head from 'next/head';

export const PageChangePassword = () => {
    const { query, load } = useQuery();

    return (
        <>
            <Head>
                <title>Cambiar Contraseña</title>
            </Head>
            <LayoutLogin>
                {load && (
                    <FormChangePassword
                        defaultValue={{
                            token: query?.id ?? '',
                            password: '',
                            repeactPassword: '',
                        }}
                    />
                )}
            </LayoutLogin>
        </>
    );
};

export default PageChangePassword;
