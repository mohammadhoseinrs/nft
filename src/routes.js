import UserDashboard from "./components/user/UserDashboard"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Home from "./pages/home/Home"
import Players from "./pages/marketplace/Players"
import User from "./pages/user/User"
import PrivateRoutes from "./privateRoutes"

let Routes=[
    {path:'/',element:<Home />},
    {path:'/marketplace/players',element:<Players />},
    {path:'/about',element:<About />},
    {path:'/contact',element:<Contact />},
    {path:'/',element:<PrivateRoutes />,children:[
        {path:'/user',element:<User /> , children:[
            {path:'dashboard',element:<UserDashboard />}
        ]}
    ]}
]
export default Routes