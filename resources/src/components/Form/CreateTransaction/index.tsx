import {
    useFormCreateTransaction,
    useFormCreateTransactionProps,
} from './hook';
import { Form } from '@/ui-fenextjs/Form';
import { InputText } from '@/ui-fenextjs/Input';
import { ErrorComponent } from '@/ui-fenextjs/ErrorComponent';
import { Button } from '@/ui-fenextjs/Button';
import { Title } from '@/ui-fenextjs/Title';
import { InputNumberCount } from 'fenextjs';
import { InputSelectITransactionStatus } from '@/components/Select/ITransactionStatus';
import { InputDate } from '@/ui-fenextjs/Input/Date';
export interface FormCreateTransactionProps
    extends useFormCreateTransactionProps {}

export const FormCreateTransaction = ({
    ...props
}: FormCreateTransactionProps) => {
    const {
        data,
        onChangeData,
        validatorData,
        onSubmitData,
        loaderSubmit,
        dataError,
        isValidData,
    } = useFormCreateTransaction({ ...props });

    return (
        <>
            <Form className="form-register">
                <Title>Crear Transaccion</Title>
                <InputSelectITransactionStatus
                    label="Estatus"
                    placeholder="Estatus"
                    defaultValue={data.status}
                    validator={validatorData?.status}
                    onChange={onChangeData('status')}
                    required={true}
                />
                <InputNumberCount
                    label="Precio"
                    placeholder="Precio"
                    defaultValue={data.price}
                    validator={validatorData?.price}
                    onChange={onChangeData('price')}
                    required={true}
                    min={0}
                    aplyMin={true}
                />
                <InputText
                    label="Descripcion"
                    placeholder="Descripcion"
                    defaultValue={data.description}
                    validator={validatorData?.description}
                    onChange={onChangeData('description')}
                    type="textarea"
                    optional={true}
                />
                <InputDate
                    label="Fecha de Pago"
                    placeholder="Fecha de Pago"
                    defaultValue={data.payed_at}
                    validator={validatorData?.payed_at}
                    onChange={onChangeData('payed_at')}
                    optional={true}
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
                    Crear
                </Button>
            </Form>
        </>
    );
};
