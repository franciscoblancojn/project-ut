import { ITransactionStatus } from '@/interface/transaction';
import { parseITransactionStatus } from '@/parse/ITransactionStatus';
import { Text } from '@/ui-fenextjs/Text';
export interface TransactionStatusProps {
    status?: ITransactionStatus;
}

export const TransactionStatus = ({ status }: TransactionStatusProps) => {
    return (
        <>
            <Text tag="strong" className="transaction-status">
                {parseITransactionStatus(status)}
            </Text>
        </>
    );
};
