import { Link } from "react-router-dom"
import PathConstants from "../routes/pathConstants";
import "../styles/Header.css"

const Header = () => {  
    return (
        <header>
            <div className="header-div">
                <h1 className="title"><Link to={PathConstants.HOME}>Hola!</Link></h1>
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item"><Link to={PathConstants.TEAM}>Team</Link></li>
                        <li className="nav-item"><Link to={PathConstants.PORTFOLIO}>Portfolio</Link></li>
                        <li className="nav-item"><Link to={PathConstants.ABOUT}>About</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;