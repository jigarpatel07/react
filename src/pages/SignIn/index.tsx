import { Formik, Form } from 'formik'
import { SignInValue, SignUpValue } from '../../types/auth';
import { SignInSchema } from '../../constant/validation.constant';
import CustomTextField from '../../components/CustomTextField';
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ErrorMessage from '../../components/ErrorMessage';
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { HOME, SIGN_UP } from '../../constant/route.constant';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store';
import { ToastNotification } from '../../components/ToastNotification';
import { user } from '../../store/AuthStore/AuthStoreSlice';

function SignIn() {
  const initialValues: SignInValue = { email: "", password: "" };
  const [showPassword, setShowPassword] = useState(false)
  const data = useSelector((state: RootState) => state.Auth.usersData)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (value: SignInValue) => {
    let userData = data.find((item: SignUpValue) => item.email.toLowerCase() === value.email.toLowerCase())
    if (userData) {
      if (userData.password === value.password) {
        ToastNotification({ status: "success", message: 'User login successfully' })
        dispatch(user(userData))
        navigate(HOME)
      }
      else {
        ToastNotification({ status: "error", message: 'Password is incorrect' })
      }
    }
    else {
      ToastNotification({ status: "error", message: 'Email is not exist' })
    }
  }
  return (
    <div className="w-full min-h-screen bg-[#000000] flex items-center justify-center">
      <div className="max-w-[550px] w-full p-2 rounded-lg relative group overflow-hidden">
        <div className="w-full h-full p-2.5 rounded-md relative z-10 bg-black">
          <div className="w-full h-full px-4 py-6 border border-[#ffffff60] rounded-lg">
            <div className="flex justify-center mb-5">
              <span className="text-[#c4c4c4] uppercase font-righteous text-lg">
                Login
              </span>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={SignInSchema}
              onSubmit={(value) => handleSubmit(value)} >
              {({ errors }) => (
                <Form>
                  <div className="flex flex-col gap-2.5 mb-7">
                    <div className="flex flex-col gap-0.5">
                      <div className="relative">
                        <CustomTextField
                          placeholder="Email"
                          name="email"
                        />
                        <div className="absolute left-0 top-0 h-full w-10 flex items-center justify-center pl-2">
                          <MdEmail color="#aeaeae" />
                        </div>
                      </div>
                      <ErrorMessage message={errors?.email} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="relative">
                        <CustomTextField
                          placeholder="Password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                        />
                        <div className="absolute left-0 top-0 h-full w-10 flex items-center justify-center pl-2">
                          <FaLock color="#aeaeae" />
                        </div>
                        <div className="absolute right-0 top-0 h-full w-10 flex items-center justify-center pr-2" onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? <FaEyeSlash color="#aeaeae" /> : <FaEye color="#aeaeae" />}
                        </div>
                      </div>
                      <ErrorMessage message={errors?.password} />
                    </div>
                    <button
                      className="w-full text-white rounded-md py-3 mt-3 bg-[#262626]"
                      type="submit"
                    >
                      Login
                    </button>
                    <p className='w-full text-white text-center'>Don't have an account? <span className='font-semibold cursor-pointer' onClick={() => navigate(SIGN_UP)}>Register</span> </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
