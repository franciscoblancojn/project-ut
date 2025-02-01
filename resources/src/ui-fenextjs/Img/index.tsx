import React from 'react';
import { Img as FenextjsImg, ImgProps as FenextjsImgProps } from 'fenextjs';

export interface ImgProps extends FenextjsImgProps {}
export const Img = ({ className = '', ...props }: ImgProps) => {
    return <FenextjsImg className={`my-project-img ${className}`} {...props} />;
};
