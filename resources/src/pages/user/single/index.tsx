import { useQueryTransaction } from '@/api/transaction/query';
import { useQueryUser } from '@/api/user/query';
import { UserDetails } from '@/components/UserDetails';
import { LayoutDashboard } from '@/layout/Dashboard';
import { LayoutSimple } from '@/layout/Simple';
import { LayoutTable } from '@/layout/Table';
import { TableTransaction } from '@/table/transaction';
import { Back } from '@/ui-fenextjs/Back';
import { Title } from '@/ui-fenextjs/Title';
import { useParams } from 'react-router-dom';

export const PageUserSingle = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useQueryUser({
        input: {
            id,
        },
        usedataFilter:false,
        usepagination:false
    });
    const QueryTransaction = useQueryTransaction({
        input: {
            user_id: id
        }
    })

    const user = data?.data?.items?.[0];

    return (
        <>
            <LayoutDashboard>
                <Back />
                <br />
                <LayoutSimple loader={isLoading} error={error?.error}>
                    <LayoutTable
                        top={
                            <>
                                <UserDetails user={user} />
                                <br />
                                <Title>Transacciones:</Title>
                            </>
                        }
                    >

                        <TableTransaction
                            items={QueryTransaction?.data?.data.items}
                            nItems={QueryTransaction?.data?.data.count}
                            loader={QueryTransaction?.isLoading}
                            error={QueryTransaction?.error?.error}
                        />
                    </LayoutTable>
                </LayoutSimple>
            </LayoutDashboard>
        </>
    );
};
