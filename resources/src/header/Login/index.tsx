import { ChangeLang } from '@/components/ChangeLang';
import { Logo } from '@/components/Logo';
import { Container } from '@/ui-fenextjs/Container';
import { Link } from '@/ui-fenextjs/Link';
import { Title } from '@/ui-fenextjs/Title';
import { URL } from '@/url';

export interface HeaderLoginProps {}

export const HeaderLogin = ({}: HeaderLoginProps) => {
    return (
        <>
            <Container className="header-login">
                <Link href={URL.home.index} className="header-login-logo">
                    <Logo />
                    <Title tag="h4" useT={false}>
                        Proyecto UT
                    </Title>
                </Link>
                <div>
                    <ChangeLang />
                </div>
            </Container>
        </>
    );
};
