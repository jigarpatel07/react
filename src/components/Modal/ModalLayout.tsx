import React from 'react'

function ModalLayout({ children }: any) {
    return (
        <div className='fixed top-0 left-0 flex items-center justify-center bg-[#00000085] z-50  w-full h-full overflow-y-auto' >
            <div className="max-w-[450px] w-full border border-[#aeaeae70] bg-black p-6 rounded-md flex flex-col gap-6">
                <div className="flex flex-col gap-0.5">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ModalLayout
