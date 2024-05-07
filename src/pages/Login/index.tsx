import React from 'react'

function Login() {
  return (
      <div onClick={() => localStorage.setItem("token", "dcsdcsdcsc")}>
      login
    </div>
  )
}

export default Login
