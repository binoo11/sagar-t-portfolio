import { Link } from "react-router-dom";
import '../css/NavBar.css'
import { FaShoppingCart } from "react-icons/fa"; // Importing cart icon from react-icons
function NavBar(){
    const cartItemsCount = 3; // Replace with your actual cart count

    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Sagar T</Link>
        </div>
        <div className="navbar-links">
            <Link to="/music"className="nav-music">Upcoming Music</Link>
            <Link to="/shop" className="nav-shop">Shop</Link>
            <Link to="/letsTalk" className="nav-lets-talk">Lets' talk</Link>
            <Link to="/cart" className="nav-cart">
                    <FaShoppingCart className="cart-icon" />
                    {cartItemsCount > 0 && (
                        <span className="cart-count">{cartItemsCount}</span>
                    )}
                </Link>
        </div>
    </nav>
}
export default NavBar