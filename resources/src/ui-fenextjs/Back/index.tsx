import React from 'react';
import {
    Back as FenextjsBack,
    BackProps as FenextjsBackProps,
    useWindowRouter,
} from 'fenextjs';

export interface BackProps extends FenextjsBackProps {}
export const Back = ({ children, className = '', ...props }: BackProps) => {
    return (
        <FenextjsBack
            className={`my-project-back ${className}`}
            {...props}
            useRouterCustom={useWindowRouter}
        >
            {children}
        </FenextjsBack>
    );
};
