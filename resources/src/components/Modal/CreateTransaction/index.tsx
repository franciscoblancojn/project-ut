import { FormCreateTransaction, FormCreateTransactionProps } from "@/components/Form/CreateTransaction";
import { Modal, ModalProps } from "@/ui-fenextjs/Modal";
import { useModal } from "fenextjs";

export const NAME = "ModalCreateTransaction";

export interface ModalCreateTransactionProps
    extends Omit<ModalProps, "children" | "name"> {
    form?: FormCreateTransactionProps
}

export const ModalCreateTransaction = ({ form, ...props }: ModalCreateTransactionProps) => {
    const { onClose, active } = useModal({
        name: NAME,
        activeByNameLocalStorage: true,
    });
    return (
        <>
            <Modal
                {...props}
                active={active}
                name={NAME}
                onClose={onClose}
                type="right"
            >
                <FormCreateTransaction
                    {...form}
                    onAfterSubmitDataOk={() => {
                        onClose();
                    }}
                />
            </Modal>
        </>
    );
};
