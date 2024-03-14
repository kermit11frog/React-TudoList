import { Navigate } from "react-router-dom"

const LoginRequired = ({children}) => {
    const name = localStorage.getItem("name")
    return (
        name ? (
            children
        ):(
            <Navigate to="/login"/>
        )
    )
}

export default LoginRequired