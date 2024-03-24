import Navigation from "../../components/Navigation/Navigation"
import { FaGithub } from "react-icons/fa6"

const AboutMe = () => {
    return (
        <>
            <div className="container">
                <h2 className="text-4xl font-black text-center my-4 text-zinc-500">Kermit Frog</h2>
                <a href="https://github.com/kermit11frog" 
                className="flex items-center px-3 py-2 rounded-lg bg-white gap-1" target="_blank" rel="noreferrer"><FaGithub/> GitHub</a>
            </div>
            <Navigation/>
        </>
    )
}

export default AboutMe