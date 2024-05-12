import React from 'react'
import { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { openTodoModal } from '../../store/TodoStore/TodoStoreSlice'
import CustomButton from '../../components/CustomButton'
import AddTodoModal from '../../components/Modal/AddTodoModal'
import TodoList from './TodoList'

function Todo() {
    const dispatch = useDispatch()
    const isAddModal = useSelector((state: RootState) => state.Todo.isTodoModalOpen)
    return (
        <div className='flex flex-col gap-5'>
            <p className='text-center text-white text-4xl'>
                Todo List
            </p>
            <div className='flex w-full gap-6 mt-8 justify-end'>
                <CustomButton title='Add Todo' handleButtonClick={() => dispatch(openTodoModal(true))} />
            </div>
            {isAddModal && <AddTodoModal />}
            <TodoList />
        </div>
    )
}

export default Todo
