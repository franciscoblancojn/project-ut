import React from 'react';
import {
    Button as FenextjsButton,
    ButtonProps as FenextjsButtonProps,
} from 'fenextjs';
import { useLang } from '@/languages';

export interface ButtonProps extends FenextjsButtonProps {}
export const Button = ({ children, className = '', ...props }: ButtonProps) => {
    const { onTranslate } = useLang();
    return (
        <FenextjsButton
            className={`my-project-button ${className}`}
            _t={onTranslate}
            {...props}
        >
            {children}
        </FenextjsButton>
    );
};
