import React from 'react'
import { IoClose } from "react-icons/io5";
import SignUpForm from '../../../pages/SignUp/SignUpForm';
import { SignUpValue } from '../../../types/auth';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../store/store';
import { updateUser, user } from '../../../store/AuthStore/AuthStoreSlice';
import { ToastNotification } from '../../ToastNotification';
import ModalLayout from '../ModalLayout';
import ModalHeader from '../ModalHeader';

function UserUpdateModal({ setModalClose, userData = useSelector((state: RootState) => state.Auth.user), profileUpdate }: { setModalClose: React.Dispatch<boolean>, userData?: SignUpValue, profileUpdate?: boolean }) {
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
        <ModalLayout>
            <ModalHeader title=' Update User' setModalClose={setModalClose} />
            <div className="my-4">
                <SignUpForm initialValues={initialValues} type="edit" handleSubmit={handleSubmit} />
            </div>

        </ModalLayout>

    )
}

export default UserUpdateModal
