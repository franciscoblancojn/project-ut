import { HeaderDashboard } from '@/header/Dashboard';
import { Container } from '@/ui-fenextjs/Container';
import { LayoutGridMenuTopLeft } from 'fenextjs';
import { ReactNode } from 'react';
import { LayoutAuth } from '../Auth';
import { HeaderDashboardLeft } from '@/header/DashboardLeft';

export interface LayoutDashboardProps {
    children?: ReactNode;
}

export const LayoutDashboard = ({ children }: LayoutDashboardProps) => {
    return (
        <>
            <LayoutAuth>
                <LayoutGridMenuTopLeft
                    useHeaderButtonMenu={true}
                    className="layout-dashboard"
                    menuTop={<HeaderDashboard />}
                    menuLeft={<HeaderDashboardLeft />}
                >
                    <div className="layout-dashboard-content">
                        <Container>{children}</Container>
                    </div>
                </LayoutGridMenuTopLeft>
            </LayoutAuth>
        </>
    );
};
