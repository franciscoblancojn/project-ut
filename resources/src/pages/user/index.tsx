import { useQueryUser } from '@/api/client/query';
import { LayoutDashboard } from '@/layout/Dashboard';
import { TableUser } from '@/table/user';

export const PageUser = () => {
    const { data, isLoading, error } = useQueryUser({});
    return (
        <>
            <LayoutDashboard>
                <TableUser
                    items={data?.data.items}
                    nItems={data?.data.count}
                    loader={isLoading}
                    error={error?.error}
                />
            </LayoutDashboard>
        </>
    );
};
