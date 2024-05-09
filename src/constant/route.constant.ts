import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import NoPage from "../pages/NoPage";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";

export const HOME = "/"
export const PROFILE = "/profile"
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