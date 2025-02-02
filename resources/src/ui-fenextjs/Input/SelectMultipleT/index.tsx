import React from 'react';
import {
    InputSelectMultipleT as FenextjsInputSelectMultipleT,
    InputSelectMultipleTProps as FenextjsInputSelectMultipleTProps,
} from 'fenextjs';
import { useLang } from '@/languages';

export interface InputSelectMultipleTProps<T>
    extends FenextjsInputSelectMultipleTProps<T> {}
export const InputSelectMultipleT = <T,>({
    className = '',
    ...props
}: InputSelectMultipleTProps<T>) => {
    const { onTranslate } = useLang();
    return (
        <FenextjsInputSelectMultipleT<T>
            className={`my-project-input-select-mutiple ${className}`}
            _t={onTranslate}
            {...props}
        />
    );
};
