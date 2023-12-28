import { Link } from "react-router-dom"
import "../styles/Page404.css"

const Page404 = () => {
    return (
        <div className="page-404">
            <h1 className="title">404 - Page Not Found</h1>
            <p className="not-found-message">The page you are looking for does not exist</p>
            <Link to="/" className={"back-to-home"}>Back to Home</Link>
        </div>
    )
};
  
export default Page404;