import { ProjectInfo } from '@/components/ProjectInfo';
import { HeaderLogin } from '@/header/Login';
import { Container } from '@/ui-fenextjs/Container';
import { LayoutGridMenuTop } from 'fenextjs';
import { ReactNode } from 'react';

export interface LayoutLoginProps {
    children?: ReactNode;
}

export const LayoutLogin = ({ children }: LayoutLoginProps) => {
    return (
        <>
            <LayoutGridMenuTop
                className="layout-login"
                menuTop={<HeaderLogin />}
            >
                <div className="layout-login-content">
                    <Container>
                        <ProjectInfo />
                        <div>{children}</div>
                    </Container>
                </div>
            </LayoutGridMenuTop>
        </>
    );
};
