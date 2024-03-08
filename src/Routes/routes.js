import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {  
                path:"Login",
                element:<Login/>
            },
            {
                path:"Signup",
                element:<Signup/>
            }
        ],
    },
]);

