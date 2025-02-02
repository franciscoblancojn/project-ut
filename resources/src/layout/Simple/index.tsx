import { ErrorComponent } from '@/ui-fenextjs/ErrorComponent';
import { ErrorFenextjs, Loader } from 'fenextjs';
import { ReactNode } from 'react';

export interface LayoutSimpleProps {
    loader?: boolean;
    error?: ErrorFenextjs;
    children?: ReactNode;
}

export const LayoutSimple = ({
    children,
    error,
    loader,
}: LayoutSimpleProps) => {
    return (
        <>
            <div className="layout-simple">
                {loader ? (
                    <Loader />
                ) : (
                    <>
                        {error ? (
                            <ErrorComponent error={error} />
                        ) : (
                            <>{children}</>
                        )}
                    </>
                )}
            </div>
        </>
    );
};
