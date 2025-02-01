'use client';

import { useUser } from '@/hook/useUser';
import { Button } from '@/ui-fenextjs/Button';
import { URL } from '@/url';
import { Menu } from 'fenextjs';

export interface HeaderDashboardLeftProps {}

export const HeaderDashboardLeft = ({}: HeaderDashboardLeftProps) => {
    const { onLogOut } = useUser({});
    return (
        <>
            <div className="header-dashboard-left">
                <div className="header-dashboard-left-menu">
                    <Menu
                        items={[
                            {
                                text: 'Dashboard',
                                url: URL.home.index,
                            },
                            {
                                text: 'Usuarios',
                                url: URL.user.index,
                            },
                            {
                                text: 'Clientes',
                                url: URL.client.index,
                            },
                            {
                                text: 'Productos',
                                url: URL.product.index,
                            },
                        ]}
                    />
                </div>
                <Button
                    onClick={onLogOut}
                    full={true}
                    className="header-dashboard-left-btn-exit"
                >
                    Salir
                </Button>
            </div>
        </>
    );
};
