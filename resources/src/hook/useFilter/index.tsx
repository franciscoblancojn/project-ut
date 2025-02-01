import {
    useFilter as useFilterFenextjs,
    useFilterProps as useFilterFenextjsProps,
} from 'fenextjs';

export interface useFilterCustomDataProps {
    test?: string;
}

export interface useFilterProps
    extends useFilterFenextjsProps<useFilterCustomDataProps> {}

export const useFilter = ({ ...props }: useFilterProps) => {
    return useFilterFenextjs<useFilterCustomDataProps>({
        ...props,
    });
};
