import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import Home from "../Home/Home";
import Main from "../Layouts/Main";
import Login from "../LoginAndRegistration/Login";
import Registration from "../LoginAndRegistration/Registration";
import Profile from "../Profile/Profile";
import DetailsWithReviews from "../Reviews/DetailsWithReviews";
import Myreviews from "../Reviews/Myreviews";
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
                path: '/detailsReviews',
                element: <PrivateRoute><DetailsWithReviews></DetailsWithReviews></PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])



export default routes;