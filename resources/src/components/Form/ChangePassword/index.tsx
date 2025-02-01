import React from 'react';
import { useFormChangePassword, useFormChangePasswordProps } from './hook';
import { Form } from '@/ui-fenextjs/Form';
import { InputPassword } from '@/ui-fenextjs/Input';
import { ErrorComponent } from '@/ui-fenextjs/ErrorComponent';
import { Button } from '@/ui-fenextjs/Button';
import { Title } from '@/ui-fenextjs/Title';

export interface FormChangePasswordProps extends useFormChangePasswordProps {}

export const FormChangePassword = ({ ...props }: FormChangePasswordProps) => {
    const {
        data,
        onChangeData,
        validatorData,
        onSubmitData,
        loaderSubmit,
        dataError,
        isValidData,
    } = useFormChangePassword({ ...props });
    return (
        <>
            <Form className="form-change-password">
                <Title>Cambiar Contraseña</Title>
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
                    Cambiar Contraseña
                </Button>
            </Form>
        </>
    );
};
