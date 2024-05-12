import SignIn from "../pages/SignIn";
import NoPage from "../pages/NoPage";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import UserList from "../pages/UserList";
import Todo from "../pages/Todo";

export const HOME = "/"
export const PROFILE = "/profile"
export const TODO = "/todo"
export const SIGN_IN = "/sign-in";
export const SIGN_UP = "/sign-up";

export const ROUTES = {
    PRIVATE_ROUTE: [
        {
            path: HOME,
            element: UserList,
        },
        {
            path: PROFILE,
            element: Profile,
        },
        {
            path: TODO,
            element: Todo,
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