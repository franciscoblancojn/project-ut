import { useQueryUser } from '@/api/user/query';
import { UserDetails } from '@/components/UserDetails';
import { useUser } from '@/hook/useUser';
import { LayoutDashboard } from '@/layout/Dashboard';
import { LayoutSimple } from '@/layout/Simple';
import { Title } from '@/ui-fenextjs/Title';

export const PageHome = () => {
    const { user: userLocal, load } = useUser({});
    const { data, isLoading, error } = useQueryUser({
        input: {
            id: userLocal?.id,
        },
    });
    const user = data?.data?.items?.[0];
    return (
        <>
            <LayoutDashboard>
                <LayoutSimple loader={isLoading || !load} error={error?.error}>
                    <Title>Informacion Personal</Title>
                    <br />
                    <UserDetails user={user} />
                </LayoutSimple>
            </LayoutDashboard>
        </>
    );
};
