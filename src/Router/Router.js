
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import LoginLayout from "../Layout/LoginLayout";
import Main from "../Layout/Main";
import AddProduct from "../Page/Dashboard/AddProduct/AddProduct";
import Admin from "../Page/Dashboard/Admin/Admin";
import Buyers from "../Page/Dashboard/Buyers/Buyers";
import Dashboard from "../Page/Dashboard/Dashboard/Dashboard";
import Seller from "../Page/Dashboard/Seller/Seller";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Singup from "../Page/Login/Singup";
import ProductWIthCategory from "../Page/ProductWithCategory/ProductWIthCategory";
import PriviteRoute from "./PriviteRoute";
import MyProduct from "../Page/Dashboard/MyProduct/MyProduct";
import MyOrders from "../Page/Dashboard/MyOrders/MyOrders";

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
        path: '/login',
        element: <LoginLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/login/singup',
                element: <Singup />
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PriviteRoute><DashboardLayout/></PriviteRoute>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard/>
            },
            {
                path:'/dashboard/buyer',
                element:<Buyers/>
            },
            {
                path:'/dashboard/seller',
                element:<Seller/>
            },
            {
                path:'/dashboard/admin',
                element:<Admin/>
            },
            {
                path:'/dashboard/myProduct',
                element:<MyProduct/>
            },
            {
                path:'/dashboard/addProduct',
                element:<AddProduct/>
            },
            {
                path:'/dashboard/myOrders',
                element:<MyOrders/>
            }
        ]
    }
])