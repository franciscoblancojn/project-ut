import React from 'react';
import { Link as FenextjsLink, LinkProps as FenextjsLinkProps } from 'fenextjs';
import { useLang } from '@/languages';

export interface LinkProps extends FenextjsLinkProps {}
export const Link = ({ children, className = '', ...props }: LinkProps) => {
    const { onTranslate } = useLang();
    return (
        <FenextjsLink
            className={`my-project-Link ${className}`}
            _t={onTranslate}
            {...props}
        >
            {children}
        </FenextjsLink>
    );
};
