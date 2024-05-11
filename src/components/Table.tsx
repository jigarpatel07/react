import React, { useState, useEffect } from 'react';
import classNames from 'classnames'

const Table = ({ data, columns, itemsPerPage }: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);
    const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

    useEffect(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        setCurrentItems(data.slice(indexOfFirstItem, indexOfLastItem));
    }, [currentPage, data, itemsPerPage]);

    return (
        <div className='flex flex-col gap-4 '>
            <table className='bg-[#282828] w-full rounded-lg overflow-hidden'>
                <thead >
                    <tr className='bg-[#aeaeae] w-full text-[#282828] text-center'>
                        {columns.map((column: any) => (
                            <th key={column.accessorKey}>{column.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody >
                    {currentItems?.map((item: any, index) => (
                        <tr key={index}>
                            {columns.map((column: any) => (
                                <td key={column.accessorKey} className='text-center'>
                                    {column.cell ? column.cell({ row: { original: item } }) : item[column.accessorKey]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
};

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }: any) => {

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pages = [];

    // Function to add a page number to the list
    const addPage = (pageNumber: number) => {
        pages.push(
            <li key={pageNumber} className={classNames('text-[#aeaeae] text-base text-center', pageNumber === currentPage ? "bg-[#282828] rounded-[50%] w-5 " : "")}>
                <button onClick={() => paginate(pageNumber)}>{pageNumber}</button>
            </li>
        );
    };

    // Add first page if not already added
    if (currentPage > 3) {
        addPage(1);
        if (currentPage > 4) pages.push(<li key="ellipsis_start">...</li>);
    }

    // Add pages around the current page
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        if (i > 0 && i <= totalPages) {
            addPage(i);
        }
    }

    // Add last page if not already added
    if (currentPage < totalPages - 2) {
        if (currentPage < totalPages - 3) pages.push(<li key="ellipsis_end">...</li>);
        addPage(totalPages);
    }

    return <ul className={classNames('text-[#aeaeae] text-base text-start flex gap-2',)}>{pages}</ul>;
};

export default Table