import { ITransactionStatus } from '@/interface/transaction';
import { parseITransactionStatus } from '@/parse/ITransactionStatus';
import {
    InputSelectMultipleT,
    InputSelectMultipleTProps,
} from '@/ui-fenextjs/Input/SelectMultipleT';
import { InputSelectT, InputSelectTProps } from '@/ui-fenextjs/Input/SelectT';

export interface InputSelectITransactionStatusProps
    extends Omit<
        InputSelectTProps<ITransactionStatus>,
        'options' | 'onParse'
    > {}

export const InputSelectITransactionStatus = ({
    ...props
}: InputSelectITransactionStatusProps) => {
    return (
        <>
            <InputSelectT<ITransactionStatus>
                {...props}
                options={Object.values(ITransactionStatus)}
                onParse={(e) => ({
                    id: e ?? '',
                    text: parseITransactionStatus(e),
                    data: e,
                })}
            />
        </>
    );
};

export interface InputSelectMultipleITransactionStatusProps
    extends Omit<
        InputSelectMultipleTProps<ITransactionStatus>,
        'options' | 'onParse'
    > {}

export const InputSelectMultipleITransactionStatus = ({
    ...props
}: InputSelectMultipleITransactionStatusProps) => {
    return (
        <>
            <InputSelectMultipleT<ITransactionStatus>
                {...props}
                options={Object.values(ITransactionStatus)}
                onParse={(e) => ({
                    id: e ?? '',
                    text: parseITransactionStatus(e),
                    data: e,
                })}
            />
        </>
    );
};
