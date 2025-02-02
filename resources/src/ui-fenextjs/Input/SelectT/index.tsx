import React from 'react';
import {
    InputSelectT as FenextjsInputSelectT,
    InputSelectTProps as FenextjsInputSelectTProps,
} from 'fenextjs';
import { useLang } from '@/languages';

export interface InputSelectTProps<T> extends FenextjsInputSelectTProps<T> {}
export const InputSelectT = <T,>({
    className = '',
    ...props
}: InputSelectTProps<T>) => {
    const { onTranslate } = useLang();
    return (
        <FenextjsInputSelectT<T>
            className={`my-project-input-select ${className}`}
            _t={onTranslate}
            {...props}
        />
    );
};
