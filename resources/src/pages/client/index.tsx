import { useQueryClient } from '@/api/client/query';
import { LayoutDashboard } from '@/layout/Dashboard';
import { TableClient } from '@/table/client';

export const PageClient = () => {
    const { data, isLoading, error } = useQueryClient({});
    return (
        <>
            <LayoutDashboard>
                <TableClient
                    items={data?.data.items}
                    nItems={data?.data.count}
                    loader={isLoading}
                    error={error?.error}
                />
            </LayoutDashboard>
        </>
    );
};

export default PageClient;
