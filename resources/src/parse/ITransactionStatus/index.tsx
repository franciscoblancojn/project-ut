// import { JornadasStatus } from "@/services/jornadas";
import { ITransactionStatus } from '@/interface/transaction';
import { parseEnum_to_String } from 'fenextjs-functions';

export const parseITransactionStatus = parseEnum_to_String<ITransactionStatus>(
    {
        cancel: 'Cancelado',
        complete: 'Completado',
        pending: 'Pendiente',
    },
    {
        valueNull: 'No disponible',
    },
);
