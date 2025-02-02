import { Button } from '@/ui-fenextjs/Button';
import { Link } from '@/ui-fenextjs/Link';
import { Text } from '@/ui-fenextjs/Text';
import { Title } from '@/ui-fenextjs/Title';
import { Logo } from '../Logo';
export interface ProjectInfoProps {}

export const ProjectInfo = ({}: ProjectInfoProps) => {
    return (
        <>
            <div className="project-info">
                <div className="project-info-top">
                    <Logo />
                    <Title tag="h4" useT={false}>
                        Proyecto UT
                    </Title>
                </div>
                <Text>Este es el Proyecto Users / Transacctions.</Text>
                <Text>
                    Espero les guste la integracion que hice con Laravel como
                    Backend y vite, react y fenextjs como fronted
                </Text>
                <Text>
                    Es mi primera ves trabajando con Laravel espero les guste mi
                    codigo.
                </Text>
                <Text>
                    Pueden usar useAdmin el cual tiene acceso a todos los
                    usuarios y transacciones:
                </Text>
                <div>
                    <Text tag="strong" useT={false}>
                        <Text tag="strong">Usuario</Text> : userAdmin@gmail.com
                    </Text>
                    {' -- '}
                    <Text tag="strong" useT={false}>
                        <Text tag="strong">Contraseña</Text> : user1234
                    </Text>
                </div>
                <Text>
                    O usar useClient el cual solo puede acceder a su informacion
                    y sus transacciones
                </Text>
                <div>
                    <Text tag="strong" useT={false}>
                        <Text tag="strong">Usuario</Text> : userClient@gmail.com
                    </Text>
                    {' -- '}
                    <Text tag="strong" useT={false}>
                        <Text tag="strong">Contraseña</Text> : user1234
                    </Text>
                </div>
                <Link href={'https://fenextjs-doc.vercel.app'} target="_blank">
                    <Button>
                        Pueden ver Fenextjs(Libreria desarrollada por mi) aqui
                    </Button>
                </Link>
            </div>
        </>
    );
};
