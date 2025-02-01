import React from 'react';
import {
    InputRadio as FenextjsInputRadio,
    InputRadioProps as FenextjsInputRadioProps,
} from 'fenextjs';
import { useLang } from '@/languages';

export interface InputRadioProps<T> extends FenextjsInputRadioProps<T> {}
export const InputRadio = <T,>({
    classNameContent = '',
    ...props
}: InputRadioProps<T>) => {
    const { onTranslate } = useLang();
    return (
        <FenextjsInputRadio
            classNameContent={`my-project-input-radio ${classNameContent}`}
            _t={onTranslate}
            {...props}
        />
    );
};
