import { FilterDate, FilterSearch } from 'fenextjs';
import { ReactNode } from 'react';

export interface LayoutTableProps {
    top?: ReactNode;
    children?: ReactNode;

    filterDisabled?:{
        search?:boolean
        date?:boolean
    }
    extraFilter?:ReactNode
}

export const LayoutTable = ({ children, top,filterDisabled ,extraFilter}: LayoutTableProps) => {
    return (
        <>
            <div className="layout-table">
                {top && <div className="layout-table-top">{top}</div>}
                <div className="layout-table-filter">
                    {
                        filterDisabled?.search !== false && <FilterSearch />
                    }
                    {
                        filterDisabled?.date !== false && <FilterDate />
                    }
                    {extraFilter}
                    
                </div>
                <div className="layout-table-content">{children}</div>
            </div>
        </>
    );
};
