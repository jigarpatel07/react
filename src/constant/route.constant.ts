import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import NoPage from "../pages/NoPage";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import UserList from "../pages/UserList";

export const HOME = "/"
export const PROFILE = "/profile"
export const MENUONE = "/menu1"
export const MENUTWO = "/menu2"
export const USERS = "/users"
export const MENUFOUR = "/menu4"
export const SIGN_IN = "/sign-in";
export const SIGN_UP = "/sign-up";

export const ROUTES = {
    PRIVATE_ROUTE: [
        {
            path: HOME,
            element: Home,
        },
        {
            path: PROFILE,
            element: Profile,
        },
        {
            path: MENUONE,
            element: Profile,
        },
        {
            path: MENUTWO,
            element: Profile,
        },
        {
            path: USERS,
            element: UserList,
        },
        {
            path: MENUFOUR,
            element: Home,
        },

    ],
    PUBLIC_ROUTE: [
        {
            path: SIGN_IN,
            element: SignIn,
        },
        {
            path: SIGN_UP,
            element: SignUp,
        },
        {
            path: "*",
            element: NoPage
        }

    ],
};