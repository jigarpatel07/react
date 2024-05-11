import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SignUpValue } from '../../types/auth'

export interface SignUpState {
    usersData: SignUpValue[]
    user: any
}

const initialState: SignUpState = {
    usersData: [],
    user: {}
}

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        registerUser: (state, action: PayloadAction<SignUpValue>) => {
            state.usersData.push(action.payload)
        },
        user: (state, action: PayloadAction<SignUpValue>) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = {}
        },
        updateUser: (state, action: PayloadAction<SignUpValue>) => {
            const { email, ...updatedUserData } = action.payload;
            const userIndex = state.usersData.findIndex((user) => user.email === email);
            if (userIndex !== -1) {
                state.usersData[userIndex] = { ...state.usersData[userIndex], ...updatedUserData };
                state.user = action.payload
            }
        },
    },
})

export const { registerUser, updateUser, user, logout } = AuthSlice.actions

export default AuthSlice.reducer