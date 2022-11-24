
import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../Layout/LoginLayout";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Singup from "../Page/Login/Singup";
import ProductWIthCategory from "../Page/ProductWithCategory/ProductWIthCategory";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path:'/products/:cata_id',
                element: <ProductWIthCategory/>,
                loader: async ({params}) => fetch(`http://localhost:5000/products/${params.cata_id}`)
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