import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <Link to="/"><h1>Christina's Crafts Store</h1></Link>
            <Link to="/products"><h1>All Products</h1></Link>
            <Link to="/products/new"><button>New Product</button></Link>
        </nav>
    )
}