import React from 'react';
import { Box as FenextjsBox, BoxProps as FenextjsBoxProps } from 'fenextjs';

export interface BoxProps extends FenextjsBoxProps {}
export const Box = ({ children, className = '', ...props }: BoxProps) => {
    return (
        <FenextjsBox className={`my-project-box ${className}`} {...props}>
            {children}
        </FenextjsBox>
    );
};
