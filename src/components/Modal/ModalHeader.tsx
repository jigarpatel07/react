import React from 'react'
import { IoClose } from "react-icons/io5";

function ModalHeader({ title, setModalClose }: { title: string; setModalClose: React.Dispatch<boolean> }) {
    return (
        <div className='flex items-center justify-between'>
            <h1 className="text-white font-semibold opacity-70 text-lg">
                {title}
            </h1>
            <IoClose color="#aeaeae" className="cursor-pointer hover:rotate-180  hover:duration-500" size={24} onClick={() => setModalClose(false)} />
        </div>
    )
}

export default ModalHeader
