import Users from "./pages/Users";
import Movies from "./pages/Movies";
import Home from "./pages/Home";

export default [
    {
        path:'/',
        component:Home
    },
    {
        path:'/movies',
        component:Movies
    },
    {
        path:'/users',
        component:Users
    }
]