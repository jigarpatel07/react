import React from 'react'
import ModalLayout from '../ModalLayout'
import ModalHeader from '../ModalHeader'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../../../store/AuthStore/AuthStoreSlice';

function UserDeleteModal({ deleteUserEmail, setModalClose }: { deleteUserEmail: string; setModalClose: React.Dispatch<boolean> }) {
    const dispatch = useDispatch()
    return (
        <ModalLayout>
            <ModalHeader title=' Delete User' setModalClose={setModalClose} />
            <div className="my-4">
                <p className='text-[#aeaeae]'> Are sure want to delete {deleteUserEmail} user?</p>
                <div className='flex gap-3 justify-end items-center mt-3'>
                    <button
                        className="w-[120px] text-white rounded-md py-3 mt-3 bg-[#8d2929]"
                        onClick={() => {
                            dispatch(deleteUser(deleteUserEmail))
                            setModalClose(false)
                        }}
                    >
                        Delete
                    </button>
                    <button
                        className="w-[120px] text-white rounded-md py-3 mt-3 bg-[#262626]"
                        onClick={() => setModalClose(false)}
                    >
                        Cancel
                    </button>
                </div>

            </div>
        </ModalLayout>
    )
}

export default UserDeleteModal
