import React from 'react';
import {
    Modal as FenextjsModal,
    ModalProps as FenextjsModalProps,
} from 'fenextjs';

export interface ModalProps extends FenextjsModalProps {}
export const Modal = ({
    ...props
}: ModalProps) => {
    return (
        <FenextjsModal
            {...props}
        />
    );
};
