'use client';

import { useUser } from '@/hook/useUser';
import { Button } from '@/ui-fenextjs/Button';
import { Link } from '@/ui-fenextjs/Link';
import { URL } from '@/url';

export interface HeaderDashboardLeftProps {}

export const HeaderDashboardLeft = ({}: HeaderDashboardLeftProps) => {
    const { onLogOut ,user} = useUser({});

    return (
        <>
            <div className="header-dashboard-left">
                <div className="header-dashboard-left-menu">
                    <Link
                        href={URL.dashboard.index}
                        className="fenext-menu-item-a"
                    >
                        Perfil
                    </Link>
                    {
                        user?.role === "admin"
                        &&
                        <>
                            <Link
                                href={URL.dashboard.user.index}
                                className="fenext-menu-item-a"
                            >
                                Usuarios
                            </Link>
                        </>
                    }
                    <Link
                        href={URL.dashboard.transaction.index}
                        className="fenext-menu-item-a"
                    >
                        Transacciones
                    </Link>
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
