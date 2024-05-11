import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa6";

function Tabs({ elem, index }: any) {
    const location = useLocation()
    const [activeTab, setActiveTab] = useState<string>("");
    const [isDropdown, setIsDropdown] = useState<boolean>(false);
    const Icon = elem.icon;
    const navigate = useNavigate()

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname])

    return (
        <div className={classNames('flex flex-col rounded-lg', activeTab === elem.path ? "bg-[#454545]" : "bg-[#1e1e1e]")} key={index}>
            <div
                className={classNames(
                    "w-full h-11 flex gap-4 items-center px-4  text-[#aeaeae] font-sans cursor-pointer")}
                onClick={() => {
                    if (elem?.subMenu?.length > 0) {
                        setIsDropdown(!isDropdown);
                    } else {
                        setIsDropdown(false);
                        handleNavigation(elem.path);
                    }
                }}
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
                {elem?.subMenu?.length! > 0 && <FaChevronDown size={18} color="#aeaeae" className={`transform transition  ${isDropdown ? 'rotate-180' : ''}`} />}
            </div>
            {elem?.subMenu?.length! > 0 && isDropdown && elem?.subMenu?.map((item: any, i: number) => {
                const SubIcon = item.subMenuIcon;
                return (
                    <div tabIndex={1}
                        key={i}
                        className={classNames(
                            "w-full h-11 flex gap-4 items-center px-4 rounded-lg text-[#aeaeae] font-sans cursor-pointer", activeTab === item.subMenuPath ? "bg-[#454545]" : "bg-[#1e1e1e]"
                        )}
                        onClick={() => handleNavigation(item.subMenuPath)}
                    >
                        <div className="w-8 h-full flex items-center justify-center">
                            <SubIcon
                                size={19}
                                color={activeTab === item.subMenuPath ? "#ffffff" : "#aeaeae"}
                            />
                        </div>
                        <div
                            className={classNames(
                                "hidden w-[calc(100%-48px)] h-full lg:flex items-center",
                                activeTab === item.subMenuPath
                                    ? "text-[#ffffff]"
                                    : "text-[#aeaeae]"
                            )}
                        >
                            <span>{item.subMenuName}</span>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Tabs
