import { Outlet } from "react-router-dom"

const Root = ({children}) => {
    return (
        <div className="contentBox">
            <Outlet/>
        </div>
    )
}

export default Root