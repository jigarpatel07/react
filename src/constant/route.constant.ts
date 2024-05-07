import Home from "../pages/Home";
import Login from "../pages/Login";
import NoPage from "../pages/NoPage";

export const HOME = "/"
export const LOG_IN = "/login"
export const ROUTES = {
    PRIVATE_ROUTE: [
        {
            path: HOME,
            element: Home,
        },

    ],
    PUBLIC_ROUTE: [
        {
            path: LOG_IN,
            element: Login,
        },
        {
            path: "*",
            element: NoPage
        }

    ],
};