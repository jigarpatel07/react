import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { SIGN_IN } from '../../constant/route.constant'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { IoLogOut } from "react-icons/io5";
import { FaBrain, FaUserAlt } from "react-icons/fa";
import { TABS } from '../../constant/tab.constant'
import classNames from 'classnames'
import { logout } from '../../store/AuthStore/AuthStoreSlice'
import UserUpdateModal from '../UserUpdateModal'
import Tabs from './Tabs'

function View({ children }: any) {
    const user = useSelector((state: RootState) => state.Auth.user)
    const navigate = useNavigate()
    const [isUserUpdateModalOpen, setIsUserUpdateModalOpen] = useState<boolean>(false);

    const dispatch = useDispatch()

    useEffect(() => {
        if (user.emali === "" || !user.email) {
            navigate(SIGN_IN)
        }
    }, [user])

    const handleLogout = () => {
        dispatch(logout())
    };
    return (
        <>
            {isUserUpdateModalOpen && <UserUpdateModal setIsUserUpdateModalOpen={setIsUserUpdateModalOpen} />}
            <div className="w-full min-h-screen flex relative overflow-hidden">
                <div className="w-[80px] lg:w-[220px] xl:w-[280px] min-h-screen bg-[#282828]">
                    <div className="h-16 px-4 pt-2 border-b border-r border-[#a1a1a130]">
                        <div className="w-full h-full flex gap-2 pb-2">
                            <div className="w-12 h-full p-1">
                                <div className="w-full h-full rounded-full border border-[#aeaeae] p-1">
                                    <div className="w-full h-full rounded-full bg-[#1e1e1e] flex items-center justify-center">
                                        <FaBrain color="#aeaeae" size={18} />
                                    </div>
                                </div>
                            </div>
                            <div className="hidden w-[calc(100%-44px)] h-full text-white capitalize lg:flex items-center font-semibold">
                                <span>stick</span>
                                <span className="text-[#b43030]">&nbsp;thoughts</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-[calc(100%-64px)] p-4 border-r border-[#a1a1a130]">
                        <div className="h-full overflow-auto flex flex-col gap-3 py-2.5">
                            {TABS.map((elem, index) => {
                                return (
                                    <Tabs elem={elem} index={index} />
                                );
                            })}
                            <div
                                className={classNames(
                                    "w-full h-11 flex gap-4 items-center px-4 rounded-lg text-[#aeaeae] font-sans cursor-pointer",
                                    "bg-[#1e1e1e]"
                                )}
                                onClick={handleLogout}
                            >
                                <div className="w-9 h-full flex items-center justify-center lg:pl-2 pl-0">
                                    <IoLogOut
                                        size={26}
                                        color={"#aeaeae"}
                                    />
                                </div>
                                <div
                                    className={classNames(
                                        "hidden w-[calc(100%-52px)] h-full lg:flex items-center",
                                        "text-[#aeaeae]"
                                    )}
                                >
                                    <span>Logout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[calc(100%-80px)] lg:w-[calc(100%-220px)] xl:w-[calc(100%-280px)] min-h-screen">
                    <div className="h-16 bg-[#282828] border-b border-[#a1a1a130]">
                        <div className="h-full flex md:justify-between justify-end px-7 items-center">
                            <div className="flex gap-5 items-center md:pr-0 pr-4">
                            </div>
                            <div className="flex gap-7 items-center">
                                <p className='text-[#aeaeae] capitalize'>Welcome {user.userName}</p>
                                <FaUserAlt size={18} color="#aeaeae" className="cursor-pointer" onClick={() => setIsUserUpdateModalOpen(true)} />
                            </div>
                        </div>
                    </div>
                    <div className="h-[calc(100%-64px)] bg-[#1e1e1e] p-4">{children}</div>
                </div>
            </div>
        </>
    )
}

export default View
