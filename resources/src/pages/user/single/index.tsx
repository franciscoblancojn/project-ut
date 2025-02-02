import { useQueryUser } from '@/api/client/query';
import { LayoutDashboard } from '@/layout/Dashboard';
import { LayoutTable } from '@/layout/Table';
import { TableUser } from '@/table/user';
import { Text } from '@/ui-fenextjs/Text';
import { Title } from '@/ui-fenextjs/Title';
import { useParams } from 'react-router-dom';

export const PageUserSingle = () => {
    const {id} = useParams()
    const { data, isLoading, error } = useQueryUser({
        input:{
            id
        }
    });
    return (
        <>
            <LayoutDashboard>
                <LayoutTable
                    top={
                        <>
                            <Title>Usuarios</Title>
                            <Text>Aqui puedes gestionar tus usuarios</Text>
                        </>
                    }
                >
                    <TableUser
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
