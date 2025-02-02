'use client';

import { IUser } from '@/interface/user';
import {
    parseDateTimeFormat_DD_MM_YY,
    parseDateTimeFormat_Hours_Minutes_AM_PM,
} from '@/parse/Dates';
import { Link } from '@/ui-fenextjs/Link';
import { Text } from '@/ui-fenextjs/Text';
import { Title } from '@/ui-fenextjs/Title';

export interface UserDetailsProps {
    user: IUser;
}

export const UserDetails = ({ user }: UserDetailsProps) => {
    return (
        <>
            <div className="user-details">
                <Title>Usuario:</Title>
                <Title>#{user?.id}</Title>
                <Text tag="strong">Nombre :</Text>
                <Text useT={false}>{user?.name}</Text>

                <Text tag="strong">Email :</Text>
                <Link
                    useT={false}
                    href={'mailto:' + user.email}
                    target="_blank"
                >
                    {user?.email}
                </Link>

                <Text tag="strong">Fecha de Creacion :</Text>
                <Text useT={false}>
                    {parseDateTimeFormat_DD_MM_YY(user?.created_at)}{' '}
                    {parseDateTimeFormat_Hours_Minutes_AM_PM(user?.created_at)}
                </Text>

                <Text tag="strong">Fecha de Actualizacion :</Text>
                <Text useT={false}>
                    {parseDateTimeFormat_DD_MM_YY(user?.updated_at)}{' '}
                    {parseDateTimeFormat_Hours_Minutes_AM_PM(user?.updated_at)}
                </Text>
            </div>
        </>
    );
};
