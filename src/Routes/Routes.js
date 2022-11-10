import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import Home from "../Home/Home";
import Main from "../Layouts/Main";
import Login from "../LoginAndRegistration/Login";
import Registration from "../LoginAndRegistration/Registration";
import Profile from "../Profile/Profile";
import DetailsWithReviews from "../Reviews/DetailsWithReviews";
import Myreviews from "../Reviews/Myreviews";
import Service from "../Services/Service";
import Services from "../Services/Services";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute> <Myreviews></Myreviews></PrivateRoute>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><DetailsWithReviews></DetailsWithReviews></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            // {
            //     path: '/reviews',
            //     element: 
            // },
            {
                path: '*',
                element: <div className="flex">
                    <img className="w-1/2" src="https://storytale-public2.b-cdn.net/2021/08/16/2fb9b052-223a-4ca1-bc13-a60b802a6a88-Space.png?height=600" alt="404" />
                    <img className="w-1/2" src="https://storytale-public2.b-cdn.net/2021/08/16/d76e6bc7-1768-499c-8b14-33313216ca3d-Error404.png?height=600" alt="404" />
                </div>
            }
        ]
    }
])



export default routes;