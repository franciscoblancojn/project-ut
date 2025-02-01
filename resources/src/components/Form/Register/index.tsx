import React from 'react';
import { useFormRegister, useFormRegisterProps } from './hook';
import { Form } from '@/ui-fenextjs/Form';
import { InputPassword, InputText } from '@/ui-fenextjs/Input';
import { ErrorComponent } from '@/ui-fenextjs/ErrorComponent';
import { Button } from '@/ui-fenextjs/Button';
import { Title } from '@/ui-fenextjs/Title';
import { Link } from '@/ui-fenextjs/Link';
import { URL } from '@/url';
export interface FormRegisterProps extends useFormRegisterProps {}

export const FormRegister = ({ ...props }: FormRegisterProps) => {
    const {
        data,
        onChangeData,
        validatorData,
        onSubmitData,
        loaderSubmit,
        dataError,
        isValidData,
    } = useFormRegister({ ...props });
    return (
        <>
            <Form className="form-register">
                <Title>Registrate</Title>
                <InputText
                    label="Nombre"
                    placeholder="Nombre"
                    defaultValue={data.name}
                    validator={validatorData?.name}
                    onChange={onChangeData('name')}
                />
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
                <InputPassword
                    label="Repite la Contraseña"
                    placeholder="Contraseña"
                    defaultValue={data.repeactPassword}
                    validator={validatorData?.repeactPassword}
                    onChange={onChangeData('repeactPassword')}
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
                    Registrate
                </Button>
                <div>
                    <Link href={URL.auth.login.index}>Entrar</Link>
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
