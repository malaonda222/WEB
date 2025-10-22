import About from "./About";
import ErrorPage from "./ErrorPage";
import MyProfile from "./MyProfile";
import SingleProfile from "./SingleProfile";

export const routes = [
    {
        path: "/",
        element: <Home></Home>
    },{
        path: "/about",
        element: <About></About>
    },{
        path: "/profile",
        element: <Profile></Profile>,
        children: [
            {
                path: "me",
                element: <MyProfile></MyProfile>
            },
            {
                path: ":id",
                element: <SingleProfile></SingleProfile>
            }
        ]
    }, 
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]

