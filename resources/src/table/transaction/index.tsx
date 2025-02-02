import { ITransaction } from '@/interface/transaction';
import { ITable } from '@/interface/table';
import { parseDateTimeFormat_DD_MM_YY } from '@/parse/Dates';
import { Link } from '@/ui-fenextjs/Link';
import { Table } from '@/ui-fenextjs/Table';
import { URL } from '@/url';
import { parseNumberCount } from 'fenextjs';
import { Text } from '@/ui-fenextjs/Text';
import { TransactionStatus } from '@/components/TransactionStatus';

export interface TableTransactionProps extends ITable<ITransaction> {}

export const TableTransaction = ({ ...props }: TableTransactionProps) => {
    return (
        <Table<ITransaction>
            name="Transactiones"
            {...props}
            useCheckbox={false}
            header={[
                {
                    id: 'id',
                    th: 'ID',
                    parse: (transaction) => {
                        return (
                            <Link
                                useT={false}
                                href={URL.dashboard.transaction.index + transaction.id}
                            >
                                {transaction?.id}
                            </Link>
                        );
                    },
                },
                {
                    id: 'price',
                    th: 'Precio',
                    parse: (transaction) => {
                        return (
                            <>
                                {parseNumberCount(transaction?.price)}
                            </>
                        );
                    },
                },
                {
                    id: 'payed_at',
                    th: 'Fecha de Pago',
                    parse: (transaction) => {
                        return transaction?.payed_at ? parseDateTimeFormat_DD_MM_YY(transaction?.payed_at) : <Text tag='strong'>No pagado</Text> ;
                    },
                },
                {
                    id: 'status',
                    th: 'Estado',
                    parse: (transaction) => {
                        return (
                            <TransactionStatus status={transaction?.status}/>
                        );
                    },
                },
                {
                    id: 'description',
                    th: 'Descripccion',
                },
                {
                    id: 'created_at',
                    th: 'Fecha de Creacion',
                    parse: (transaction) => {
                        return parseDateTimeFormat_DD_MM_YY(transaction?.created_at);
                    },
                },
                {
                    id: 'updated_at',
                    th: 'Fecha de Actualizacion',
                    parse: (transaction) => {
                        return parseDateTimeFormat_DD_MM_YY(transaction?.updated_at);
                    },
                },
            ]}
        />
    );
};
