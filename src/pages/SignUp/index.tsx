import { Formik, Form, Field } from 'formik'
import { SignUpValue } from '../../types/auth';
import { SignUpSchema } from '../../constant/validation.constant';
import CustomTextField from '../../components/CustomTextField';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaDev } from "react-icons/fa";
import { MdEmail, MdInterests } from "react-icons/md";
import { PiGenderMaleFill, PiGenderFemaleFill } from "react-icons/pi";
import ErrorMessage from '../../components/ErrorMessage';
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { SIGN_IN } from '../../constant/route.constant';
import { interestsData, professionData } from '../../constant/constant';
import AbsoluteIcon from '../../components/AbsoluteIcon';
function SignUp() {
    const initialValues: SignUpValue = { userName: "", email: "", password: "", gender: "Male", profession: "", interests: [] };
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
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
                            validationSchema={SignUpSchema}
                            onSubmit={(value) => console.log({ value })
                            }>
                            {({ errors, values }) => {
                                console.log({ errors });

                                return (
                                    <Form>
                                        <div className="flex flex-col gap-2.5 mb-7">
                                            <div className="flex flex-col gap-0.5">
                                                <div className="relative">
                                                    <CustomTextField
                                                        placeholder="User Name"
                                                        name="userName"
                                                    />
                                                    <AbsoluteIcon>
                                                        <FaUser color="#aeaeae" />
                                                    </AbsoluteIcon>
                                                </div>
                                                <ErrorMessage message={errors?.userName} />
                                            </div>
                                            <div className="flex flex-col gap-0.5">
                                                <div className="relative">
                                                    <CustomTextField
                                                        placeholder="Email"
                                                        name="email"
                                                    />
                                                    <AbsoluteIcon>
                                                        <MdEmail color="#aeaeae" />
                                                    </AbsoluteIcon>
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
                                                    <AbsoluteIcon>
                                                        <FaLock color="#aeaeae" />
                                                    </AbsoluteIcon>
                                                    <div className="absolute right-0 top-0 h-full w-10 flex items-center justify-center pr-2" onClick={() => setShowPassword(!showPassword)}>
                                                        {showPassword ? <FaEyeSlash color="#aeaeae" /> : <FaEye color="#aeaeae" />}
                                                    </div>
                                                </div>
                                                <ErrorMessage message={errors?.password} />
                                            </div>
                                            <div className="flex gap-0.5 bg-[#2c2c2c90] rounded-md py-2.5 pr-4 pl-14 relative">
                                                <div className="flex">
                                                    <p className='text-[#c2c2c250]'>Gender</p>
                                                    <div role="group" aria-labelledby="my-radio-group" className='ml-6 flex gap-4'>
                                                        <label className='text-[#c2c2c250] flex gap-2'>
                                                            <Field type="radio" name="gender" value="Male" />
                                                            <p>Male</p>
                                                        </label>
                                                        <label className='text-[#c2c2c250] flex gap-2'>
                                                            <Field type="radio" name="gender" value="Female" />
                                                            <p>Female</p>
                                                        </label>
                                                    </div>
                                                    <AbsoluteIcon>
                                                        {values.gender === "Male" ? <PiGenderMaleFill color="#aeaeae" /> : <PiGenderFemaleFill color="#aeaeae" />}
                                                    </AbsoluteIcon>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-0.5">
                                                <div className="flex gap-0.5 bg-[#2c2c2c90] rounded-md py-2.5 pr-4 pl-14 relative">
                                                    <div className="flex">
                                                        <Field as="select" name="profession" className="bg-transparent text-[#c2c2c250] w-full min-w-[410px] outline-none border-none appearance-none">
                                                            {professionData.map((item, index) => (
                                                                <option className='text-black bg-[#2c2c2c90]' value={item.value} key={index}>{item.text}</option>
                                                            ))}
                                                        </Field>
                                                        <AbsoluteIcon>
                                                            <FaDev color="#aeaeae" />
                                                        </AbsoluteIcon>
                                                    </div>
                                                </div>
                                                <ErrorMessage message={errors?.profession} />
                                            </div>
                                            <div className="flex flex-col gap-0.5">
                                                <div className="flex gap-0.5 bg-[#2c2c2c90] rounded-md py-2.5 pr-4 pl-14 relative">
                                                    <div className="flex">
                                                        <Field as="select" name="interests"
                                                            multiple className="bg-transparent text-[#c2c2c250] w-full min-w-[410px] outline-none border-none appearance-none">
                                                            {interestsData.map((item, index) => (
                                                                <option className='text-black bg-[#2c2c2c90]' value={item.value} key={index}>{item.text}</option>
                                                            ))}
                                                        </Field>
                                                        <AbsoluteIcon>
                                                            <MdInterests color="#aeaeae" />
                                                        </AbsoluteIcon>
                                                    </div>
                                                </div>
                                                <ErrorMessage message={errors?.interests} />
                                            </div>
                                            <button
                                                className="w-full text-white rounded-md py-3 mt-3 bg-[#262626]"
                                                type="submit"
                                            >
                                                Login
                                            </button>
                                            <p className='w-full text-white text-center'>Already have an account? <span className='font-semibold cursor-pointer' onClick={() => navigate(SIGN_IN)}>Login</span> </p>
                                        </div>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
