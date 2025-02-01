import React from 'react';
import {
    Container as FenextjsContainer,
    ContainerProps as FenextjsContainerProps,
} from 'fenextjs';

export interface ContainerProps extends FenextjsContainerProps {}
export const Container = ({
    children,
    className = '',
    ...props
}: ContainerProps) => {
    return (
        <FenextjsContainer
            className={`my-project-Container ${className}`}
            {...props}
        >
            {children}
        </FenextjsContainer>
    );
};
