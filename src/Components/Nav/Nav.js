import { Link } from "react-router-dom";
import "./Nav.css";
import {FaShoppingBag, FaSearch} from "react-icons/fa";

const Nav = () => {
    return(
        <nav className="Nav">
            <ul>
                <li class="nav-item"><Link to="/">Home</Link></li>
                <li class="nav-item"><Link to="/forum">Forum</Link></li>
                <li class="nav-item"><Link to="/search">Search</Link></li>
                <li class="nav-item"><Link to="/compare">Compare</Link></li>
                <li class="nav-item"><Link to="/collegepredictor">College predictor</Link></li>
                <li class="nav-item"><Link to="/profile">Profile</Link></li>
                <li class="nav-item"><Link to="/setting">Settings <FaSearch /></Link></li>
                <FaShoppingBag />
            </ul>
        </nav>
    )
}

export default Nav;