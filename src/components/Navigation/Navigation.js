import { NavLink, Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa6"

const Navigation = () => {
    return (
        <div className="absolute bottom-0 left-0 w-full bg-white">
            <div className="container flex items-center justify-between">
              <NavLink to="/" className={
                ({isActive}) => `font-semibold ${isActive ? 'text-black':'text-gray-400'}`
              }>Home</NavLink>
              <Link to="/newtudo" className="flex items-center justify-center w-16 h-16 rounded-full
              bg-purple-400 text-white -translate-y-1/2 text-2xl"><FaPlus/></Link>
              <NavLink to="/aboutme" className={
                ({isActive}) => `font-semibold ${isActive ? 'text-black':'text-gray-400'}`
              }>About Me</NavLink>
            </div>
        </div>
    )
}

export default Navigation