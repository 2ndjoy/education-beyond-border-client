import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import Home from "../Home/Home";
import Main from "../Layouts/Main";
import Login from "../LoginAndRegistration/Login";
import Registration from "../LoginAndRegistration/Registration";
import Myreviews from "../Reviews/Myreviews";
import Services from "../Services/Services";

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
                element: <Blogs></Blogs>
            },
            {
                path: '/myreviews',
                element: <Myreviews></Myreviews>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            }
        ]
    }
])



export default routes;