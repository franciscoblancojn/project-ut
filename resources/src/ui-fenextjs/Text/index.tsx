import React from 'react';
import { Text as FenextjsText, TextProps as FenextjsTextProps } from 'fenextjs';
import { useLang } from '@/languages';

export interface TextProps extends FenextjsTextProps {}
export const Text = ({ children, className = '', ...props }: TextProps) => {
    const { onTranslate } = useLang();
    return (
        <FenextjsText
            className={`my-project-text ${className}`}
            _t={onTranslate}
            {...props}
        >
            {children}
        </FenextjsText>
    );
};
