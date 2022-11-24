import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../Layout/LoginLayout";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Singup from "../Page/Login/Singup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: '/loginLayout',
        element: <LoginLayout />,
        children: [
            {
                path: '/loginLayout',
                element: <Login />
            },
            {
                path: '/loginLayout/singup',
                element: <Singup />
            }
        ]
    }
])