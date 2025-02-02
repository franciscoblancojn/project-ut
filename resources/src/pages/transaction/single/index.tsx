import { useQueryTransaction } from '@/api/transaction/query';
import { LayoutDashboard } from '@/layout/Dashboard';
import { LayoutSimple } from '@/layout/Simple';
import { Back } from '@/ui-fenextjs/Back';
import { useParams } from 'react-router-dom';

export const PageTransactionSingle = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useQueryTransaction({
        input: {
            id,
        },
        usedataFilter: false,
        usepagination: false,
    });

    const transaction = data?.data?.items?.[0];

    return (
        <>
            <LayoutDashboard>
                <Back />
                <br />
                <LayoutSimple loader={isLoading} error={error?.error}>
                    {JSON.stringify(transaction)}
                </LayoutSimple>
            </LayoutDashboard>
        </>
    );
};
