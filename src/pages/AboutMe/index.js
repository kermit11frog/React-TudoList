import Navigation from "../../components/Navigation/Navigation"
import { FaGithub } from "react-icons/fa6"

import "./index.css"

const AboutMe = () => {
    return (
        <>
            <div className="container">
                <h2 className="myname">Kermit Frog</h2>
                <a href="https://github.com/kermit11frog" 
                className="badge align-items gp-10" target="_blank" rel="noreferrer"><FaGithub/> GitHub</a>
            </div>
            <Navigation/>
        </>
    )
}

export default AboutMe