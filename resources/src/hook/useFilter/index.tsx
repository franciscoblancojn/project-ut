import { ITransactionStatus } from '@/interface/transaction';
import {
    useFilter as useFilterFenextjs,
    useFilterProps as useFilterFenextjsProps,
} from 'fenextjs';

export interface useFilterCustomDataProps {
    ITransactionStatus?: ITransactionStatus;
}

export interface useFilterProps
    extends useFilterFenextjsProps<useFilterCustomDataProps> {}

export const useFilter = ({ ...props }: useFilterProps) => {
    return useFilterFenextjs<useFilterCustomDataProps>({
        ...props,
    });
};
