import React from 'react';
import {
    Back as FenextjsBack,
    BackProps as FenextjsBackProps,
    useWindowRouter,
} from 'fenextjs';
import { useLang } from '@/languages';

export interface BackProps extends FenextjsBackProps {}
export const Back = ({ children = "Atras", className = '', ...props }: BackProps) => {
    const { onTranslate } = useLang();
    return (
        <FenextjsBack
            _t={onTranslate}
            className={`my-project-back ${className}`}
            {...props}
            useRouterCustom={useWindowRouter}
        >
            {children}
        </FenextjsBack>
    );
};
