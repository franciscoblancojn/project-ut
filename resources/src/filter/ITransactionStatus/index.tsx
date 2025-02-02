import { InputSelectITransactionStatus } from "@/components/Select/ITransactionStatus"
import { useFilter } from "@/hook/useFilter"

export interface FilterITransactionStatusProps {

}

export const FilterITransactionStatus = ({}:FilterITransactionStatusProps) => {
    const {onChangeData} = useFilter({})
    return <>
        <InputSelectITransactionStatus
        onChange={onChangeData("ITransactionStatus")}
        placeholder="Estado de Transaccion"
        />
    </>
}