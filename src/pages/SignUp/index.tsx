import { useNavigate } from 'react-router-dom';
import { ToastNotification } from '../../components/ToastNotification';
import { SIGN_IN } from '../../constant/route.constant';
import { registerUser } from '../../store/AuthStore/AuthStoreSlice';
import { RootState } from '../../store/store';
import { SignUpValue } from '../../types/auth';
import SignUpForm from './SignUpForm';
import { useDispatch, useSelector } from 'react-redux'

function SignUp() {
    const initialValues: SignUpValue = {
        userName: "",
        email: "",
        password: "",
        gender: "Male",
        profession: { value: "", label: "Select an option..." },
        interests: []
    };
    const dispatch = useDispatch()
    const data = useSelector((state: RootState) => state.Auth.usersData)
    const navigate = useNavigate()

    const handleSubmit = (value: SignUpValue) => {
        if (data.find(
            (item: SignUpValue) => item.email.toLowerCase() === value.email.toLowerCase()
        )) {
            ToastNotification({ status: "error", message: 'Email is already register' })
        }
        else {
            dispatch(registerUser(value))
            ToastNotification({ status: "success", message: 'User register successfully' })
            navigate(SIGN_IN)
        }

    }
    return (
        <div className="w-full bg-[#000000] flex items-center justify-center">
            <div className="max-w-[550px] w-full p-2 rounded-lg relative group overflow-hidden">
                <div className="w-full h-full p-2.5 rounded-md relative z-10 bg-black">
                    <div className="w-full h-full px-4 py-6 border border-[#ffffff60] rounded-lg">
                        <div className="flex justify-center mb-5">
                            <span className="text-[#c4c4c4] uppercase font-righteous text-lg">
                                Register
                            </span>
                        </div>
                        <SignUpForm initialValues={initialValues} type="add" handleSubmit={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
