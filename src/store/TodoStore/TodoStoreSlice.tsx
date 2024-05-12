import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoState } from '../../interface';

const initialState: TodoState = {
    todoData: [],
    editData: {
        id: "",
        title: "",
        description: "",
        status: ""
    },
    isTodoModalOpen: false
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todoData.push(action.payload);
        },
        changePosition: (state, action) => {
            state.todoData = action.payload
        },
        editData: (state, action) => {
            state.editData = action.payload
        },
        editTodo: (state, action: PayloadAction<Todo>) => {
            const { id, title, description, status } = action.payload;

            const todoItem = state.todoData.find((item) => item.id === id);
            if (todoItem) {
                todoItem.title = title;
                todoItem.description = description;
                todoItem.status = status;
            }
        },
        doneTodo: (state, action) => {
            const { id, status } = action.payload;

            const todoItem = state.todoData.find((item) => item.id === id);
            if (todoItem) {
                todoItem.status = status;
            }
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.todoData = state.todoData.filter((item) => item.id !== action.payload);
        },
        openTodoModal: (state, action) => {
            state.isTodoModalOpen = action.payload
        },
    },
});

export const { addTodo, changePosition, editData, editTodo, doneTodo, deleteTodo, openTodoModal } = todoSlice.actions;

export default todoSlice.reducer;
