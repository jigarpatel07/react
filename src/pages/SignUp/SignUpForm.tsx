import { Formik, Form, Field } from 'formik'
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
import Select from 'react-select';

function SignUpForm({ initialValues, type, handleSubmit }: any) {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            backgroundColor: 'transpart',
            color: '#aeaeae',
            width: type === "add" ? "410px" : "310px",
            borderColor: "unset !important",
            boxShadow: "unset !important"
        }),
        option: (provided: any) => ({
            ...provided,
            backgroundColor: '#2c2c2c',
            color: '#aeaeae',
        }),
        singleValue: (provided: any) => ({
            ...provided,
            color: '#aeaeae',
        }),
    };
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={SignUpSchema}
                onSubmit={(value) => handleSubmit(value)}>
                {({ errors, values, setFieldValue }) => {
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
                                    <ErrorMessage message={errors?.userName as string} />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <div className="relative">
                                        <CustomTextField
                                            placeholder="Email"
                                            name="email"
                                            isDisabled={type !== "add" && true}
                                        />
                                        <AbsoluteIcon>
                                            <MdEmail color="#aeaeae" />
                                        </AbsoluteIcon>
                                    </div>
                                    <ErrorMessage message={errors?.email as string} />
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
                                        <div className="absolute right-0 top-0 h-full w-10 flex items-center justify-center pr-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <FaEyeSlash color="#aeaeae" /> : <FaEye color="#aeaeae" />}
                                        </div>
                                    </div>
                                    <ErrorMessage message={errors?.password as string} />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <div className="relative">
                                        <CustomTextField
                                            placeholder="confirmPassword"
                                            name="confirmPassword"
                                            type={showPassword ? "text" : "password"}
                                        />
                                        <AbsoluteIcon>
                                            <FaLock color="#aeaeae" />
                                        </AbsoluteIcon>
                                        <div className="absolute right-0 top-0 h-full w-10 flex items-center justify-center pr-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <FaEyeSlash color="#aeaeae" /> : <FaEye color="#aeaeae" />}
                                        </div>
                                    </div>
                                    <ErrorMessage message={errors?.confirmPassword as string} />
                                </div>
                                <div className="flex gap-0.5 bg-[#2c2c2c90] rounded-md py-2.5 pr-4 pl-14 relative">
                                    <div className="flex">
                                        <p className='text-[#c2c2c250]'>Gender</p>
                                        <div role="group" aria-labelledby="my-radio-group" className='ml-6 flex gap-4'>
                                            <label className='text-[#c2c2c250] flex gap-2 cursor-pointer'>
                                                <Field type="radio" name="gender" value="Male" />
                                                <p>Male</p>
                                            </label>
                                            <label className='text-[#c2c2c250] flex gap-2 cursor-pointer'>
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
                                            <Select
                                                options={professionData}
                                                value={values.profession}
                                                onChange={(option) => setFieldValue('profession', option)}
                                                styles={customStyles}
                                                placeholder="Select an option..."
                                            />
                                            <AbsoluteIcon>
                                                <FaDev color="#aeaeae" />
                                            </AbsoluteIcon>
                                        </div>
                                    </div>
                                    <ErrorMessage message={errors?.profession?.value} />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <div className="flex gap-0.5 bg-[#2c2c2c90] rounded-md py-2.5 pr-4 pl-14 relative">
                                        <div className="flex">
                                            <Select
                                                options={interestsData}
                                                value={values.interests}
                                                onChange={(selectedOptions) => setFieldValue('interests', selectedOptions)}
                                                isMulti
                                                styles={customStyles}
                                                placeholder="Select an option..."
                                            />
                                            <AbsoluteIcon>
                                                <MdInterests color="#aeaeae" />
                                            </AbsoluteIcon>
                                        </div>
                                    </div>
                                    <ErrorMessage message={errors?.interests as string} />
                                </div>
                                <button
                                    className="w-full text-white rounded-md py-3 mt-3 bg-[#262626]"
                                    type="submit"
                                >
                                    {type === "add" ? "Register" : "Update Profile"}
                                </button>
                                {type === "add" && <p className='w-full text-white text-center'>Already have an account? <span className='font-semibold cursor-pointer' onClick={() => navigate(SIGN_IN)}>Login</span> </p>}
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default SignUpForm
