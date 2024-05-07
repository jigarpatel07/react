import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
function View({ children }: any) {
    const auth = localStorage.getItem("token")
    const navigate = useNavigate()
    useEffect(() => {
        if (auth === "" || !auth) {
            navigate("/login")
        }
    }, [auth])
    return (
        <div>
            {children}
        </div>
    )
}

export default View
