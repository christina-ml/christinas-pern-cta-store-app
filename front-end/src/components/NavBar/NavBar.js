import { Link } from "react-router-dom";

import { BsCart4 } from "react-icons/bs";

import './Navbar.scss';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__items">
                <div className="navbar__items__logo">
                    <Link to="/">
                        <div>
                            Christina's Crafts Store
                        </div>
                    </Link>
                </div>
                <ul>
                    <li><Link to="/products">All Products</Link></li>
                    <li><Link to="/products/new">New Product</Link></li>
                    <li><Link to="/cart"><BsCart4/></Link></li>
                </ul>
                
            </div>
        </div>
    )
}