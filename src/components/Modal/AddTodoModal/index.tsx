import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { TodoValues } from '../../../interface';
import { addTodo, editData, editTodo, openTodoModal } from '../../../store/TodoStore/TodoStoreSlice';
import { ToastNotification } from '../../ToastNotification';
import ModalLayout from '../ModalLayout';
import ModalHeader from '../ModalHeader';
import { TodoSchema } from '../../../constant/validation.constant';
import CustomTextField from '../../CustomTextField';
import CustomButton from '../../CustomButton';
import { RiTodoFill } from "react-icons/ri";
import { MdDescription } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import AbsoluteIcon from '../../AbsoluteIcon';
import ErrorMessage from '../../ErrorMessage';
import Select from 'react-select';
import { customStyles, todoOptionData } from '../../../constant/constant';

export default function AddTodoModal() {

    const dispatch = useDispatch()
    const editTodoData = useSelector((state: RootState) => state.Todo.editData)
    const [isEdit, setIsEdit] = useState(false)

    const initialValues: TodoValues = {
        title: editTodoData.title ?? '',
        description: editTodoData.description ?? '',
        status: editTodoData.status ?? { value: "Todo", label: "Todo" }
    };

    const handleSubmit = (values: TodoValues) => {

        if (isEdit) {
            const data = {
                ...values, id: editTodoData.id
            }
            dispatch(editTodo(data))
            dispatch(editData({}))
            ToastNotification({ status: 'success', message: 'Todo Edit successfully' });
        }
        else {
            const data = {
                ...values, id: Date.now().toString()
            }
            console.log({ data });

            dispatch(addTodo(data))
            ToastNotification({ status: 'success', message: 'Todo Add successfully' });
        }
        handleCloseModal()
    }
    useEffect(() => {
        if (editTodoData?.id) {
            setIsEdit(true)
        }
        else {
            setIsEdit(false)
        }
    }, [editTodoData])

    const handleCloseModal = () => {
        dispatch(openTodoModal(false))
        dispatch(editData({}))
    }

    return (
        <div>
            <ModalLayout>
                <ModalHeader title='New Todo' setModalClose={handleCloseModal} />
                <Formik
                    initialValues={initialValues}
                    validationSchema={TodoSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, values, setFieldValue }) => (
                        <Form>
                            <div className="flex flex-col gap-2.5 my-7">
                                <div className="flex flex-col gap-0.5">
                                    <div className="relative">
                                        <CustomTextField
                                            name="title"
                                            placeholder="Todo title"
                                        />
                                        <AbsoluteIcon>
                                            <RiTodoFill color="#aeaeae" />
                                        </AbsoluteIcon>
                                    </div>
                                    <ErrorMessage message={errors?.title} />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <div className="relative">
                                        <CustomTextField
                                            name="description"
                                            placeholder="Add description..."
                                            multiline={true}
                                        />
                                        <div className="absolute left-0 top-[13px] h-full w-10 flex items-start justify-center pl-2" >
                                            <MdDescription color="#aeaeae" />
                                        </div>
                                    </div>
                                    <ErrorMessage message={errors?.description} />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <div className="flex gap-0.5 bg-[#2c2c2c90] rounded-md py-2.5 pr-4 pl-14 relative">
                                        <div className="flex">
                                            <Select
                                                options={todoOptionData}
                                                value={values.status}
                                                onChange={(option) => setFieldValue('status', option)}
                                                styles={customStyles}
                                                placeholder="Select an option..."
                                                components={{
                                                    IndicatorSeparator: () => null
                                                }}
                                            />
                                            <AbsoluteIcon>
                                                <GrStatusGood color="#aeaeae" />
                                            </AbsoluteIcon>
                                        </div>
                                    </div>
                                    <ErrorMessage message={errors?.status?.value} />
                                </div>
                                <div className='flex justify-end'>
                                    <CustomButton title='Save' type="submit" />
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </ModalLayout >
        </div >
    );
}