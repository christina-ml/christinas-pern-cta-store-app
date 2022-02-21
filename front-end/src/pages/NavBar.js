import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link to="/"><h1>Christina's Crafts Store</h1></Link>
            <div className="nav-button">
                <Link to="/products"><button>All Products</button></Link>
                <Link to="/products/new"><button>New Product</button></Link>
            </div>
        </nav>
    )
}