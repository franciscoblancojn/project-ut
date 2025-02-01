import React from 'react';
import { Cols as FenextjsCols, ColsProps as FenextjsColsProps } from 'fenextjs';

export interface ColsProps extends FenextjsColsProps {}
export const Cols = ({ children, className = '', ...props }: ColsProps) => {
    return (
        <FenextjsCols className={`my-project-cols ${className}`} {...props}>
            {children}
        </FenextjsCols>
    );
};
