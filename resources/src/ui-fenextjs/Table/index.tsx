import React from 'react';
import {
    Table as FenextjsTable,
    TableProps as FenextjsTableProps,
} from 'fenextjs';
import { useLang } from '@/languages';
import { ITable } from '@/interface/table';
import { Text } from '../Text';

export interface TableProps<T>
    extends Omit<FenextjsTableProps<T>, 'items'>,
        ITable<T> {}
export const Table = <T,>({
    classNameContent = '',
    items,
    ...props
}: TableProps<T>) => {
    const { onTranslate } = useLang();
    return (
        <FenextjsTable<T>
            classNameContent={`my-project-table ${classNameContent}`}
            _t={onTranslate}
            items={items ?? []}
            {...props}
            notResult={<Text>No se encontraron resultados</Text>}
        />
    );
};
