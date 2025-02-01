'use client';

import React from 'react';
import { useLang } from '@/languages';
import { Container } from '@/ui-fenextjs/Container';
import { InputRadio } from '@/ui-fenextjs/Input';
import { Img } from '@/ui-fenextjs/Img';
export interface ChangeLangProps {}

export const ChangeLang = ({}: ChangeLangProps) => {
    const { setCurrentLang, currentLang } = useLang();
    return (
        <>
            <Container className="change-lang">
                <InputRadio<'es' | 'en'>
                    defaultValue={{
                        id: currentLang ?? 'es',
                        data: currentLang ?? 'es',
                        label: (currentLang ?? 'es')?.toUpperCase(),
                    }}
                    items={[
                        {
                            id: 'es',
                            data: 'es',
                            label: (
                                <>
                                    <Img
                                        src={
                                            'https://country-state-city-nextjs.vercel.app/country/28_espana/img.png'
                                        }
                                    />
                                </>
                            ),
                        },
                        {
                            id: 'en',
                            data: 'en',
                            label: (
                                <>
                                    <Img
                                        src={
                                            'https://country-state-city-nextjs.vercel.app/country/55_estados_unidos/img.png'
                                        }
                                    />
                                </>
                            ),
                        },
                    ]}
                    onChange={(e) => {
                        setCurrentLang(e?.data);
                    }}
                />
            </Container>
        </>
    );
};
