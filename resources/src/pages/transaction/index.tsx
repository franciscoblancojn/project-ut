import { useQueryTransaction } from '@/api/transaction/query';
import { LayoutDashboard } from '@/layout/Dashboard';
import { LayoutTable } from '@/layout/Table';
import { TableTransaction } from '@/table/transaction';
import { Text } from '@/ui-fenextjs/Text';
import { Title } from '@/ui-fenextjs/Title';

export const PageTransaction = () => {
    const { data, isLoading, error } = useQueryTransaction({});
    return (
        <>
            <LayoutDashboard>
                <LayoutTable
                    top={
                        <>
                            <Title>Transacciones</Title>
                            <Text>Aqui puedes gestionar tus transacciones</Text>
                        </>
                    }
                >
                    <TableTransaction
                        items={data?.data.items}
                        nItems={data?.data.count}
                        loader={isLoading}
                        error={error?.error}
                    />
                </LayoutTable>
            </LayoutDashboard>
        </>
    );
};
