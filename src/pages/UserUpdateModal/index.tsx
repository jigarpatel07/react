import React from 'react'
import { IoClose } from "react-icons/io5";
import SignUpForm from '../SignUp/SignUpForm';
import { SignUpValue } from '../../types/auth';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store';
import { updateUser } from '../../store/AuthStore/AuthStoreSlice';
import { ToastNotification } from '../../components/ToastNotification';

function UserUpdateModal({ setIsUserUpdateModalOpen }: { setIsUserUpdateModalOpen: React.Dispatch<boolean> }) {
    const user = useSelector((state: RootState) => state.Auth.user)
    const dispatch = useDispatch()

    console.log({ user });

    const initialValues: SignUpValue = {
        userName: user.userName ?? "",
        email: user.email ?? "",
        password: user.password ?? "",
        gender: user.gender ?? "Male",
        profession: user.profession ?? { value: "", label: "Select an option..." },
        interests: user.interests ?? []
    };
    const handleSubmit = (value: SignUpValue) => {
        dispatch(updateUser(value))
        ToastNotification({ status: "success", message: 'User update successfully' })
        setIsUserUpdateModalOpen(false)
    }
    return (
        <div className='fixed top-0 left-0 flex items-center justify-center bg-[#00000085] z-50  w-full h-full overflow-y-auto' >
            <div className="max-w-[450px] w-full border border-[#aeaeae70] bg-black p-6 rounded-md flex flex-col gap-6">
                <div className="flex flex-col gap-0.5">
                    <div className='flex items-center justify-between'>
                        <h1 className="text-white font-semibold opacity-70 text-lg">
                            Update User
                        </h1>
                        <IoClose color="#aeaeae" className="cursor-pointer" size={24} onClick={() => setIsUserUpdateModalOpen(false)} />
                    </div>
                    <div className="my-4">
                        <SignUpForm initialValues={initialValues} type="edit" handleSubmit={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserUpdateModal
