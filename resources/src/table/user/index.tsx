import { IUser } from '@/interface/user';
import { ITable } from '@/interface/table';
import { parseDateTimeFormat_DD_MM_YY } from '@/parse/Dates';
import { Link } from '@/ui-fenextjs/Link';
import { Table } from '@/ui-fenextjs/Table';
import { URL } from '@/url';

export interface TableUserProps extends ITable<IUser> {}

export const TableUser = ({ ...props }: TableUserProps) => {
    return (
        <Table<IUser>
            name="Useres"
            {...props}
            useCheckbox={false}
            header={[
                {
                    id: 'id',
                    th: 'ID',
                    parse: (user) => {
                        return (
                            <Link
                                useT={false}
                                href={URL.dashboard.user.index + user.id}
                            >
                                {user?.id}
                            </Link>
                        );
                    },
                },
                {
                    id: 'name',
                    th: 'Nombre',
                    parse: (user) => {
                        return (
                            <Link
                                useT={false}
                                href={URL.dashboard.user.index + user.id}
                            >
                                {user?.name}
                            </Link>
                        );
                    },
                },
                {
                    id: 'email',
                    th: 'Correo',
                    parse: (user) => {
                        return (
                            <Link
                                useT={false}
                                href={'mailto:' + user.email}
                                target="_blank"
                            >
                                {user?.email}
                            </Link>
                        );
                    },
                },
                {
                    id: 'created_at',
                    th: 'Fecha de Creacion',
                    parse: (user) => {
                        return parseDateTimeFormat_DD_MM_YY(user?.created_at);
                    },
                },
                {
                    id: 'updated_at',
                    th: 'Fecha de Actualizacion',
                    parse: (user) => {
                        return parseDateTimeFormat_DD_MM_YY(user?.updated_at);
                    },
                },
            ]}
        />
    );
};
