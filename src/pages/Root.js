import { Outlet } from "react-router-dom"

const Root = ({children}) => {
    return (
        <div className="bg-zinc-100 h-screen w-full absolute top-1/2 
        left-1/2 font-pop -translate-x-1/2 -translate-y-1/2
        sm:w-[425px] sm:h-[600px] sm:rounded-lg overflow-hidden">
            <Outlet/>
        </div>
    )
}

export default Root