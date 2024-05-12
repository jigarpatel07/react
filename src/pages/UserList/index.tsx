import React, { useState } from 'react'
import Table from '../../components/Table';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store';
import UserUpdateModal from '../../components/Modal/UserUpdateModal';
import UserDeleteModal from '../../components/Modal/UserDeleteModal';

function UserList() {
    const usersData = useSelector((state: RootState) => state.Auth.usersData)
    const [isUserUpdateModalOpen, setIsUserUpdateModalOpen] = useState<boolean>(false);
    const [isUserDeleteModalOpen, setIsUserDeleteModalOpen] = useState<boolean>(false);
    const [editUser, setEditUser] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "Male",
        profession: { value: "", label: "Select an option..." },
        interests: []
    })
    const [deleteUser, setDeleteUser] = useState("")
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
                    onClick={() => {
                        setEditUser(row)
                        setIsUserUpdateModalOpen(true)
                    }}
                >
                    <HiOutlinePencil />
                </span>
                <span
                    className="cursor-pointer p-2 hover:text-red-500"
                    onClick={() => {
                        setDeleteUser(row.email)
                        setIsUserDeleteModalOpen(true)
                    }}
                >
                    <HiOutlineTrash />
                </span>
            </div>
        )
    }
    const itemsPerPage = 5; // Number of items to display per page

    return (
        <>
            {isUserUpdateModalOpen &&
                <UserUpdateModal setModalClose={setIsUserUpdateModalOpen} userData={editUser} />}
            {isUserDeleteModalOpen &&
                <UserDeleteModal setModalClose={setIsUserDeleteModalOpen} deleteUserEmail={deleteUser} />
            }
            <div className='flex flex-col gap-5'>
                <p className='text-[#aeaeae] text-xl'>User List</p>
                <Table data={usersData} columns={columns} itemsPerPage={itemsPerPage} />
            </div>
        </>
    )
}

export default UserList
