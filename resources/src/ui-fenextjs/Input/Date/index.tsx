import React from 'react';
import {
    InputDate as FenextjsInputDate,
    InputDateProps as FenextjsInputDateProps,
} from 'fenextjs';
import { useLang } from '@/languages';

export interface InputDateProps extends FenextjsInputDateProps {}
export const InputDate = ({ className = '', ...props }: InputDateProps) => {
    const { onTranslate } = useLang();
    return (
        <FenextjsInputDate
            className={`my-project-input-text ${className}`}
            optionalText='(Opcional)'
            _t={onTranslate}
            {...props}
        />
    );
};
