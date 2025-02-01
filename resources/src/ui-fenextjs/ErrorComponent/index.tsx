import React from 'react';
import {
    ErrorComponent as FenextjsErrorComponent,
    ErrorComponentProps as FenextjsErrorComponentProps,
} from 'fenextjs';
import { useLang } from '@/languages';

export interface ErrorComponentProps extends FenextjsErrorComponentProps {}
export const ErrorComponent = ({
    className = '',
    ...props
}: ErrorComponentProps) => {
    const { onTranslate } = useLang();
    return (
        <FenextjsErrorComponent
            className={`my-project-error-component ${className}`}
            _t={onTranslate}
            {...props}
        />
    );
};
