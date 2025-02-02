import { useQueryTransaction } from '@/api/transaction/query';
import { useQueryUser } from '@/api/user/query';
import { ModalAddAmountUser } from '@/components/Modal/AddAmountUser';
import { ModalCreateTransaction } from '@/components/Modal/CreateTransaction';
import { UserDetails } from '@/components/UserDetails';
import { FilterITransactionStatus } from '@/filter/ITransactionStatus';
import { useUser } from '@/hook/useUser';
import { LayoutDashboard } from '@/layout/Dashboard';
import { LayoutSimple } from '@/layout/Simple';
import { LayoutTable } from '@/layout/Table';
import { TableTransaction } from '@/table/transaction';
import { Back } from '@/ui-fenextjs/Back';
import { Button } from '@/ui-fenextjs/Button';
import { Title } from '@/ui-fenextjs/Title';
import { useParams } from 'react-router-dom';

export const PageUserSingle = () => {
    const { id } = useParams();
    const { user:userLocal } = useUser({});
    const { data, isLoading, error } = useQueryUser({
        input: {
            id,
        },
        usedataFilter: false,
        usepagination: false,
    });
    const QueryTransaction = useQueryTransaction({
        input: {
            user_id: id,
        },
    });

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
                                <div className='page-user-single-transaction-top'>
                                <UserDetails user={user} />
                                    {
                                        userLocal?.role === "admin"
                                        &&
                                        <ModalAddAmountUser
                                            form={{
                                                defaultValue:{
                                                    user_id:id
                                                }
                                            }}
                                            ElementActionModalActive={
                                                <>
                                                <Button>
                                                    Agregar Saldo
                                                </Button>
                                                </>
                                            }
                                        />
                                    }
                                </div>
                                <br />
                                <div className='page-user-single-transaction-top'>
                                    <Title>Transacciones:</Title>
                                    {
                                        userLocal?.role === "admin"
                                        &&
                                        <ModalCreateTransaction
                                            form={{
                                                defaultValue:{
                                                    user_id:id
                                                }
                                            }}
                                            ElementActionModalActive={
                                                <>
                                                <Button>
                                                    Crear Transaccion
                                                </Button>
                                                </>
                                            }
                                        />
                                    }
                                </div>
                            </>
                        }
                        filterDisabled={{
                            search: false,
                        }}
                        extraFilter={
                            <>
                                <div>
                                    {' '}
                                    <FilterITransactionStatus />
                                </div>
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
