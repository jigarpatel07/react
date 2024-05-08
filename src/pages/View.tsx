import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { SIGN_IN } from '../constant/route.constant'
function View({ children }: any) {
    const auth = localStorage.getItem("token")
    const navigate = useNavigate()
    useEffect(() => {
        if (auth === "" || !auth) {
            navigate(SIGN_IN)
        }
    }, [auth])
    return (
        <div>
            {children}
        </div>
    )
}

export default View
