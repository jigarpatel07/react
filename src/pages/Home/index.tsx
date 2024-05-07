import React from 'react'

function Home() {
    return (
        <div onClick={() => localStorage.removeItem("token")}>
            home
        </div>
    )
}

export default Home
