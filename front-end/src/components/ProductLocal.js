import { Link } from "react-router-dom";

// helper function - ratings
import setStars from "../helpers/setStars";

export default function Product({ product }) {
	const API = process.env.REACT_APP_API_URL;

	return (
		<div>
			<Link to={`/products/${product.id}`}>
				<h2>{product.name}</h2>
				<img src={API + product.image} alt="local url" />
			</Link>
			<div>Rating: {setStars(product)}</div>
			<div>Price: ${product.price}</div>
			<div>
				Featured: {product.featured ? <span>☑</span> : <span>☐</span>}
			</div>
		</div>
	);
}
