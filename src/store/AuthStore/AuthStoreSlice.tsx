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
    },
})

export const { registerUser, user, logout } = AuthSlice.actions

export default AuthSlice.reducer