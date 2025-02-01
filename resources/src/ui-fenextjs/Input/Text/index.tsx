import React from 'react';
import {
    InputText as FenextjsInputText,
    InputTextProps as FenextjsInputTextProps,
} from 'fenextjs';
import { useLang } from '@/languages';

export interface InputTextProps extends FenextjsInputTextProps {}
export const InputText = ({ className = '', ...props }: InputTextProps) => {
    const { onTranslate } = useLang();
    return (
        <FenextjsInputText
            className={`my-project-input-text ${className}`}
            _t={onTranslate}
            {...props}
        />
    );
};
