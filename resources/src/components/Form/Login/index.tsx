import React from 'react';
import { useFormLogin, useFormLoginProps } from './hook';
import { Form } from '@/ui-fenextjs/Form';
import { InputPassword, InputText } from '@/ui-fenextjs/Input';
import { ErrorComponent } from '@/ui-fenextjs/ErrorComponent';
import { Button } from '@/ui-fenextjs/Button';
import { Title } from '@/ui-fenextjs/Title';
import { Link } from '@/ui-fenextjs/Link';
import { URL } from '@/url';
export interface FormLoginProps extends useFormLoginProps {}

export const FormLogin = ({ ...props }: FormLoginProps) => {
    const {
        data,
        onChangeData,
        validatorData,
        onSubmitData,
        loaderSubmit,
        dataError,
        isValidData,
    } = useFormLogin({ ...props });
    return (
        <>
            <Form className="form-login">
                <Title>Entrar</Title>
                <InputText
                    label="Correo"
                    placeholder="Correo"
                    defaultValue={data.email}
                    validator={validatorData?.email}
                    onChange={onChangeData('email')}
                />
                <InputPassword
                    label="Contraseña"
                    placeholder="Contraseña"
                    defaultValue={data.password}
                    validator={validatorData?.password}
                    onChange={onChangeData('password')}
                />
                {dataError && <ErrorComponent error={dataError?.error} />}

                <Button
                    disabled={isValidData != true}
                    onClick={onSubmitData}
                    onClickDisabled={onSubmitData}
                    loader={loaderSubmit}
                    full={true}
                    isBtn={false}
                >
                    Enviar
                </Button>
                <div>
                    <Link href={URL.auth.register.index}>Registrate</Link>
                </div>
                <div>
                    <Link href={URL.auth['forgot-password'].index}>
                        Olvidates la Contraseña
                    </Link>
                </div>
            </Form>
        </>
    );
};
