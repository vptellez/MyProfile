import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to="/">Hola</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
      </ul>
    </div>  
  )
};

export default Navbar;