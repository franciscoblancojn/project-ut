import {
    FormAddAmountUser,
    FormAddAmountUserProps,
} from '@/components/Form/AddAmountUser';
import { Modal, ModalProps } from '@/ui-fenextjs/Modal';
import { useModal } from 'fenextjs';

export const NAME = 'ModalAddAmountUser';

export interface ModalAddAmountUserProps
    extends Omit<ModalProps, 'children' | 'name'> {
    form?: FormAddAmountUserProps;
}

export const ModalAddAmountUser = ({
    form,
    ...props
}: ModalAddAmountUserProps) => {
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
                <FormAddAmountUser
                    {...form}
                    onAfterSubmitDataOk={() => {
                        onClose();
                    }}
                />
            </Modal>
        </>
    );
};
