import { InputSelectITransactionStatus } from '@/components/Select/ITransactionStatus';
import { useFilter } from '@/hook/useFilter';
import { SvgTrash } from 'fenextjs';

export interface FilterITransactionStatusProps {}

export const FilterITransactionStatus = ({}: FilterITransactionStatusProps) => {
    const { onChangeData, data } = useFilter({});
    return (
        <>
            <div className="filter-transaction-status">
                <InputSelectITransactionStatus
                    key={data.ITransactionStatus}
                    onChange={onChangeData('ITransactionStatus')}
                    placeholder="Estado de Transaccion"
                    value={data.ITransactionStatus}
                />
                {data?.ITransactionStatus != undefined && (
                    <div
                        className={`
                            filter-transaction-status-clear
                        `}
                        onClick={() => {
                            onChangeData('ITransactionStatus')(undefined);
                        }}
                    >
                        <SvgTrash />
                    </div>
                )}
            </div>
        </>
    );
};
