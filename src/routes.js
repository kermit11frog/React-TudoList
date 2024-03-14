import Root from "./pages/Root"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import NewTudo, { newTudoAction } from "./pages/NewTudo"
import Login, { loginAction } from "./pages/Login"
import LoginRequired from "./pages/LoginRequired"
import { ContextProvider as TudosProvider } from "./contexts/Tudos"

const routes = [
    {path: "/", element: <Root/>, children: [
        {index: true, element: <LoginRequired><TudosProvider><Home/></TudosProvider></LoginRequired>},
        {path: "aboutme", element: <LoginRequired><AboutMe/></LoginRequired>},
        {path: "newtudo", element: <LoginRequired><NewTudo/></LoginRequired>, action: newTudoAction},
        {path: "login", element: <Login/>, action: loginAction},
    ]},
]

export default routes