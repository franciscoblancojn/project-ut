import { useQueryUser } from '@/api/client/query';
import { UserDetails } from '@/components/UserDetails';
import { LayoutDashboard } from '@/layout/Dashboard';
import { LayoutSimple } from '@/layout/Simple';
import { Back } from '@/ui-fenextjs/Back';
import { useParams } from 'react-router-dom';

export const PageUserSingle = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useQueryUser({
        input: {
            id,
        },
    });

    const user = data?.data?.items?.[0];

    return (
        <>
            <LayoutDashboard>
                <Back />
                <br />
                <LayoutSimple loader={isLoading} error={error?.error}>
                    <UserDetails user={user} />
                </LayoutSimple>
            </LayoutDashboard>
        </>
    );
};
