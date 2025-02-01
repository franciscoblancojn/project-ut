import React from 'react';
import { Form as FenextjsForm, FormProps as FenextjsFormProps } from 'fenextjs';

export interface FormProps extends FenextjsFormProps {}
export const Form = ({ children, className = '', ...props }: FormProps) => {
    return (
        <FenextjsForm className={`my-project-form ${className}`} {...props}>
            {children}
        </FenextjsForm>
    );
};
