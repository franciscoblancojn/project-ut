import { DateDataProps } from 'fenextjs';

export interface parseInputToQueryProps {
    input?: object;
}

export const parseInputToQuery = ({ input }: parseInputToQueryProps) => {
    const objInput: any = {};
    Object.keys(input ?? {}).forEach((key) => {
        const v = (input as any)?.[key];
        if (v != undefined && v != null) {
            if (key == 'date') {
                const dateValue = v as DateDataProps;
                if (dateValue?.type == 'normal' && dateValue?.date) {
                    objInput['date'] = dateValue?.date?.toISOString();
                }
                if (
                    dateValue?.type == 'range' &&
                    dateValue?.dateRange &&
                    dateValue?.dateRange?.[0] &&
                    dateValue?.dateRange?.[1]
                ) {
                    objInput['date_start'] =
                        dateValue?.dateRange?.[0]?.toISOString();
                    objInput['date_end'] =
                        dateValue?.dateRange?.[1]?.toISOString();
                }
            } else if (key == 'search' && v == '') {
                return;
            } else {
                objInput[key] = v;
            }
        }
    });
    const query = new URLSearchParams(
        objInput as Record<string, string>,
    ).toString();
    return query;
};
