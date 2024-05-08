import React from 'react'

function AbsoluteIcon({ children }: any) {
    return (
        <div className="absolute left-0 top-0 h-full w-10 flex items-center justify-center pl-2" >
            {children}
        </div>
    )
}

export default AbsoluteIcon
