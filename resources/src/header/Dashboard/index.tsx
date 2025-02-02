'use client';

import { ChangeLang } from '@/components/ChangeLang';
import { Logo } from '@/components/Logo';
import { useUser } from '@/hook/useUser';
import { Text } from '@/ui-fenextjs/Text';
import { Title } from '@/ui-fenextjs/Title';
import { User } from '@/ui-fenextjs/User';
import { ButtonMenu, InputSwich, useTheme } from 'fenextjs';

export interface HeaderDashboardProps {}

export const HeaderDashboard = ({}: HeaderDashboardProps) => {
    const { user } = useUser({});
    const { setTheme, theme } = useTheme({});
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
                <div className="header-dashboard-right">
                    <label className="header-dashboard-right-theme">
                        <Text>Tema oscuro</Text>
                        <InputSwich
                            value={theme == 'dark'}
                            onChange={(e) => {
                                setTheme(e ? 'dark' : 'light');
                            }}
                        />
                    </label>
                    <ChangeLang />
                    <User user={user as any} />
                </div>
            </div>
        </>
    );
};
