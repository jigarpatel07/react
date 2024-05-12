import React, { useState, useEffect } from 'react';
import classNames from 'classnames'
import CustomAvatar from './CustomAvatar';
import Select from 'react-select';
import { customStyles, itemsPerPageData } from '../constant/constant';

const Table = ({ data, columns }: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState({ value: 5, label: "5" })
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    useEffect(() => {
        const indexOfLastItem = currentPage * itemsPerPage.value;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage.value;
        setCurrentItems(data.slice(indexOfFirstItem, indexOfLastItem));
    }, [currentPage, data, itemsPerPage.value]);

    return (
        <div className='flex flex-col gap-4 '>
            <table className='bg-[#282828] w-full rounded-lg overflow-hidden'>
                <thead >
                    <tr className='bg-[#aeaeae] w-full text-[#282828] text-center capitalize'>
                        <th>Number</th>
                        <th>Avatar</th>
                        {columns.map((column: any) => (
                            <th key={column.accessorKey}>{column.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody >
                    {currentItems?.map((item: any, index) => (
                        <tr key={index} className='text-center text-[#aeaeae]'>
                            <td>{index + 1 + (currentPage - 1) * itemsPerPage.value}</td>
                            <td><CustomAvatar name={item.userName} /></td>
                            {columns.map((column: any) => (
                                <td key={column.accessorKey} >
                                    {column.cell ? column.cell({ row: { original: item } }) : item[column.accessorKey]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
};

const Pagination = ({ itemsPerPage, setItemsPerPage, totalItems, paginate, currentPage }: any) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage.value);
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

    return (<div className='flex items-center gap-3 justify-end'>
        <ul className={classNames('text-[#aeaeae] text-base text-start flex gap-2',)} > {pages}</ul>
        <Select
            options={itemsPerPageData}
            value={itemsPerPage}
            onChange={(option: any) => setItemsPerPage(option)}
            styles={customStyles}
            components={{
                IndicatorSeparator: () => null
            }}
        />
    </div>)
};

export default Table