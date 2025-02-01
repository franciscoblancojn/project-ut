import React from 'react';
import { useFormForgotPassword, useFormForgotPasswordProps } from './hook';
import { Form } from '@/ui-fenextjs/Form';
import { InputText } from '@/ui-fenextjs/Input';
import { ErrorComponent } from '@/ui-fenextjs/ErrorComponent';
import { Button } from '@/ui-fenextjs/Button';
import { Title } from '@/ui-fenextjs/Title';
import { Link } from '@/ui-fenextjs/Link';
import { URL } from '@/url';
export interface FormForgotPasswordProps extends useFormForgotPasswordProps {}

export const FormForgotPassword = ({ ...props }: FormForgotPasswordProps) => {
    const {
        data,
        onChangeData,
        validatorData,
        onSubmitData,
        loaderSubmit,
        dataError,
        isValidData,
    } = useFormForgotPassword({ ...props });
    return (
        <>
            <Form className="form-forgot-password">
                <Title>Recuperar Contraseña</Title>
                <InputText
                    label="Correo"
                    placeholder="Correo"
                    defaultValue={data.email}
                    validator={validatorData?.email}
                    onChange={onChangeData('email')}
                />
                {dataError && <ErrorComponent error={dataError} />}

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
                    <Link href={URL.auth.login.index}>Entrar</Link>
                </div>
                <div>
                    <Link href={URL.auth.register.index}>Registrate</Link>
                </div>
            </Form>
        </>
    );
};
