import React from 'react';
import {
    Title as FenextjsTitle,
    TitleProps as FenextjsTitleProps,
} from 'fenextjs';
import { useLang } from '@/languages';

export interface TitleProps extends FenextjsTitleProps {}
export const Title = ({ children, className = '', ...props }: TitleProps) => {
    const { onTranslate } = useLang();
    return (
        <FenextjsTitle
            className={`my-project-title ${className}`}
            _t={onTranslate}
            {...props}
        >
            {children}
        </FenextjsTitle>
    );
};
