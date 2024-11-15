import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";
import HomeLayout from "../Layouts/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


const Router = createBrowserRouter ([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '',
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
            }
        ]
    },
    {
        path: '/news',
        element: <h1>News Layout</h1>
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <h2>Error</h2>
    }
])

export default Router;