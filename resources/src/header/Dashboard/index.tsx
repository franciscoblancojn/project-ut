'use client';

import { ChangeLang } from '@/components/ChangeLang';
import { Logo } from '@/components/Logo';
import { useUser } from '@/hook/useUser';
import { Button } from '@/ui-fenextjs/Button';
import { Text } from '@/ui-fenextjs/Text';
import { Title } from '@/ui-fenextjs/Title';
import { User } from '@/ui-fenextjs/User';
import { ButtonMenu, DropDown } from 'fenextjs';

export interface HeaderDashboardProps {}

export const HeaderDashboard = ({}: HeaderDashboardProps) => {
    const { user, onLogOut } = useUser({});
    return (
        <>
            <div className="header-dashboard">
                <ButtonMenu>
                    <div className="header-dashboard-logo">
                        <Logo />
                        <Title tag="h4" useT={false}>
                            Proyecto UT
                        </Title>
                    </div>
                </ButtonMenu>
                <div>
                    <DropDown
                        header={
                            <>
                                <User user={user ?? undefined} />
                            </>
                        }
                        className="header-dashboard-dropdown-user"
                        classNameBody="header-dashboard-dropdown-user-body"
                    >
                        <div className="header-dashboard-dropdown-user-lang">
                            <Text tag="strong">Idiomas</Text>
                            <ChangeLang />
                        </div>
                        <Button
                            onClick={onLogOut}
                            full={true}
                            size="extra-small"
                        >
                            Salir
                        </Button>
                    </DropDown>
                </div>
            </div>
        </>
    );
};
