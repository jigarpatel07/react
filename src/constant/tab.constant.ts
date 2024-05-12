import * as ROUTES from "./route.constant";
import { FaNoteSticky } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { BsFilePerson } from "react-icons/bs";
export const TABS = [
    {
        name: "Home",
        path: ROUTES.HOME,
        icon: FaNoteSticky,
    },
    {
        name: "Profile",
        path: "",
        icon: FaUserAlt,
        subMenu: [
            {
                subMenuName: "My Profile",
                subMenuPath: ROUTES.PROFILE,
                subMenuIcon: BsFilePerson,
            },
            {
                subMenuName: "Notes",
                subMenuPath: ROUTES.TODO,
                subMenuIcon: FaNoteSticky,
            },
        ]
    },
];
