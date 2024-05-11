import * as ROUTES from "./route.constant";
import { FaNoteSticky } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

export const TABS = [
    {
        name: "Home",
        path: ROUTES.HOME,
        icon: FaNoteSticky,
        subMenu: [
            {
                subMenuName: "Users List",
                subMenuPath: ROUTES.USERS,
                subMenuIcon: FaUserAlt,
            },
            {
                subMenuName: "menu4",
                subMenuPath: ROUTES.MENUFOUR,
                subMenuIcon: FaNoteSticky,
            },
        ]
    },
    {
        name: "My Profile",
        path: ROUTES.PROFILE,
        icon: FaUserAlt,
        subMenu: [
            {
                subMenuName: "menu1",
                subMenuPath: ROUTES.MENUONE,
                subMenuIcon: FaUserAlt,
            },
            {
                subMenuName: "menu2",
                subMenuPath: ROUTES.MENUTWO,
                subMenuIcon: FaNoteSticky,
            },
        ]
    },
];
