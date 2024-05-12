import React from 'react'
import SignUpForm from '../SignUp/SignUpForm'
import { useSelector, useDispatch } from 'react-redux'
import { SignUpValue } from '../../types/auth';
import { updateUser, user } from '../../store/AuthStore/AuthStoreSlice';
import { RootState } from '../../store/store';
import { ToastNotification } from '../../components/ToastNotification';

function Profile({ setModalClose, userData = useSelector((state: RootState) => state.Auth.user), profileUpdate }: { setModalClose: React.Dispatch<boolean>, userData?: SignUpValue, profileUpdate?: boolean }) {
    const dispatch = useDispatch()

    const initialValues: SignUpValue = {
        userName: userData.userName ?? "",
        email: userData.email ?? "",
        password: userData.password ?? "",
        confirmPassword: userData.confirmPassword ?? "",
        gender: userData.gender ?? "Male",
        profession: userData.profession ?? { value: "", label: "Select an option..." },
        interests: userData.interests ?? []
    };
    const handleSubmit = (value: SignUpValue) => {
        if (profileUpdate) {
            dispatch(user(value))
        }
        dispatch(updateUser(value))
        ToastNotification({ status: "success", message: 'User update successfully' })
        setModalClose(false)
    }
    return (
        <div className="my-4">
            <div className='flex flex-col gap-5'>
                <p className='text-[#aeaeae] text-xl'>Update Profile</p>
                <SignUpForm initialValues={initialValues} type="edit" handleSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default Profile
