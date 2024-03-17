import { NavLink, Link } from "react-router-dom";
import "./Nav.css";
import {FaShoppingBag, FaSearch} from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav>
            <Link to="/" className="title">Home</Link>
            <div 
                className="menu"
                onClick={() => {
                setMenuOpen(!menuOpen)
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li><NavLink to="/forum">Forum</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
                <li><NavLink to="/compare">Compare</NavLink></li>
                <li><NavLink to="/collegepredictor">College predictor</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/setting">Settings <FaSearch /></NavLink></li>
                <FaShoppingBag />
            </ul>
        </nav>
    )
}

export default Nav;