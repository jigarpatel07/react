import React from 'react'
import Table from '../../components/Table';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store';

function UserList() {
    const usersData = useSelector((state: RootState) => state.Auth.usersData)
    console.log({ usersData });

    const data = [
        { id: 1, name: 'Product A', category: 'Category A', stock: 10, status: 'available', price: 100 },
        { id: 2, name: 'Product B', category: 'Category B', stock: 20, status: 'unavailable', price: 200 },
        { id: 3, name: 'Product C', category: 'Category A', stock: 10, status: 'available', price: 100 },
        { id: 4, name: 'Product D', category: 'Category B', stock: 20, status: 'unavailable', price: 200 },
        { id: 5, name: 'Product E', category: 'Category A', stock: 10, status: 'available', price: 100 },
        { id: 6, name: 'Product F', category: 'Category B', stock: 20, status: 'unavailable', price: 200 },
        { id: 7, name: 'Product G', category: 'Category A', stock: 10, status: 'available', price: 100 },
        { id: 8, name: 'Product H', category: 'Category B', stock: 20, status: 'unavailable', price: 200 },
        { id: 1, name: 'Product I', category: 'Category A', stock: 10, status: 'available', price: 100 },
        { id: 2, name: 'Product J', category: 'Category B', stock: 20, status: 'unavailable', price: 200 },
        { id: 1, name: 'Product K', category: 'Category A', stock: 10, status: 'available', price: 100 },
        { id: 2, name: 'Product L', category: 'Category B', stock: 20, status: 'unavailable', price: 200 },

    ];

    const columns = [
        {
            header: 'Name',
            accessorKey: 'userName',
        },
        {
            header: 'Email',
            accessorKey: 'email',
        },
        {
            header: 'gender',
            accessorKey: 'gender',

        },
        {
            header: 'Profession',
            accessorKey: 'profession',
            cell: (props: any) => {
                const { profession } = props.row.original
                return (
                    <span >
                        {profession.label}
                    </span>
                )
            },
        },
        {
            header: 'Interests',
            accessorKey: 'interests',
            cell: (props: any) => {
                const { interests } = props.row.original
                return <span>{interests.map((item: { label: string, value: string }) => item.label).join(",")}</span>
            },
        },
        {
            header: 'Action',
            id: 'action',
            cell: (props: any) => <ActionColumn row={props.row.original} />,
        },
    ];

    const ActionColumn = ({ row }: { row: any }) => {


        return (
            <div className="flex justify-center items-center text-lg">
                <span
                    className={`cursor-pointer p-2 hover:text-blue-500`}
                // onClick={onEdit}
                >
                    <HiOutlinePencil />
                </span>
                <span
                    className="cursor-pointer p-2 hover:text-red-500"
                // onClick={onDelete}
                >
                    <HiOutlineTrash />
                </span>
            </div>
        )
    }
    const itemsPerPage = 5; // Number of items to display per page

    return (
        <div className='flex flex-col gap-5'>
            <p className='text-[#aeaeae] text-xl'>User List</p>
            <Table data={usersData} columns={columns} itemsPerPage={itemsPerPage} />
        </div>
    )
}

export default UserList
