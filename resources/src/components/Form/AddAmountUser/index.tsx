
import { useFormAddAmountUser, useFormAddAmountUserProps } from './hook';
import { Form } from '@/ui-fenextjs/Form';
import { ErrorComponent } from '@/ui-fenextjs/ErrorComponent';
import { Button } from '@/ui-fenextjs/Button';
import { Title } from '@/ui-fenextjs/Title';
import { InputNumberCount } from 'fenextjs';

export interface FormAddAmountUserProps extends useFormAddAmountUserProps { }

export const FormAddAmountUser = ({ ...props }: FormAddAmountUserProps) => {
    const {
        data,
        onChangeData,
        validatorData,
        onSubmitData,
        loaderSubmit,
        dataError,
        isValidData,
    } = useFormAddAmountUser({ ...props });;
    
    return (
        <>
            <Form className="form-register">
                <Title>Agregar Saldo</Title>
                <InputNumberCount
                    label="Saldo a agregar"
                    placeholder="Saldo a agregar"
                    defaultValue={(data.amount)}
                    validator={validatorData?.amount}
                    onChange={onChangeData('amount')}
                    required={true}
                    min={0}
                    aplyMin={true}
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
            </Form>
        </>
    );
};
