import { Link } from "react-router-dom";
import '../css/NavBar.css';
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function NavBar() {
    const cartItemsCount = 3;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Sagar T</Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="mobile-menu-btn" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            
            {/* Navigation links - now with mobile-responsive class */}
            <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/music" className="nav-link nav-music">Upcoming Music</Link>
                <Link to="/shop" className="nav-link nav-shop">Shop</Link>
                <Link to="/letsTalk" className="nav-link nav-lets-talk">Lets' talk</Link>
                <Link to="/cart" className="nav-cart">
                    <FaShoppingCart className="cart-icon" />
                    {cartItemsCount > 0 && (
                        <span className="cart-count">{cartItemsCount}</span>
                    )}
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;