import React from 'react';
import {
    InputPassword as FenextjsInputPassword,
    InputPasswordProps as FenextjsInputPasswordProps,
} from 'fenextjs';
import { useLang } from '@/languages';

export interface InputPasswordProps extends FenextjsInputPasswordProps {}
export const InputPassword = ({
    className = '',
    ...props
}: InputPasswordProps) => {
    const { onTranslate } = useLang();
    return (
        <FenextjsInputPassword
            className={`my-project-input-password ${className}`}
            _t={onTranslate}
            {...props}
        />
    );
};
