import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layout/Dashboard";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import MyWishlist from "../../Pages/Dashboard/MyWishlist/MyWishlist";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/categories/:id',
                loader: async({params})=> fetch(`http://localhost:5000/categories/${params.id}`),
                element: <PrivateRoute><Products></Products></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/reporteditems',
                element: <ReportedItems></ReportedItems>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myorder',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/mywishlist',
                element: <MyWishlist></MyWishlist>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default router;