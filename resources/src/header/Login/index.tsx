import { ChangeLang } from '@/components/ChangeLang';
import { Logo } from '@/components/Logo';
import { Container } from '@/ui-fenextjs/Container';
import { Link } from '@/ui-fenextjs/Link';
import { Text } from '@/ui-fenextjs/Text';
import { Title } from '@/ui-fenextjs/Title';
import { URL } from '@/url';
import { InputSwich, useTheme } from 'fenextjs';

export interface HeaderLoginProps {}

export const HeaderLogin = ({}: HeaderLoginProps) => {
    const { setTheme, theme } = useTheme({});
    return (
        <>
            <Container className="header-login">
                <Link href={URL.home.index} className="header-login-logo">
                    <Logo />
                    <Title tag="h4" useT={false}>
                        Proyecto UT
                    </Title>
                </Link>

                <div className="header-login-right">
                    <label className="header-login-right-theme">
                        <Text>Tema oscuro</Text>
                        <InputSwich
                            value={theme == 'dark'}
                            onChange={(e) => {
                                setTheme(e ? 'dark' : 'light');
                            }}
                        />
                    </label>
                    <ChangeLang />
                </div>
            </Container>
        </>
    );
};
