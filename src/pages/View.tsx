import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import { SIGN_IN } from '../constant/route.constant'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { IoSettingsSharp, IoLogOut } from "react-icons/io5";
import { FaBell, FaBrain } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TABS } from '../constant/tab.constant'
import classNames from 'classnames'
import { logout } from '../store/AuthStore/AuthStoreSlice'

function View({ children }: any) {
    const auth = useSelector((state: RootState) => state.Auth.user)
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState<string>("");
    const dispatch = useDispatch()

    useEffect(() => {
        if (auth.emali === "" || !auth.email) {
            navigate(SIGN_IN)
        }
    }, [auth])

    const handleNavigation = (path: string) => {
        navigate(path);
        setActiveTab(path);
    };

    const { pathname } = useLocation();

    useEffect(() => {
        setActiveTab(pathname);
    }, []);

    const handleLogout = () => {
        dispatch(logout())
        setActiveTab("/logout");
    };
    return (
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
                            const Icon = elem.icon;
                            return (
                                <div
                                    key={index}
                                    className={classNames(
                                        "w-full h-11 flex gap-4 items-center px-4 rounded-lg text-[#aeaeae] font-sans cursor-pointer",
                                        activeTab === elem.path ? "bg-[#454545]" : "bg-[#1e1e1e]"
                                    )}
                                    onClick={() => handleNavigation(elem.path)}
                                >
                                    <div className="w-8 h-full flex items-center justify-center">
                                        <Icon
                                            size={19}
                                            color={activeTab === elem.path ? "#ffffff" : "#aeaeae"}
                                        />
                                    </div>
                                    <div
                                        className={classNames(
                                            "hidden w-[calc(100%-48px)] h-full lg:flex items-center",
                                            activeTab === elem.path
                                                ? "text-[#ffffff]"
                                                : "text-[#aeaeae]"
                                        )}
                                    >
                                        <span>{elem.name}</span>
                                    </div>
                                </div>
                            );
                        })}
                        <div
                            className={classNames(
                                "w-full h-11 flex gap-4 items-center px-4 rounded-lg text-[#aeaeae] font-sans cursor-pointer",
                                activeTab === "/logout" ? "bg-[#454545]" : "bg-[#1e1e1e]"
                            )}
                            onClick={handleLogout}
                        >
                            <div className="w-9 h-full flex items-center justify-center lg:pl-2 pl-0">
                                <IoLogOut
                                    size={26}
                                    color={activeTab === "/logout" ? "#ffffff" : "#aeaeae"}
                                />
                            </div>
                            <div
                                className={classNames(
                                    "hidden w-[calc(100%-52px)] h-full lg:flex items-center",
                                    activeTab === "/logout" ? "text-[#ffffff]" : "text-[#aeaeae]"
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
                        <div className="flex gap-7">
                            <FaBell size={18} color="#aeaeae" className="cursor-pointer" />
                            <IoSettingsSharp
                                size={18}
                                color="#aeaeae"
                                className="cursor-pointer"
                            />
                            <BsThreeDotsVertical
                                size={18}
                                color="#aeaeae"
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
                <div className="h-[calc(100%-64px)] bg-[#1e1e1e] p-4">{children}</div>
            </div>
        </div>
    )
}

export default View
