import { NavLink, Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa6"

import "./Navigation.css"

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="container align-items jc-sb">
              <NavLink to="/" className={
                ({isActive}) => `navLink ${isActive ? 'active':''}`
              }>Home</NavLink>
              <Link to="/newtudo" className="navLink createTudo go-center"><FaPlus/></Link>
              <NavLink to="/aboutme" className={
                ({isActive}) => `navLink ${isActive ? 'active':''}`
              }>About Me</NavLink>
            </div>
        </div>
    )
}

export default Navigation